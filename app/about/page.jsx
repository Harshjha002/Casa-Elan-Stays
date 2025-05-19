import React from 'react'
import Image from 'next/image'
import aboutOne from '@/public/about-1.jpg'
import aboutTwo from '@/public/about-2.jpg'

export const metadata = {
    title: 'About ',
}

const AboutPage = () => {
    return (
        <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
            <div className="col-span-3">
                <h1 className="text-4xl mb-10 text-accent-400 font-medium">
                    Welcome to Casa Elan
                </h1>

                <div className="space-y-8">
                    <p>
                        Where understated luxury meets the raw beauty of nature. Tucked away in the heart of the Italian Dolomites, Casa Elan is your tranquil escape from the ordinary. More than just a stay — it’s an experience of peace, connection, and mindful living with the ones you love.
                    </p>
                    <p>
                        Our 8 elegantly crafted cabins offer comfort and calm, while the surrounding mountains invite you to rediscover freedom. Stroll through quiet, misty forests, breathe in crisp alpine air, and end the day stargazing from your private hot tub or fireside lounge.
                    </p>
                    <p>
                        At Casa Elan, each moment is a memory in the making. Here, time slows down, nature speaks louder, and togetherness becomes timeless. This is not just a destination — it’s your mountain sanctuary.
                    </p>
                </div>
            </div>

            <div className="col-span-2">
                <Image
                    src={aboutOne}
                    alt="Guests enjoying a fire pit in front of a Casa Elan luxury cabin"
                />
            </div>

            <div className="relative aspect-square col-span-2">
                <Image
                    src={aboutTwo}
                    fill
                    placeholder='blur'
                    className='object-cover'
                    alt="The family behind Casa Elan" />
            </div>

            <div className="col-span-3">
                <h1 className="text-4xl mb-10 text-accent-400 font-medium">
                    A Legacy of Warmth Since 2012
                </h1>

                <div className="space-y-8">
                    <p>
                        Since 2012, Casa Elan has been a cherished family-run hideaway — lovingly founded by our grandparents and passed down through generations. Every cabin, trail, and touch of decor reflects our deep-rooted passion for hospitality and nature.
                    </p>
                    <p>
                        We&apos;ve preserved the soul of Casa Elan while embracing thoughtful elegance, offering you a rare blend of tradition and luxury. Here, you&apos;re not just a guest — you&apos;re a part of our story. Join us at Casa Elan, where legacy meets serenity and every stay feels like coming home.
                    </p>

                    <div>
                        <a
                            href="/cabins"
                            className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
                        >
                            Explore our luxury cabins
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutPage
