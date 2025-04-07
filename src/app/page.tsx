import Image from "next/image";

export default function Home() {
    return (
        <div className="relative w-screen h-screen">
            <Image
                src="/images/ThemeParkPixel.png"
                alt="Theme Park Pixel"
                layout="fill"
                className="object-cover image-rendering-pixelated"
                quality={100}
            />
            <div className="absolute top-135 left-335 transform -translate-x-1/2 -translate-y-1/2">
            <Image
                    src="/images/JumpingGifRepeat.gif"
                    alt="Jumping Gif"
                    width={50}
                    height={50}
                    className="animate-bounce"
                    quality={100}
                    style={{
                        animationDuration: "1.5s", // Bounce duration
                        animationDelay: "0.25s",  // Start at the bottom
                        imageRendering: "pixelated", // Ensures sharp pixel art rendering
                    }}

                />
                
            </div>

            <div className="absolute top-140 left-280 transform -translate-x-1/2 -translate-y-1/2">
            <Image
                    src="/images/JumpingGifRepeat.gif"
                    alt="Jumping Gif"
                    width={50}
                    height={50}
                    className="animate-bounce"
                    quality={100}
                    style={{
                        animationDuration: "1.5s", // Bounce duration
                        animationDelay: "0.25s",  // Start at the bottom
                    }}
                />
                
            </div>

            <div className="absolute top-210 left-195 transform -translate-x-1/2 -translate-y-1/2">
            <Image
                    src="/images/FerrisWheel.gif"
                    alt="Jumping Gif"
                    width={200}
                    height={200}
                    quality={100}
                    style={{
                        imageRendering: "pixelated", // Ensures sharp pixel art rendering
                    }}
                />   
            </div>     

        </div>
    );
}