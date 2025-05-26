import React from 'react';
import CabinCard from '../_components/CabinCard';
import { getCabins } from '../_lib/data';

const CabinList = async () => {
    const cabins = await getCabins();

    if (!cabins || cabins.length === 0) return null;

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
            {cabins.map((cabin) => (
                <CabinCard key={cabin.id} cabin={cabin} />
            ))}
        </div>
    );
};

export default CabinList;
