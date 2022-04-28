import ioClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";

const socket = ioClient(ENDPOINT)

export const io = socket


// socket.on('arduino', data=>{
//     console.log(data);
//     const counter = document.getElementById('counter');
//     counter.innerHTML = data;
//     let nbrdata = parseInt(data);
//     if (nbrdata<=400){
//         document.getElementById('counter').style.color="green";
//     }else{
//         document.getElementById('counter').style.color="red";
//     }
// });