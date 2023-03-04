const io = require("socket.io")(3000, {
    cors: {
        origin: ['http://localhost:5173']
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
                players: {
                    [socket.id]: {
                        score: 0,
                        userName,
                    }
                }
            }
            rooms.push(room);
            console.log("Rooms: ", rooms);
            socket.join(roomName);
            io.to(roomName).emit("room:created", roomName + " created", room);
            io.emit("get:rooms", rooms)
        } else {
            io.to(roomName).emit("room:created", roomName + " already exist");
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
            socket.join(roomName);
            io.to(roomName).emit("room:joined", `${userName} joining the room ${roomName}`, existing_room_with_same_name[0])
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
            io.to(currentRoom.room_name).emit("room:updated", [])
        }
    })

    // socket.on("delete:room", (room) => {

    // })

})
