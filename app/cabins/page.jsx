import React from 'react'
import CabinCard from '../_components/CabinCard';


export const metadata = {
    title: 'Cabins',
}

const CabinsPage = () => {

    const cabins = [];
    return (
        <div>
            <h1 className="text-4xl mb-5 text-accent-400 font-medium">
                Our Luxury Cabins
            </h1>
            <h4 className='text-accent-300 text-lg mb-3 '>Casa Elan – Where Nature Meets Elegance</h4>
            <p className='text-primary-200 text-lg mb-3'>
                Cozy yet luxurious cabins nestled in the heart of the majestic Italian Dolomites. Wake up to sweeping mountain vistas, wander through serene, shadowed forests, or unwind in your private hot tub beneath a blanket of stars. At Casa Elan, nature’s raw beauty meets refined comfort — your personal sanctuary away from the world. The perfect retreat for peace, privacy, and timeless memories.
            </p>
            <h4 className='text-primary-200 text-lg mb-10'>Welcome to <span className=' text-accent-400 '>Casa Elan</span> . Welcome to <span className='text-accent-400 '>paradise</span>...</h4>

            {cabins.length > 0 && (
                <div>
                    {cabins.map((cabin) => (
                        <CabinCard key={cabin.id} cabin={cabin} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default CabinsPage
