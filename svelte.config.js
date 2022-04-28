import adapter from '@sveltejs/adapter-auto';
import {SerialPort} from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
/// ... (other imports here)
import { Server } from 'socket.io'; // <-- Import the Socket.IO server

const config = {
    // ...

    kit: {
        adapter: adapter(),
        vite: {
            plugins: [
                {
                    name: 'sveltekit-socket-io',
                    configureServer(server) {
                        const io = new Server(server.httpServer);

                        // This is located in the svelte config (see above "Socket.IO stuff goes here")
						io.on('connection', (socket) => {
							
                        //arduino stuff;
                            
                        //const ReadLine = SerialPort.parsers.Readline;
                        const port = new SerialPort({path:'/dev/cu.usbmodemFA131', baudRate:9600});
                        const parser = port.pipe(new ReadlineParser({delimiter:'\r\n'}))
                
                        parser.on('data', data=>{
                            let pValue = data;
                            io.emit('arduino', pValue);
                        });
                
                        parser.on('error', error=>{
                            console.log(error);
                        });
                                            // Receive incoming messages and broadcast them
							socket.on('arduino', (pValue) => {
								io.emit('arduino', {	
									pValue:pValue,
								//	time: new Date().toLocaleString()
								});
							});
						});

                        console.log('SocketIO injected');
                    }
                }
            ]
        }
    },

    // ...
};

export default config;
