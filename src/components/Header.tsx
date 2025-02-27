import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.webp';
import bgmusic from '../assets/bgmusic.mp3';
import { MdMusicNote, MdMusicOff } from "react-icons/md";




const Header = () => {
    const [isMusicPlaying, setIsMusicPlaying] = useState(true);

    useEffect(() => {
        const audio = new Audio(bgmusic);
        audio.volume = 0.5;
        audio.loop = true;

        if (isMusicPlaying) {
            audio.play();
        } else {
            audio.pause();
        }

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [isMusicPlaying]);

    return (
        <div className="flex flex-col">
            <header className="happy-monkey text-white p-4 bg-[#181C14] shadow-xl">
                <Link
                    to="/"
                    className="inline-block cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:font-bold"
                >
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl">MIND MINT</h1>
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-12 w-8 rounded-sm bg-transparent object-contain filter contrast-125 brightness-115  transition-all"
                        />
                    </div>
                </Link>

                <button
                    onClick={() => setIsMusicPlaying(!isMusicPlaying)}
                    className="p-2 bg-[#78a224] text-white rounded-lg hover:bg-[#60821d] transition-colors duration-200 fixed right-4 top-4 flex items-center justify-center"
                    title={isMusicPlaying ? "Stop Music" : "Play Music"} // Tooltip
                >
                    {isMusicPlaying ? (
                        <MdMusicNote className="text-2xl" /> // Music On Icon
                    ) : (
                        <MdMusicOff className="text-2xl" /> // Music Off Icon
                    )}
                </button>
            </header>
        </div>
    )

};

export default Header;