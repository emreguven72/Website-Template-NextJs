import { BuildingIcon, ForwardIcon, MailIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex items-center justify-center relative'>
                <Image className='w-full' src="https://placehold.co/1920x400" width={1920} height={400} alt='banner' />
                <h1 className='font-bold text-center md:header absolute text-lovechemred-500'>Hizmetlerimizden Yararlanmak İçin Bizimle İletişime Geçin</h1>
            </div>
            <div className='flex flex-col gap-10 px-8 md:px-20 py-10'>
                <div className='grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-3 w-full min-h-96 bg-white shadow-lg rounded-lg md:-mt-24 z-10 py-10'>
                    <div className='flex flex-col justify-center items-center gap-4 md:border-r border-lovechemred-500 border-opacity-50 hover:bg-lovechemred-500 transition-all duration-300 text-lovechemred-500 hover:text-white py-10'>
                        <div className='flex flex-row gap-2'>
                            <MailIcon />
                            <h1 className='text-xl'>E-Posta</h1>
                        </div>
                        <h3 className='text-base'>example@gmail.com</h3>
                        <ForwardIcon />
                    </div>

                    <div className='flex flex-col justify-center items-center gap-4 md:border-r border-lovechemred-500 border-opacity-50 hover:bg-lovechemred-500 transition-all duration-300 text-lovechemred-500 hover:text-white py-10'>
                        <div className='flex flex-row gap-2'>
                            <PhoneIcon />
                            <h1 className='text-xl'>Telefon</h1>
                        </div>
                        <h3 className='text-base'>+90 (555) 555 55 55</h3>
                        <ForwardIcon />
                    </div>

                    <div className='flex flex-col justify-center items-center gap-4 hover:bg-lovechemred-500 transition-all duration-300 text-lovechemred-500 hover:text-white py-10'>
                        <div className='flex flex-row gap-2'>
                            <BuildingIcon />
                            <h1 className='text-xl'>Adres</h1>
                        </div>
                        <h3 className='text-base'>Açık Adres, Türkiye</h3>
                        <ForwardIcon />
                    </div>
                </div>

                <div className="w-full">
                    <iframe className='w-full h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84021.60032907808!2d32.83359489632722!3d39.95903107821989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f190a9cea8f%3A0xd3862ea8248d08a0!2sAn%C4%B1tkabir!5e0!3m2!1str!2str!4v1736524380125!5m2!1str!2str"  loading="lazy" ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact