import React from "react";

const FrameView = ({url}) => {
    return (
        <div>
        {/* Display an iframe when disconnected */}
        <iframe 
          src={url}
          title="External Content" 
          width="100%" 
          height="600px" 
        />
      </div>
    )
}

export default FrameView