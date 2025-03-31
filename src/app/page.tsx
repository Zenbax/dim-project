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
        </div>
    );
}