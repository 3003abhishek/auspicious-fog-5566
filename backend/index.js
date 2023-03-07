const io = require("socket.io")(3000, {
    cors: {
        origin: 'http://localhost:5173',
    }
});

const rooms = [];

io.on("connection", socket => {
    console.log("socket id", socket.id);

    socket.on("create:room", (userName, roomName) => {
        const existing_room_with_same_name = rooms.filter(room => room.room_name == roomName);
        if (existing_room_with_same_name.length <= 0) {
            const room = {
                room_name: roomName,
                vacant: true,
                gameStart: false,
                players: {
                    [socket.id]: {
                        score: 0,
                        userName,
                    }
                }
            }
            rooms.push(room);
            socket.join(roomName);
            io.to(roomName).emit("room:created", roomName + " created", room);
            io.emit("get:rooms", rooms)
        } else {
            io.to(socket.id).emit("room:created", roomName + " already exist", {});
        }
    })

    socket.on("join:room", (userName, roomName) => {
        const existing_room_with_same_name = rooms.filter(room => room.room_name == roomName);
        if (existing_room_with_same_name.length > 0 && existing_room_with_same_name[0].vacant) {
            const room = existing_room_with_same_name[0];
            room.players[socket.id] = {
                score: 0,
                userName
            }
            room.vacant = false;
            room.gameStart = true;
            socket.join(roomName);
            io.to(roomName).emit("room:joined", `${userName} joined the room ${roomName}`, existing_room_with_same_name[0])
            io.emit("get:rooms", rooms)
        } else {
            io.to(socket.id).emit("room:joined", existing_room_with_same_name.length ? `${roomName} already full` : `${roomName} doesn't exist`)
        }
    })

    socket.on("send:rooms", () => {
        io.to(socket.id).emit("get:rooms", rooms)
    })

    socket.on("update:room", (currentRoom) => {
        const index = rooms.findIndex((room) => room.room_name === currentRoom.room_name);
        if (index >= 0) {
            rooms[index] = currentRoom;
            io.to(currentRoom.room_name).emit("room:updated", rooms[index]);
        } else {
            io.to(currentRoom.room_name).emit("room:updated", {})
        }
    })


    socket.on("restart:game", (currentRoom) => {
        const index = rooms.findIndex((room) => room.room_name === currentRoom.room_name);
        if (index >= 0) {
            rooms[index].players[socket.id].score = 0;
            let player1 = rooms[index].players[Object.keys(rooms[index].players)[0]];
            let player2 = rooms[index].players[Object.keys(rooms[index].players)[1]];
            if (player1.score == 0 && player2.score == 0) {
                rooms[index].gameStart = false;
                io.to(socket.id).emit("room:restarted", rooms[index]);
                setTimeout(() => {
                    rooms[index].gameStart = true;
                    io.to(currentRoom.room_name).emit("room:restarted", rooms[index]);
                }, 500)
            } else {
                rooms[index].gameStart = false;
                io.to(socket.id).emit("room:restarted", rooms[index]);
            }
        } else {
            io.to(rooms[index].room_name).emit("room:restarted", {});
        }
    })


    socket.on("delete:room", (currentRoom) => {
        const index = rooms.findIndex((room) => room.room_name === currentRoom.room_name);
        if (index >= 0) {
            rooms.splice(index, 1);
            io.to(currentRoom.room_name).emit("room:deleted", `Room ${currentRoom.room_name} deleted.`);
            socket.leave(currentRoom.room_name);
            io.emit("get:rooms", rooms)
        } else {
            io.to(socket.id).emit("room:deleted", "Room doesn't exist.");
        }
    })

})

