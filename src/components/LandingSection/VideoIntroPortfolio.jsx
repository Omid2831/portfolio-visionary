import PlayOverlay from "../uidesign/PlayOverlay";
import "../../styles/video-intro.css";

const VideoIntroPortfolio = () => {
    return (
        <div className="relative w-full h-full min-h-full md:min-h-150 rounded-2xl overflow-hidden group">
            {/* Video Background */}
            <div className="video-background-wrapper">
                <iframe
                    className="video-background"
                    src="https://www.youtube.com/embed/N0Gk7AdrQV4?autoplay=1"
                    title="YouTube video player"
                    allow="autoplay; "
                    allowFullScreen
                />
            </div>

            {/* Overlay Gradient */}
            <div className="video-overlay"></div>

            {/* Content Overlay - Glassmorphism Design */}
            <PlayOverlay />

            {/* Animated Border Glow */}
            <div className="video-border-glow"></div>
        </div>
    );
};

export default VideoIntroPortfolio;
