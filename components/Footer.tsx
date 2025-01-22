import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='px-8 md:px-20 py-10 bg-lovechemred-500'>
        <div className='flex flex-col md:flex-row gap-10'>
            <div className='flex flex-col gap-4 w-full md:w-1/3'>
                <Image className='bg-white' src="https://placehold.co/100x75" width={100} height={75} alt='logo' />
                <h1 className='text-xl text-white'>Firma İsmi</h1>
                <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='flex flex-row gap-4 text-white'>
                    <TwitterIcon />
                    <InstagramIcon />
                    <LinkedinIcon />
                    <FacebookIcon />
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <h1 className='text-xl text-white'>İletişim</h1>
                <div className='flex flex-col gap-3 text-white'>
                    <p className='text-base'>Adres: Açık adres, Türkiye</p>
                    <p className='text-base'>Telefon: (555) 555 55 55</p>
                    <p className='text-base'>E-posta: example@gmail.com</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer