import React from 'react'

const HeroModal = () => {
    return (
        <div className='fixed lg:hidden top-20 right-0 left-0 px-6 z-10'>
            <div className='min-h-[38vh] w-full bg-white-color py-10 flex flex-col items-center justify-between'>
                    {["About", "Services", "Projects"]
                        .map((item) => (
                            <a key={item} className='text-grayish-blue text-xl font-semibold' href="#">{item}</a>
                        ))}
                    <button className='px-6 py-3 bg-yellow-color text-dark-blue rounded-3xl font-fraunces uppercase'>contact</button>
            </div>
        </div>
    )
}

export default HeroModal
