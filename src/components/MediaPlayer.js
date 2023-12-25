import React, { useState} from 'react';

const MediaPlayer = ({ currentVideoUrl }) => {
  const [mediaType, setMediaType] = useState(null);

  const handleMetadataLoaded = (e) => {
    if (e.target.videoHeight > 0) {
      setMediaType('video');
    } else {
      setMediaType('audio');
    }
  };

  return (
    <div className={`media-player ${mediaType}`}>
      <video src={currentVideoUrl} controls onLoadedMetadata={handleMetadataLoaded} style={{ display: mediaType === 'video' ? 'block' : 'none' }} />
      <audio src={currentVideoUrl} controls autoplay style={{ display: mediaType === 'audio' ? 'block' : 'none' }} />
    </div>
  );
};

export default MediaPlayer;