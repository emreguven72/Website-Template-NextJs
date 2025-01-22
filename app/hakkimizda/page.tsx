import Image from 'next/image'
import React from 'react'

const About = () => {
    const IntroductionSection = () => {
        return (
            <div className='flex flex-col-reverse md:flex-row justify-between gap-4 md:gap-10 '>
                <div className='flex flex-col h-full gap-4'>
                    <span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</span>
                    <span>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</span>
                </div>

                <Image className='md:w-1/3' src="https://placehold.co/600x500" width={600} height={500} alt='about' />
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-10 px-8 md:px-20 py-10">
            <h1 className='header text-lovechemred-500'>Hakkımızda</h1>
            <IntroductionSection />
        </div>

    )
}

export default About