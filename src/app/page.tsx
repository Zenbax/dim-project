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
        <div
            className="relative w-full"
            style={{
                paddingTop: "56.25%", // Aspect ratio (e.g., 16:9 or adjust to match your image)
            }}
        >
            {/* Background Image */}
            <Image
                src="/images/theme-park-pixel.png"
                alt="Theme Park Pixel"
                fill
                className="absolute top-0 left-0 w-full h-full object-cover image-rendering-pixelated"
                quality={100}
            />

            {/* Jumping Gif 1 */}
            <div
                className="absolute"
                style={{
                    top: "40%", // Position relative to the height of the container
                    left: "50.5%", // Position relative to the width of the container
                    width: "3%", // Width relative to the container
                    height: "5%", // Height relative to the container
                }}
            >
                <Image
                    src="/images/JumpingGifRepeat.gif"
                    alt="Jumping Gif"
                    className="animate-bounce"
                    quality={100}
                    style={{
                        animationDuration: "1.5s",
                        animationDelay: "0.25s",
                        imageRendering: "pixelated",
                    }}
                    fill
                />
            </div>

            {/* Jumping Gif 2 */}
            <div
                className="absolute"
                style={{
                    top: "41%",
                    left: "42.5%",
                    width: "3%",
                    height: "5%",
                }}
            >
                <Image
                    src="/images/JumpingGifRepeat.gif"
                    alt="Jumping Gif"
                    className="animate-bounce"
                    quality={100}
                    style={{
                        animationDuration: "1.5s",
                        animationDelay: "0.25s",
                        imageRendering: "pixelated",
                    }}
                    fill
                />
            </div>

            {/* Ferris Wheel */}
            <div
                className="absolute"
                style={{
                    top: "56%",
                    left: "27%",
                    width: "8%",
                    height: "12%",
                }}
            >
                <Image
                    src="/images/FerrisWheel.gif"
                    alt="Ferris Wheel"
                    className="image-rendering-pixelated"
                    quality={100}
                    style={{
                        imageRendering: "pixelated",
                    }}
                    fill
                />
            </div>

            {/* Babuska Park Logo */}
            <div
                className="absolute flex-row flex"
                style={{
                    top: "5%",
                    left: "5%",
                    width: "10%",
                    height: "20%",
                }}
            >
                <Image
                    src="/images/BabuskaParkLogoPng.png"
                    alt="Babuska Park"
                    className="image-rendering-pixelated"
                    style={{
                        top: "25%",
                        left: "-17%",
                    }}
                    quality={100}
                    fill
                />
                <p className="text-[20px] font-serif text-black">Welcome To</p>
            </div>

            {/* Trampoline Park */}
            <div
                className="absolute bg-red-500"
                style={{
                    top: "37%",
                    left: "41%",
                    width: "15%",
                    height: "18%",
                    opacity,
                }}
                onMouseEnter={() => playSound("spring.mp3")}
                onMouseLeave={stopSound}
            />

            {/* Water World */}
            <div
                className="absolute bg-blue-500"
                style={{
                    top: "20%",
                    left: "55%",
                    width: "22%",
                    height: "20%",
                    opacity,
                }}
                onMouseEnter={() => playSound("splash.mp3")}
                onMouseLeave={stopSound}
            />

            {/* Buffet House */}
            <div
                className="absolute bg-green-500"
                style={{
                    top: "40%",
                    left: "60%",
                    width: "15%",
                    height: "10%",
                    opacity,
                }}
                onMouseEnter={() => playSound("eating.mp3")}
                onMouseLeave={stopSound}
            />

            {/* Skull Ride */}
            <div
                className="absolute"
                style={{
                    top: "20%",
                    left: "36%",
                    width: "11%",
                    height: "15%",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={stopSound}
            >
                {playAnimation && (
                <div
                    className="absolute"
                    style={{
                        top: "-11%", // Adjust the position relative to the parent container
                        left: "-22%", // Adjust the position relative to the parent container
                        width: "75%", // Width relative to the parent container
                        height: "75%", // Height relative to the parent container
                    }}
                >
                    <Image
                        src="/images/smoke.gif"
                        alt="smoke"
                        className="absolute"
                        quality={100}
                        fill // Ensures the image fills the parent div and scales proportionally
                        style={{
                            objectFit: "contain", // Ensures the aspect ratio is maintained
                        }}
                    />
                </div>
            )}
            </div>

            {/* Ice Cream */}
            <div
                className="absolute bg-pink-500"
                style={{
                    top: "40%",
                    left: "27%",
                    width: "8%",
                    height: "10%",
                    opacity,
                }}
                onMouseEnter={() => playSound("lick.mp3")}
                onMouseLeave={stopSound}
            />

            {/* Welcome Ticket */}
            <div
                className="absolute bg-yellow-500"
                style={{
                    top: "50%",
                    left: "57%",
                    width: "10%",
                    height: "10%",
                    opacity,
                }}
                onMouseEnter={() => playSound("welcome.mp3")}
                onMouseLeave={stopSound}
            />

            {/* Round Ride */}
            <div
                className="absolute bg-transparent rounded-full flex items-center justify-center"
                style={{
                    top: "68%",
                    left: "42%",
                    width: "10%",
                    height: "10%",
                }}
            >
                <Image
                    src="/images/ride.gif"
                    alt="Round Ride"
                    className="rounded-full image-rendering-pixelated"
                    quality={100}
                    fill
                />
            </div>

            {/* Welcome Video */}
                <video
                    className={`absolute bottom-[4%] left-[4%] w-[15%] ${
                        isExpanded ? "h-[40%]" : "h-[10%]"
                    } rounded-[20px] shadow-lg transition-all duration-300`}
                    controls
                    onEnded={handleVideoEnd}
                    onClick={toggleVideoSize}
                >
                    <source src="/videos/welcome.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
        </div>
    );
}