'use client';
import { Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full px-6 md:px-[80px] pt-[50px] pb-[20px]">
            <div className='flex justify-center items-center flex-col gap-4'>
                <div className="">
                    <img src="/logo2.png" alt="" className="w-[90px] h-[90px] object-contain" />
                </div>

                <div className='flex gap-4'>
                    <div>
                        <Mail size={30} className='text-blue-600'/>
                    </div>
                    <div>
                        <p className='text-xl font-semibold'>rafelganteng21@gmail.com</p>
                    </div>
                </div>
            </div>

            <hr className='text-blue-400 my-[20px]' />

            <div className='flex justify-between items-center'>
                <div>
                    <p>@2026 Rafel Fernando. All rights reserved.</p>
                </div>
                <div className='flex gap-4'>
                    <img src="/linkedin.svg" alt="" className='w-[50px] h-[50px] object-contain' />
                    <img src="/twitter.svg" alt="" className='w-[50px] h-[50px] object-contain' />
                </div>
            </div>
        </footer>
    );
}