import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/cabins">Explore luxury Cabins</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/account">Your Account</Link></li>
        </ul>
    )
}

export default Navigation
