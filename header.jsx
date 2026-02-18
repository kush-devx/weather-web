import React from 'react'

export default function Header() {
    return (
        <div>
            <div>
                <ul className = 'mt-5 flex gap-8 text-lg font-medium justify-end mr-5 text-white'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <h1 className="text-3xl font-bold text-sky-600 text-center mt-5"> Check Weather condtion in your city</h1>
        </div>
    )
}
