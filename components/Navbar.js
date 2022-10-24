import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    const style = {
        padding: '5px',
        display: 'flex',
        background: 'grey',
        justifyContent: "space-around"
    }
    
    return (
        <div style={style}>
            <Link href='/'>Home</Link>
            <Link href='/map'>Map</Link>
        </div>
    )
}
