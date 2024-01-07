import Link from "next/link"
import React from 'react'

function NotFound() {
    return (
        <div>
            <h2>not found</h2>
            <p>sorry, the page you are looking for does not exist.</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}

export default NotFound
