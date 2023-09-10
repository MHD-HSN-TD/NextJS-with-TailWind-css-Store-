import Link from 'next/link'
import React from 'react'

const Card = ({ img, title, desc, href }) => {
    return (
        <div className="card   shadow-l border border-black hover:border-primary transition-colors duration-300">
            <figure className='  '><img src={img} alt={title} className=' h-48 w-full mx-auto bg-origin-padding' /></figure>
            <div className="card-body">
                <h2 className="card-title ">{title}</h2>
                <p className='text-justify  mx-auto '>{desc}</p>

            </div>
        </div>
    )
}

export default Card
