'use client'

export default function Tools() {
    const icons = [
        { src: '/icon/kinemaster.png', name: 'Kinemaster' },
        { src: '/icon/pixellab.png', name: 'Pixellab' },
        { src: '/icon/capcut.png', name: 'Capcut Pro' },
        { src: '/icon/sr.png', name: 'Screen Recorder' },
    ]

    return (
        <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="text-center mb-[60px] mt-[30px]">
                <h1 className="text-4xl font-bold mb-2">Tools for Content Creator</h1>
            </div>

            <div
                className="
                    grid
                    grid-cols-4
                    sm:grid-cols-5
                    md:grid-cols-6
                    lg:grid-cols-8z
                    xl:grid-cols-10
                    gap-4
                "
            >
                {icons.map((item, index) => (
                    <div
                        key={index}
                        className="
                            flex flex-col items-center justify-center
                            bg-white
                            border border-gray-200
                            rounded-2xl
                            p-4
                            shadow-sm
                            hover:shadow-lg
                            hover:-translate-y-1
                            transition-all duration-300
                        "
                    >
                        <img
                            src={item.src}
                            alt={item.name}
                            className="
                                w-10 h-10
                                sm:w-12 sm:h-12
                                md:w-14 md:h-14
                                object-contain
                                mb-2
                            "
                        />
                        <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
