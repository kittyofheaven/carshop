"use client";

import React from 'react'
import Image from 'next/image'
import { CustomButton } from '.'

const Hero = () => {
    const handleScroll = () => {

    }


    return (
        <div className='hero'>
            <div className="flex1 pt-36 padding-x">
                <h1 className='hero__title'>
                    Find and buy your dream car - quickly and easily!
                </h1>

                <p className="hero__subtitle">
                    We have thousands of cars in stock. Search for your dream car and find contact information for the seller.
                </p>

                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className="object-contain"/>
                    <div className="hero__image-overlay"/>
                </div>
            </div>
        </div>
    )
}

export default Hero