// import React, { useState, useEffect, useRef } from 'react';
// //import io from 'socket.io-client';
// import { create } from 'ipfs-http-client';

// const WebRTCComponent = () => {
//     //const [localStream, setLocalStream] = useState(null);
//     //const [remoteStream, setRemoteStream] = useState(null);
//     //const socket = useRef(io('http://localhost:8080')); // Your signaling server's URL
//     //const peerConnection = useRef(null);
//     const ipfsClient = create({ url: 'https://ipfs.infura.io:5001' }); // Configure your IPFS client
//     const [ipfsVideoUrl, setIpfsVideoUrl] = useState('');

//     const displayContentFromIPFS = async (cid) => {
//         try {
//             const url = `https://ipfs.io/ipfs/${cid}`; // Use a public gateway or your own IPFS node
//             // Set this URL to your video element's src to display the content
//             setIpfsVideoUrl(url);
//             console.log("Fetched IPFS URL:", url);
//         } catch (error) {
//             console.error("Error fetching from IPFS:", error);
//         }
//     };

//     // const startRecording = () => {
//     //     const mediaRecorder = new MediaRecorder(localStream); // Assuming localStream is your stream
//     //     let chunks = [];

//     //     mediaRecorder.ondataavailable = function(e) {
//     //         chunks.push(e.data);
//     //     };

//     //     mediaRecorder.onstop = async function() {
//     //         const blob = new Blob(chunks, { 'type' : 'video/mp4' });
//     //         chunks = [];

//     //         try {
//     //             const result = await ipfsClient.add(blob);
//     //             console.log("Uploaded to IPFS with CID:", result.path);
//     //         } catch (error) {
//     //             console.error("IPFS upload error:", error);
//     //         }
//     //     };

//     //     mediaRecorder.start();
//     // };

//     // const createOffer = () => {
//     //     peerConnection.current.createOffer()
//     //         .then(offer => peerConnection.current.setLocalDescription(offer))
//     //         .then(() => {
//     //             socket.current.emit('offer', peerConnection.current.localDescription);
//     //         });
//     // };

//     // useEffect(() => {
//     //     const configuration = {
//     //         iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] // Google's public STUN server
//     //     };
//     //     peerConnection.current = new RTCPeerConnection(configuration);

//     //     peerConnection.current.onicecandidate = (event) => {
//     //         if (event.candidate) {
//     //             socket.current.emit('ice-candidate', event.candidate);
//     //         }
//     //     };

//     //     peerConnection.current.ontrack = (event) => {
//     //         setRemoteStream(event.streams[0]);
//     //     };

//     //     navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//     //         .then(stream => {
//     //             setLocalStream(stream);
//     //             stream.getTracks().forEach(track => {
//     //                 peerConnection.current.addTrack(track, stream);
//     //             });
//     //         })
//     //         .catch(error => console.error('MediaStream error', error));

//     //     socket.current.on('offer', (offer) => {
//     //         peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer))
//     //             .then(() => peerConnection.current.createAnswer())
//     //             .then(answer => peerConnection.current.setLocalDescription(answer))
//     //             .then(() => {
//     //                 socket.current.emit('answer', peerConnection.current.localDescription);
//     //             });
//     //     });

//     //     socket.current.on('answer', (answer) => {
//     //         peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
//     //     });

//     //     socket.current.on('ice-candidate', (iceCandidate) => {
//     //         peerConnection.current.addIceCandidate(new RTCIceCandidate(iceCandidate));
//     //     });

//     //     return () => {
//     //         if (localStream) {
//     //             localStream.getTracks().forEach(track => track.stop());
//     //         }
//     //         if (remoteStream) {
//     //             remoteStream.getTracks().forEach(track => track.stop());
//     //         }
//     //         if (peerConnection.current) {
//     //             peerConnection.current.close();
//     //         }
//     //     };
//     // }, [localStream, remoteStream]);
//     // //<button onClick={createOffer}>Call</button>
//     // <video autoPlay playsInline muted ref={video => video && (video.srcObject = localStream)} />
//     //         <video autoPlay playsInline ref={video => video && (video.srcObject = remoteStream)} />
//     //         <button onClick={startRecording}>Start Recording</button>
//     return (
//         <div>
//             <button onClick={() => displayContentFromIPFS('QmUUBSApcb7of34gDEP7KUmbNyLim9vVmL7pL2Y9XAt4Ys')}>Load Video from IPFS</button>
//             {ipfsVideoUrl && <video src={ipfsVideoUrl} controls autoPlay />}
//         </div>
//     );
// };

// export default WebRTCComponent;
