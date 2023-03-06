import useToastMsg, { TToastMsg } from "../customHooks/useToastMsg";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { io } from "socket.io-client";

export interface IUser {
    score: number,
    userName: string
}

export interface IRoom {
    room_name: string,
    vacant: boolean,
    players: IUser,
    gameStart: boolean
}

export type TContext = {
    socket?: any;
    handleRoomCreator?: (user: string, room: string) => void;
    handleJoinRoom?: (user: string, room: string) => void;
    rooms?: Array<IRoom>;
    currentRoom?: IRoom;
    userName?: string;
    play: boolean;
    setPlay: (arg: boolean) => void;
    setUserName?: (arg: string) => void;
};

export const SocketContext = createContext<TContext | string>("");

const SocketContextProvider = ({ children }: { children: React.ReactNode }) => {
    const toastMsg: TToastMsg = useToastMsg();
    const [socket, setSocket] = useState<any>()
    const [rooms, setRooms] = useState<IRoom[]>([])
    const [currentRoom, setCurrentRoom] = useState<IRoom>()
    const [userName, setUserName] = useState<string>("");
    const [play, setPlay] = useState<boolean>(true);
    const navigate = useNavigate()


    useEffect(() => {
        const socket = io(import.meta.env.VITE_APP_BACKEND_URL);
        setSocket(socket);

        socket.on("room:created", (msg, room) => {
            toastMsg({
                title: msg,
                status: 'info'
            })

            if (room) {
                setCurrentRoom(room);
                navigate("/game/Easy")
            }
        })

        socket.on("room:joined", (msg, roomDetails) => {
            toastMsg({
                title: msg,
                status: 'info'
            })
            if (roomDetails) {
                setCurrentRoom(roomDetails);
                navigate("/game/Easy")
            }
        })

        socket.on("get:rooms", (rooms) => {
            setRooms(rooms)
        })

        socket.on("room:updated", roomDetails => {
            setCurrentRoom(roomDetails)
        })

        socket.on("room:restarted", roomDetails => {
            setCurrentRoom(roomDetails)
        })

        socket.on("room:deleted", msg => {
            toastMsg({
                title: msg,
                status: 'info'
            })
            setCurrentRoom(undefined)
            navigate("/")
            socket.on("get:rooms", (rooms) => {
                setRooms(rooms)
            })
        })

    }, [])


    const handleRoomCreator = (user: string, room: string): void => {
        if (!user || !room) return;
        socket.emit("create:room", user, room)
    }

    const handleJoinRoom = (user: string, room: string): void => {
        if (!user || !room) return;
        socket.emit("join:room", user, room)
    }

    return <SocketContext.Provider value={{
        socket,
        rooms,
        handleRoomCreator,
        handleJoinRoom,
        currentRoom,
        userName,
        setUserName,
        play,
        setPlay
    }}>{children}</SocketContext.Provider>
}

export default SocketContextProvider;