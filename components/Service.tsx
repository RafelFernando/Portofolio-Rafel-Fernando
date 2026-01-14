'use client';
import { Laptop, BrainCircuit } from 'lucide-react';

export default function Service() {
    return (
        <section className="w-full px-6 lg:px-[80px] py-[50px]">
            <div className="text-center mb-[60px]">
                <h1 className="text-4xl font-bold">Service</h1>
            </div>

            {/* ⬇️ JANGAN PAKAI HEIGHT */}
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">

                {/* CARD */}
                <div className="
                    group relative flex-1
                    bg-white rounded-3xl p-8
                    overflow-hidden
                    border border-blue-400
                    transition-all duration-300
                    hover:scale-[1.03]
                ">

                    {/* IMAGE BACKGROUND */}
                    <div className="absolute inset-0 z-0 pointer-events-none">

                        <div className="
                            absolute right-[-140px] top-3/5
                            -translate-y-1/2
                            transition-all duration-300
                            group-hover:right-[-40px]
                            group-hover:opacity-80
                            opacity-0
                        ">
                            <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden">

                                <img
                                    src="/rafel.jpg"
                                    alt="service"
                                    className="w-full h-full object-cover"
                                />

                                {/* INNER FADE */}
                                <div className="
                                    absolute inset-0 rounded-full
                                    bg-[radial-gradient(circle,rgba(255,255,255,0)_55%,rgba(255,255,255,0.85)_80%,rgba(255,255,255,1)_100%)]
                                " />

                                {/* OUTER SHADOW */}
                                <div className="
                                    absolute -inset-4 rounded-full
                                    shadow-[0_0_95px_15px_rgba(255,255,255,0.95)]
                                " />
                            </div>
                        </div>

                        {/* SIDE FADE */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10 flex items-start gap-4">

                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                            <Laptop size={30} className="text-blue-600" />
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-2">
                                Website Company Profile
                            </h3>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                Membuat website company profile yang modern dan responsive sesuai kebutuhan bisnis anda.
                                100% source code akan diberikan.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="
                    group relative flex-1
                    bg-white rounded-3xl p-8
                    overflow-hidden
                    border border-blue-400
                    transition-all duration-300
                    hover:scale-[1.03]
                ">

                    <div className="absolute inset-0 z-0 pointer-events-none">

                        <div className="
                            absolute right-[-140px] top-3/5
                            -translate-y-1/2
                            transition-all duration-300
                            group-hover:right-[-40px]
                            group-hover:opacity-80
                            opacity-0
                        ">
                            <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden">

                                <img
                                    src="/rafel.jpg"
                                    alt="service"
                                    className="w-full h-full object-cover"
                                />

                                <div className="
                                    absolute inset-0 rounded-full
                                    bg-[radial-gradient(circle,rgba(255,255,255,0)_55%,rgba(255,255,255,0.85)_80%,rgba(255,255,255,1)_100%)]
                                " />

                                <div className="
                                    absolute -inset-4 rounded-full
                                    shadow-[0_0_95px_15px_rgba(255,255,255,0.95)]
                                " />
                            </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
                    </div>

                    <div className="relative z-10 flex items-start gap-4">

                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                            <BrainCircuit size={30} className="text-blue-600" />
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-2">
                                AI Customer Service
                            </h3>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                Membuat AI Customer Service yang dapat membantu menjawab pertanyaan pelanggan selama 24 jam nonstop.
                                100% source code akan diberikan.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
