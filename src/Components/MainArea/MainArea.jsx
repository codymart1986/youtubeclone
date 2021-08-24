import React from 'react';
import './MainArea.css';
import MainVideo from '../MainVideo/MainVideo';
import Video from '../VideoArea/Video';

const MainArea = ({ selectedVideo, videos, onVideoSelect }) => {
    const listOfVideos = videos.map((video, id) => <Video onVideoSelect={onVideoSelect} key={id} video={video} />)

    return (
        <div className="mainArea">
            <div className="mainVideoArea">
                <MainVideo selectedVideo={selectedVideo}/>
            </div>
            <div className="relatedVideoArea">
                {listOfVideos}
            </div>
        </div>
    )
}

export default MainArea;