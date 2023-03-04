import { Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { IRoom, SocketContext, TContext } from "../Context/socket.context";

function Check() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const roomNameRef = useRef<HTMLInputElement>(null);
  const optionRef = useRef<HTMLSelectElement>(null);
  const roomsRef = useRef<HTMLSelectElement>(null);
  const [showOptions, setShowOptions] = useState<boolean>(true);

  const { socket, rooms, handleRoomCreator, handleJoinRoom }: any =
    useContext(SocketContext);
  console.log("rooms:", rooms);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (optionRef.current!.value == "") return;
        optionRef.current!.value == "join"
          ? handleJoinRoom(userNameRef.current!.value, roomsRef.current!.value)
          : handleRoomCreator(
              userNameRef.current!.value,
              roomNameRef.current!.value
            );
      }}
    >
      <Select
        ref={optionRef}
        placeholder="Choose option"
        onChange={(e) => {
          if (e.target.value !== "") {
            setShowOptions(e.target.value == "create" ? true : false);
            if (e.target.value == "join") {
              socket.emit("send:rooms");
            }
          }
        }}
      >
        <option value="create">Create Room</option>
        <option value="join">Join Room</option>
      </Select>
      <Input
        ref={userNameRef}
        required
        placeholder="Enter your name to create room"
      />
      {showOptions ? (
        <Input
          ref={roomNameRef}
          required
          placeholder="Enter room name to create"
        />
      ) : (
        <Select placeholder="Choose Room" ref={roomsRef}>
          {rooms.map((room: any, i: number) => (
            <option key={i} value={room.room_name} disabled={!room.vacant}>
              {room.room_name}
            </option>
          ))}
        </Select>
      )}
      <Input
        type={"submit"}
        value={!showOptions ? "Join room" : "Create room"}
      />
    </form>
  );
}

export default Check;
