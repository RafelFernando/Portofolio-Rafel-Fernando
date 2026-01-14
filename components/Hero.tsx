'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
    Github,
    Linkedin,
    Instagram,
    Twitter,
    Facebook,
    Youtube,
} from 'lucide-react';

export default function Hero() {

    const texts = [
        "I freelance to complete several web information systems.",
        "I like building something.",
        "I Love Fried Rice, ML, AI, and Web Programming.",
        "I enjoy learning new technologies and improving my skills.",
        "I am a gaming content creator.",
    ];

    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timeout;

        if (!isDeleting && charIndex < currentText.length) {
            // MENGETIK
            timeout = setTimeout(() => {
                setDisplayText((prev) => prev + currentText[charIndex]);
                setCharIndex(charIndex + 1);
            }, 60);

        } else if (!isDeleting && charIndex === currentText.length) {
            // PAUSE SETELAH SELESAI MENGETIK
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 1200);

        } else if (isDeleting && charIndex > 0) {
            // MENGHAPUS
            timeout = setTimeout(() => {
                setDisplayText((prev) => prev.slice(0, -1));
                setCharIndex(charIndex - 1);
            }, 40);

        } else if (isDeleting && charIndex === 0) {
            // PINDAH KE TEKS BERIKUTNYA
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex]);

    return (
        <section className="w-full flex flex-col lg:flex-row lg:min-h-[calc(100vh-80px)]">
            <div className="w-full h-full pl-[50px] pr-[50px] lg:pl-[150px] lg:pr-[150px">
                <div className="flex justify-center lg:justify-start gap-3 mt-[50px] lg:flex lg:gap-3 lg:mt-[130px]">
                    <Link href="https://github.com/rafelfernando" className="text-3xl transition-all duration-300 hover:scale-125 hover:bg-gray-900 hover:text-white border-2 border-transparent hover:border-gray-900 rounded-full p-2"
                        target="_blank"
                        aria-label="GitHub">
                        <Github size={32} />
                    </Link>
                    <Link href="https://linkedin.com/rafelfernando" className="text-3xl transition-all duration-300 hover:scale-125 hover:bg-[#0077B5] hover:text-white border-2 border-transparent hover:border-[#0077B5] rounded-full p-2"
                        target="_blank"
                        aria-label="LinkedIn">
                        <Linkedin size={32} />
                    </Link>
                    <Link href="https://instagram.com/rafelfernando" className="text-3xl transition-all duration-300 hover:scale-125 hover:bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:text-white rounded-full p-2"
                        target="_blank"
                        aria-label="Instagram">
                        <Instagram size={32} />
                    </Link>
                    <Link href="https://twitter.com/rafelfernando" className="text-3xl transition-all duration-300 hover:scale-125 hover:bg-[#1DA1F2] hover:text-white border-2 border-transparent hover:border-[#1DA1F2] rounded-full p-2"
                        target="_blank"
                        aria-label="Twitter">
                        <Twitter size={32} />
                    </Link>
                    <Link href="https://facebook.com/rafelfernando" className="text-3xl transition-all duration-300 hover:scale-125 hover:bg-[#1877F2] hover:text-white border-2 border-transparent hover:border-[#1877F2] rounded-full p-2"
                        target="_blank"
                        aria-label="Facebook">
                        <Facebook size={32} />
                    </Link>
                    <Link href="https://youtube.com/rafelfernando" className="text-3xl transition-all duration-300 hover:scale-125 hover:bg-[#FF0000] hover:text-white border-2 border-transparent hover:border-[#FF0000] rounded-full p-2"
                        target="_blank"
                        aria-label="Youtube">
                        <Youtube size={32} />
                    </Link>
                </div>

                <div>
                    <h2 className="text-[50px] text-center lg:text-left lg:text-[68px] font-bold mt-[10px]">Hi, I'm <span className="text-blue-600">Rafel</span></h2>
                </div>

                <div>
                    <p className="text-center text-[22px] lg:text-left lg:text-[24px] font-semibold tracking-[2px]">
                        Collage Student | Data Science | Web Developer | Freelancer | Content Creator
                    </p>
                </div>

                {/* TEXT TYPING */}
                <div className="mt-4 min-h-[24px] mb-[40px] lg:mb-[90px]">
                    <p className="text-center lg:text-left text-[28px] lg:text-[55px] font-semibold">
                        {displayText}
                        <span className="animate-pulse">|</span>
                    </p>
                </div>
            </div>

            <div className="w-full flex justify-center lg:items-center mt-6 lg:mt-0">
                <div
                    className="
                                    w-[200px] h-[200px]
                                    sm:w-[240px] sm:h-[240px]
                                    md:w-[340px] md:h-[340px]
                                    lg:w-[400px] lg:h-[400px]
                                    rounded-full overflow-hidden
                                    mx-auto
                                    lg:mx-0
                                    lg:ml-[80px]
                                    lg:mr-[150px]
                                    transition-all duration-300
                                "
                >
                    <img
                        src="/rafel.jpg"
                        alt="Rafel Fernando Full Stack Developer, Portofolio"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

        </section>
    );
}
