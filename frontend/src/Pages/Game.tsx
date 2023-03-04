import React, { useContext } from 'react'
import { SocketContext } from '../context/socket.context'

function Game() {

    const { socket, rooms, handleRoomCreator, handleJoinRoom, playerOne, playerTwo, currentRoom }: any = useContext(SocketContext)
    console.log('currentRoom:', currentRoom)


    return currentRoom?.vacant ? <h1>Looading...</h1> : (
        <div>Game</div>
    )
}

export default Game