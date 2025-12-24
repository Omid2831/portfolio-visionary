import React from 'react'

const PlayOverlay = ({ onClick }) => {
    return (
        <div className="video-content-overlay cursor-pointer"  onClick={onClick}>
            <div className="video-content-inner">
                <div className="video-title-glow">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Featured Work
                    </h3>
                    <p className="text-sm md:text-base text-gray-300">
                        3D Animation Showcase
                    </p>
                </div>
                <div className="video-play-indicator">
                    <div className="play-icon"></div>
                </div>
            </div>
        </div>
    )
}

export default PlayOverlay