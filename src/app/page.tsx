'use client';
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [playAnimation, setPlayAnimation] = useState(false);
    const opacity = 0;
    const [isExpanded, setIsExpanded] = useState(true);

    const handleVideoEnd = () => {
        setIsExpanded(false);
    };

    const toggleVideoSize = () => {
        setIsExpanded(!isExpanded);
    };

    const playSound = (sound: string) => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        const audio = new Audio(`/sounds/${sound}`);
        audioRef.current = audio;
        audio.play();
    };

    const stopSound = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current = null;
        }
    };

    const handleMouseEnter = () => {
        if (!playAnimation) {
            setPlayAnimation(true);
            playSound("laughter.mp3");
        }
    };

    useEffect(() => {
        if (playAnimation) {
            const animationDuration = 3200; // Duration of the GIF in milliseconds
            const timer = setTimeout(() => setPlayAnimation(false), animationDuration);
            return () => clearTimeout(timer);
        }
    }, [playAnimation]);

    useEffect(() => {
        const handleWindowBlur = () => stopSound();
        window.addEventListener("blur", handleWindowBlur);
        return () => window.removeEventListener("blur", handleWindowBlur);
    }, []);

    return (
        <div className="relative w-screen h-screen">
            <Image
                src="/images/theme-park-pixel.png"
                alt="Theme Park Pixel"
                fill
                className="object-cover image-rendering-pixelated"
                quality={100}
            />
            <Image
                src="/images/babuska-park.svg"
                alt="Babuska Park"
                className="absolute top-10 left-10 object-cover image-rendering-pixelated"
                quality={100}
                width={400}
                height={200}
            />
            <h1
                className="absolute top-24 left-10 object-cover text-black text-[30px] image-rendering-pixelated"
            >A park for all sizes!</h1>
            {/* Buy Tickets Button */}
            <button
                className="absolute top-10 right-10 px-6 py-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400"
                onClick={() => alert("Redirecting to ticket purchase...")}
            >
                Buy Tickets
            </button>
            {/* Trampoline Park Div */}
            <div
                onMouseEnter={() => playSound("spring.mp3")}
                onMouseLeave={stopSound}
                className="
                absolute top-[420px] left-[800px] w-[250px] h-[100px] bg-red-500
                transform -translate-x-1/2 -translate-y-1/2"
                style={{opacity}}
            />
            {/* Water World Div */}
            <div
                onMouseEnter={() => playSound("splash.mp3")}
                onMouseLeave={stopSound}
                className="
                absolute top-[300px] left-[1080px] w-[410px] h-[130px] bg-blue-500
                transform -translate-x-1/2 -translate-y-1/2"
                style={{opacity}}
            />
            {/* Buffet House Div */}
            <div
                onMouseEnter={() => playSound("eating.mp3")}
                onMouseLeave={stopSound}
                className="
                absolute top-[440px] left-[1120px] w-[250px] h-[100px] bg-green-500
                transform -translate-x-1/2 -translate-y-1/2"
                style={{opacity}}
            />
            {/* Skull Ride Div */}
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={stopSound}
                className="
                    absolute top-[260px] left-[700px] w-[170px] h-[140px]
                    transform -translate-x-1/2 -translate-y-1/2"
            >
                {playAnimation && (
                    <Image
                        src="/images/smoke.gif"
                        alt="smoke"
                        width={31 * 3} // Set the width
                        height={43 * 3} // Set the height
                        quality={100}
                        className="absolute -top-[27px] -left-[27px] z-10  image-rendering-pixelated"
                    />
                )}
            </div>
            {/* Ice Cream Div */}
            <div
                onMouseEnter={() => playSound("lick.mp3")}
                onMouseLeave={stopSound}
                className="
                absolute top-[430px] left-[530px] w-[120px] h-[90px] bg-pink-500
                transform -translate-x-1/2 -translate-y-1/2"
                style={{opacity}}
            />
            {/* Welcome Ticket Div */}
            <div
                onMouseEnter={() => playSound("welcome.mp3")}
                onMouseLeave={stopSound}
                className="
                absolute top-[540px] left-[1050px] w-[210px] h-[100px] bg-yellow-500
                transform -translate-x-1/2 -translate-y-1/2"
                style={{opacity}}
            />
            {/* Round Ride Element */}
            <div
                className="
        absolute top-[700px] left-[800px] w-[170px] h-[170px] bg-transparent rounded-full
        transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
                <Image
                    src="/images/ride.gif"
                    alt="Round Ride"
                    width={170}
                    height={170}
                    className="rounded-full  image-rendering-pixelated"
                    quality={100}
                />
            </div>
            {/* Welcome Video Element */}
            <video
                className={`absolute bottom-5 left-5 w-[300px] ${
                    isExpanded ? "h-[414px]" : "h-[120px]"
                } rounded-[20px] shadow-lg transition-all duration-300`}
                controls
                autoPlay
                onEnded={handleVideoEnd}
                onClick={toggleVideoSize}
            >
                <source src="/videos/welcome.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
}