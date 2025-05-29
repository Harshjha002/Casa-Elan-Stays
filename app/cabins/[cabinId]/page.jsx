import React from 'react'
import Image from 'next/image';
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import { getCabin, getCabins } from '@/app/_lib/data';


export const generateMetadata = async ({ params }) => {
    const { name } = await getCabin(params.cabinId)
    return {
        title: `Cabin ${name}`
    }
}

export const generateStaticParams = async () => {
    const cabins = await getCabins();
    const ids = cabins.map(cabin => (
        { cabinId: String(cabin.id) }));


    return ids;

}

const Cabin = async ({ params }) => {

    const cabin = await getCabin(params.cabinId)

    const { id, name, maxCapacity, regularPrice, discount, image, description } =
        cabin;
    return (
        <div className="max-w-6xl mx-auto mt-8 px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-10 md:gap-20 border border-primary-800 py-6 px-6 md:px-10 mb-24 rounded-xl">

                <div className="relative h-[300px] md:h-auto scale-100 md:scale-[1.15] -translate-x-0 md:-translate-x-3">
                    <Image
                        src={image}
                        alt={`Cabin ${name}`}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                <div>
                    <h3 className="text-accent-100 font-black text-4xl sm:text-6xl lg:text-7xl mb-5 bg-primary-950 p-4 sm:p-6 pb-2 rounded-md w-full">
                        Cabin {name}
                    </h3>

                    <p className="text-base sm:text-lg text-primary-300 mb-10">{description}</p>

                    <ul className="flex flex-col gap-4 mb-7">
                        <li className="flex gap-3 items-center">
                            <UsersIcon className="h-5 w-5 text-primary-600" />
                            <span className="text-base sm:text-lg">
                                For up to <span className="font-bold">{maxCapacity}</span> guests
                            </span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <MapPinIcon className="h-5 w-5 text-primary-600" />
                            <span className="text-base sm:text-lg">
                                Located in the heart of the <span className="font-bold">Dolomites</span> (Italy)
                            </span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
                            <span className="text-base sm:text-lg">
                                Privacy <span className="font-bold">100%</span> guaranteed
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center px-4">
                    Reserve today. Pay on arrival.
                </h2>
            </div>
        </div>

    )
}

export default Cabin
