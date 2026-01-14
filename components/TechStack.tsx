'use client'

export default function TechStack() {
    const icons = [
        { src: '/icon/vscode.svg', name: 'VS Code' },
        { src: '/icon/html.svg', name: 'HTML' },
        { src: '/icon/css.svg', name: 'CSS' },
        { src: '/icon/php.svg', name: 'PHP' },
        { src: '/icon/js.svg', name: 'Javascript' },
        { src: '/icon/ts.svg', name: 'Typescript' },
        { src: '/icon/java.svg', name: 'Java' },
        { src: '/icon/laravel.svg', name: 'Laravel' },
        { src: '/icon/filament.svg', name: 'Filament' },
        { src: '/icon/nodejs.svg', name: 'Node.js' },
        { src: '/icon/express.svg', name: 'Express' },
        { src: '/icon/react.svg', name: 'React' },
        { src: '/icon/nextjs.svg', name: 'Next.js' },
        { src: '/icon/python.svg', name: 'Python' },
        { src: '/icon/flask.svg', name: 'Flask' },
        { src: '/icon/streamlit.svg', name: 'Streamlit' },
        { src: '/icon/selenium.svg', name: 'Selenium' },
        { src: '/icon/jupyter.svg', name: 'Jupyter' },
        { src: '/icon/mysql.svg', name: 'MySQL' },
        { src: '/icon/sequelize.svg', name: 'Sequelize' },
        { src: '/icon/axios.svg', name: 'Axios' },
        { src: '/icon/vite.svg', name: 'Vite' },
        { src: '/icon/tailwind.svg', name: 'Tailwind CSS' },
        { src: '/icon/bulma.svg', name: 'Bulma CSS' },
        { src: '/icon/postman.svg', name: 'Postman' },
        { src: '/icon/github.svg', name: 'Github' },
        { src: '/icon/framermotion.svg', name: 'Framer Motion' },
    ]

    return (
        <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="text-center mb-12 mt-8">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Tech Stack
                </h1>
            </div>

            <div
                className="
                    grid
                    grid-cols-4
                    sm:grid-cols-5
                    md:grid-cols-6
                    lg:grid-cols-8
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
