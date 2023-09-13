'use client'
import SimpleImageSlider from "react-simple-image-slider";

// const images = [
//     { url: "images/1.jpg" },
//     { url: "images/2.jpg" },
//     { url: "images/3.jpg" },
//     { url: "images/4.jpg" },
//     { url: "images/5.jpg" },
//     { url: "images/6.jpg" },
//     { url: "images/7.jpg" },
// ];

const Slider2 = ({ imgs }) => {
    return (
        <>
            <SimpleImageSlider
                width={896}
                height={504}
                images={imgs}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
            />
        </>
    );
}

export default Slider2;