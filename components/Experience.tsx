'use client'
import '../app/globals.css';

export default function Experience() {
    const items = [
        {
            title: 'Information System Talent Hub',
            place: 'Solo Technopark',
            year: '2025',
        },
        {
            title: 'Information System IDT',
            place: 'Solo Technopark',
            year: '2025',
        },
        {
            title: 'Web-Based Sarimulyo Village Information System',
            place: 'Sarimulyo Village',
            year: '2024',
        },
        {
            title: 'Best Teacher Decision Support System',
            place: 'SDN Langenharjo 1',
            year: '2024',
        },
        {
            title: 'Warmindo Data Analysis and Visualization',
            place: 'Warmindo',
            year: '2023',
        },
        {
            title: 'Waiters',
            place: 'Gravista Group',
            year: '2022 - 2023',
        },
    ]

    return (
        <section className="w-full h-full flex flex-col lg:flex-row">
            <div className=" w-full h-full px-[40px] md:px-[80px] py-[50px]">
                <div className="text-center mt-[20px] lg:mt-[40px] mb-[50px] lg:mb-[70px]">
                    <h1 className="font-body text-4xl font-bold mb-2">My Experience</h1>
                </div>
                <ol className="relative border-l-2 border-blue-600 ml-4">
                    {items.map((item, index) => (
                        <li key={index} className="relative pl-8 pb-10 last:pb-0">
                            <span className="absolute left-0 top-1 w-3 h-3 bg-blue-600 rounded-full -translate-x-1/2" />

                            <time className="text-2xl font-semibold text-gray-800">
                                {item.year}
                            </time>

                            <h3 className="text-[25px] font-semibold text-black mt-1">
                                {item.title}
                            </h3>

                            <p className="text-[20px] text-gray-700">
                                {item.place}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>

            <div className="w-full h-full py-[50px] px-[80px]">
                <div className="text-center mt-[10px] md:mt-[40px] mb-[50px] md:mb-[70px]">
                    <h1 className="text-4xl font-bold mb-2">My Award</h1>
                </div>
                <p className="text-[25px] font-semibold text-black mt-1">1st Place in the Data Science Category at the 2023 Student Innovation Competition</p>
                <p className="text-[20px] text-gray-700">November 2023</p>
            </div>
        </section>
    )
}
