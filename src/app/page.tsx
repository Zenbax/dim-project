'use client';
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function Home() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

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

    useEffect(() => {
        const handleWindowBlur = () => stopSound();
        window.addEventListener("blur", handleWindowBlur);
        return () => window.removeEventListener("blur", handleWindowBlur);
    }, []);

    return (
        <div className="relative w-screen h-screen">
            <Image
                src="/images/ThemeParkPixel.png"
                alt="Theme Park Pixel"
                layout="fill"
                className="object-cover image-rendering-pixelated"
                quality={100}
            />
            {/* Trampoline Park Div */}
            <div
                onMouseEnter={() => playSound("spring.mp3")}
                onMouseLeave={stopSound}
                className="
                absolute top-[420px] left-[800px] w-[250px] h-[100px] bg-red-500 opacity-50
                transform -translate-x-1/2 -translate-y-1/2"
            />
            {/* Water World Div */}
            <div
                onMouseEnter={() => playSound("splash.mp3")}
                onMouseLeave={stopSound}
                className="
                absolute top-[300px] left-[1080px] w-[410px] h-[130px] bg-blue-500 opacity-50
                transform -translate-x-1/2 -translate-y-1/2"
            />
            {/* Buffet House Div */}
            <div
                onMouseEnter={() => playSound("eating.mp3")}
                onMouseLeave={stopSound}
                className="
                absolute top-[440px] left-[1120px] w-[250px] h-[100px] bg-green-500 opacity-50
                transform -translate-x-1/2 -translate-y-1/2"
            />
            {/* Skull Ride Div */}
            <div
                onMouseEnter={() => playSound("laughter.mp3")}
                onMouseLeave={stopSound}
                className="
                absolute top-[260px] left-[700px] w-[170px] h-[140px] bg-orange-500 opacity-50
                transform -translate-x-1/2 -translate-y-1/2"
            />
            {/* Ice Cream Div */}
            <div
                onMouseEnter={() => playSound("lick.mp3")}
                onMouseLeave={stopSound}
                className="
                absolute top-[430px] left-[530px] w-[120px] h-[90px] bg-pink-500 opacity-50
                transform -translate-x-1/2 -translate-y-1/2"
            />
            {/* Welcome Ticket Div */}
            <div
                onMouseEnter={() => playSound("welcome.mp3")}
                onMouseLeave={stopSound}
                className="
                absolute top-[540px] left-[1050px] w-[210px] h-[100px] bg-yellow-500 opacity-50
                transform -translate-x-1/2 -translate-y-1/2"
            />
        </div>
    );
}