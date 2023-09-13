import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ img, title, desc, price }) => {
    return (
        <div className=" rounded-md  shadow-l border border-black hover:border-primary transition-colors duration-300 lg:h-72 h-72">
            <figure className='  '>
                <Image
                    src={img}
                    width={300}
                    height={300}
                    alt={title} className=' h-40 w-full mx-auto bg-origin-padding' /></figure>
            <div className=" p-1">
                <h2 className="text-left font-bold lg:my-4 my-2 ">{title}</h2>
                <h2 className="text-left font-bold lg:my-4  "> Price: {price} $</h2>
                <p className='text-xs  mx-auto columns-2 truncate  '>{desc}</p>

            </div>
        </div>
    )
}

export default Card
