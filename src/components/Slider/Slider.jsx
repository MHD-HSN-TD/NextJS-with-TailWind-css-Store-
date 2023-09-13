import Image from 'next/image'
import React from 'react'

const Slider = ({ imgs }) => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item justify-center relative w-full">
                <Image src={imgs[0]}
                    width={128}
                    height={128}
                    className="w-32 h-32" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item justify-center relative w-full">
                <Image src={imgs[1]}
                    width={128}
                    height={128}
                    className="w-32 h-32" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item justify-center relative w-full">
                <Image src={imgs[2]}
                    width={128}
                    height={128}
                    className="w-32 h-32" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item justify-center relative w-full">
                <Image src={imgs[3]}
                    width={128}
                    height={128}
                    className="w-32 h-32" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}

export default Slider
