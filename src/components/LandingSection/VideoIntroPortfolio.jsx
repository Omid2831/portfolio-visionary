import React, { useState } from "react";
import PlayOverlay from "../uidesign/PlayOverlay";
import "../../styles/video-intro.css";
import "../../styles/portfolio-section.css"

const YT_SRC = "https://www.youtube.com/embed/N0Gk7AdrQV4?autoplay=1";

const VideoIntroPortfolio = () => {
    const [videoSrc, setVideoSrc] = useState(YT_SRC);

    const handleReplay = () => {
        setVideoSrc(""); // Force iframe to unload
        setTimeout(() => setVideoSrc(YT_SRC), 500); // Reload after short delay
    };

    return (
        <section className="relative w-full h-full min-h-full md:min-h-150 rounded-2xl overflow-hidden group">
            {/* Video Background */}
            <div className="video-background-wrapper">
                {videoSrc && (
                    <iframe
                        className="video-background"
                        src={videoSrc}
                        title="YouTube video player"
                        allow="autoplay;"
                        allowFullScreen
                    />
                )}
            </div>

            {/* Overlay Gradient */}
            <div className="video-overlay"></div>

            {/* Content Overlay - Glassmorphism Design */}
            <PlayOverlay onClick={handleReplay} />

            {/* Animated Border Glow */}
            <div className="video-border-glow"></div>
        </section>
    );
};

export default VideoIntroPortfolio;
