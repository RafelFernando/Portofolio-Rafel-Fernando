'use client';

export default function AboutMe() {
    return (
        <section className="w-[90%] mx-auto mt-16 overflow-x-hidden">
            <div className='text-center mb-[30px]'>
                <h1 className='text-4xl font-bold mb-2'>About Me</h1>
                <p className='text-gray-600 text-xl'>Information Systems student with a strong interest in web development, machine learning, and real-world problem solving through technology.</p>
            </div>

            <div className="flex gap-3 lg:flex-row flex-col">
                <div className="flex-1 lg:pl-15">
                    <div className="pt-5">
                        <h2 className="text-4xl font-bold mt-2 mb-4">Rafel Fernando</h2>
                        <p className="text-gray-600 text-xl text-justify mb-4">Hi, just call me Rafel. I'm a student at Duta Bangsa University Surakarta majoring in Information
                            Systems with a focus on Data Science, and I'm from Indonesia. I enjoy learning and building things
                            related to Machine Learning, Artificial Intelligence, and website application development. Next, I
                            want to apply my knowledge in the MSME sector by building a company.</p>

                        <p className="text-gray-600 text-xl text-justify mb-4">I'm very active on social media and am a YouTube content creator with over 15,000 followers. I create
                            gaming, coding, and children's content through my YouTube platform.</p>

                        <p className="text-gray-600 text-xl text-justify mb-4">Besides trivial things, I enjoy listening to music in the love and jazz genres, among many others.
                            Here's my Spotify link if you're interested. I also love Marvel, Harry Potter, and all the detective
                            films! Oh, and I've been part of a major web development project at a company.</p>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="w-full md:w-[70%] h-[500px] mx-auto overflow-hidden rounded-2xl">
                        <img
                            src="/rafel2.jpg"
                            alt="Rafel Fernando"
                            className="
            w-full h-full object-cover
                            rounded-2xl
                            shadow-2xl
                            transition-all duration-500 ease-in-out
                            hover:scale-105
                            hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]
                        "
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}