import { Github, SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'

const projects = [
    {
        title: 'Portofolio',
        desc: 'Aplikasi berbasis website untuk memudahkan pengguna untuk mengakses informasi tentang IDT. Registrasi dan login menggunakan kode OTP melalui Whatsapp',
        image: '/project/porto.png',
        github: 'https://github.com/rafelfernando',
        demo: 'https://github.com/rafelfernando',
        tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
        title: 'Information System Talent Hub',
        desc: 'Membuat sistem informasi talenthub sebuah platform pencarian kerja untuk Solo Technopark. Membuat frontend dan backend dengan arsitektur disesuaikan dengan internal perusahaan',
        image: '/project/talenthub.png',
        github: 'https://github.com/rafelfernando',
        demo: 'https://github.com/rafelfernando',
        tech: ['React.js', 'Express', 'JWT','Tailwind CSS', 'MySQL', 'Lucide React', 'Framer Motion'],
    }, 
    {
        title: 'Website IDT',
        desc: 'Aplikasi berbasis website untuk memudahkan pengguna untuk mengakses informasi tentang IDT. Registrasi dan login menggunakan kode OTP melalui Whatsapp',
        image: '/project/idt.png',
        github: 'https://github.com/rafelfernando',
        demo: 'https://github.com/rafelfernando',
        tech: ['React.js', 'Tailwind CSS', 'MySQL', 'Foonte'],
    },
    {
        title: 'Website Sekolah',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio suscipit aspernatur soluta a.',
        image: '/project/proyek1.webp',
        github: 'https://github.com/rafelfernando',
        demo: 'https://github.com/rafelfernando',
        tech: ['React.js', 'Tailwind CSS', 'MySQL', 'Foonte'],
    },
    {
        title: 'Sistem Pendukung Keputusan Metode SAW',
        desc: 'Sistem pendukung keputusan menggunakan metode SAW untuk menentukan guru terbaik di SDN Langenharjo 01',
        image: '/project/spk.png',
        github: 'https://github.com/rafelfernando',
        demo: 'https://github.com/rafelfernando',
        tech: ['PHP', 'CSS', 'MySQL'],
    },
    {
        title: 'Sistem Pendukung Keputusan Metode Smart',
        desc: 'Sistem pendukung keputusan menggunakan metode SMART untuk menentukan rekomendasi ponsel terbaik',
        image: '/project/spk-smart.png',
        github: 'https://github.com/rafelfernando',
        demo: 'https://github.com/rafelfernando',
        tech: ['PHP', 'CSS', 'MySQL'],
    },
]

export default function Project() {
    return (
        <section className="w-[90%] mx-auto mt-16 overflow-x-hidden">
            <div className='text-center mb-[30px]'>
                <h1 className='text-4xl font-bold mb-2'>My Project</h1>
                <p className='text-gray-600'>The following are some projects that I have created using various programming languages.</p>
            </div>

            <div className="mb-[30px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                {projects.map((item, index) => (
                    <div
                        key={index}
                        className="
                          group
                          bg-white
                          rounded-2xl
                          overflow-hidden
                          border border-gray-400
                          shadow-md
                          hover:shadow-2xl
                          transition-all duration-300
                        "
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="p-5 flex flex-col gap-4">
                            <div className="flex gap-3">
                                <Link
                                    href={item.github}
                                    target="_blank"
                                    className="
                                      p-2
                                      rounded-full
                                      border border-gray-300
                                      text-gray-700
                                      hover:bg-gray-900 hover:text-white
                                      hover:scale-110
                                      transition-all duration-300
                                    "
                                >
                                    <Github size={22} />
                                </Link>

                                <Link
                                    href={item.demo}
                                    target="_blank"
                                    className="
                                      p-2
                                      rounded-full
                                      border border-gray-300
                                      text-gray-700
                                      hover:bg-blue-600 hover:text-white
                                      hover:scale-110
                                      transition-all duration-300
                                    "
                                >
                                    <SquareArrowOutUpRight size={22} />
                                </Link>
                            </div>

                            <div>
                                <h1 className="titleproject text-2xl font-bold text-gray-900">
                                    {item.title}
                                </h1>
                                <p className="text-lg text-gray-600 mt-1 ">
                                    {item.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {item.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="
                                                        text-sm
                                                        px-3 py-1
                                                        rounded-full
                                                        bg-gray-100
                                                        text-gray-700
                                                        border border-gray-300
                                                        group-hover:border-blue-500
                                                        group-hover:text-blue-500
                                                        transition-all duration-300
                                                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
