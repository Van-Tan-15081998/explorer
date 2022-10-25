import { ref } from "vue";
import openSocket from "socket.io-client";

export function useSocketIo() {
  return openSocket('http://localhost:3030/');
}

export function useSocketName(socket) {
  const name = ref("");

  socket.on("name", serverName => {
    name.value = serverName;
  });

  function setDisplayName(value) {
    socket.emit("updateName", value);
  }

  function registerChannel(data) {
    socket.emit("register_channel", data);
  }

  function ganhTeamLaDe() {
    socket.emit("ganhTeamLaDe");
  }

  return [name, setDisplayName, registerChannel, ganhTeamLaDe];
}