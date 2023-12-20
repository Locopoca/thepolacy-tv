
import React from 'react';
import "../App.css"

const VideoPlayer = ({ currentVideoUrl }) => {
  return (
    <div className='video-player'>
      {currentVideoUrl && <video src={currentVideoUrl} controls autoPlay />}
    </div>
  );
};

export default VideoPlayer;


// import React, { useState} from 'react';

// const VideoPlayer = () => {


//     // const [ipfsVideoUrl, setIpfsVideoUrl] = useState('');
//     const [currentVideoUrl, setCurrentVideoUrl] = useState('');

//     // const displayContentFromIPFS = async (cid) => {
//     //     try {
//     //         const url = `https://ipfs.io/ipfs/${cid}`;
//     //         setIpfsVideoUrl(url);
//     //         console.log("Fetched IPFS URL:", url);
//     //     } catch (error) {
//     //         console.error("Error fetching from IPFS:", error);
//     //     }
//     // };

//     const selectCID = (cid) => {
//         const newVideoUrl = `https://ipfs.io/ipfs/${cid}`;
//         setCurrentVideoUrl(newVideoUrl);
//         console.log('Selected CID:', cid, 'New Video URL:', newVideoUrl);
//       };

   
//     return (
//         <div>
//             {/* <button onClick={() => displayContentFromIPFS('QmUUBSApcb7of34gDEP7KUmbNyLim9vVmL7pL2Y9XAt4Ys')}>Load Video from IPFS</button>
//             {ipfsVideoUrl && <video src={ipfsVideoUrl} controls autoPlay />} */}
//             {currentVideoUrl && <video src={currentVideoUrl} controls autoPlay />}
//         </div>
//     );
// };

// export default VideoPlayer;
