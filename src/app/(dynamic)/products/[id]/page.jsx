
import Slider from "@/components/Slider/Slider";
import Slider2 from "@/components/Slider/Slider2";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }) {
    const idOfPage = params.id
    async function getUser(id) {

        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
    const data = await getUser(idOfPage)
    return {
        title: data.title,
    }
}

const Category = async ({ params }) => {

    const idOfPage = params.id

    async function getUser(id) {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
    const data = await getUser(idOfPage)
    // console.log(data)

    /**
        id: 3,
        title: 'Samsung Universe 9',
        description: 'Samsung\'s new variant which goes beyond Galaxy to the Universe',
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: 'Samsung',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
      images: [ 'https://i.dummyjson.com/data/products/3/1.jpg' ] */


    return (
        <div className="lg:px-20 my-2">
            <div className=" py-2 btn btn-warning">
                <Image src="/images/back.png" alt="back" width={20} height={20} />
                <Link href={'/products'}> Go back to Products</Link>
            </div>
            <div className="py-6">
                <h1 className="  text-4xl text- font-semibold my-6"> {data.title}</h1>
                <p className="opacity-75">{data.description}</p>
            </div>
            <div className="">
                <Image
                    className="mx-auto"
                    src={data.thumbnail}
                    width={500}
                    height={500}
                />
                <div className="flex justify-center lg:gap-10 gap-2 flex-wrap my-6">
                    {data.images.map((image, index) => (
                        <Image
                            key={data.id}
                            className=" rounded"
                            src={image}
                            width={100}
                            height={100}
                            alt={data.title}
                        />
                    ))}
                </div>
                {/* <div className="">
                    <Slider imgs={data.images}></Slider>
                </div>
                <div className="">
                    <Slider2 imgs={data.images}></Slider2>
                </div> */}
                <div className="mx-10">
                    <h1 className=" py-3 text-3xl">Product Information :</h1>
                    <p className="columns-2 text-justify" >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic error quae animi architecto ab soluta vero molestiae, minima eligendi cupiditate dolore praesentium natus rem, veniam ducimus beatae quasi, dolorum tempora.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic error quae animi architecto ab soluta vero molestiae, minima eligendi cupiditate dolore praesentium natus rem, veniam ducimus beatae quasi, dolorum tempora.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic error quae animi architecto ab soluta vero molestiae, minima eligendi cupiditate dolore praesentium natus rem, veniam ducimus beatae quasi, dolorum tempora.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic error quae animi architecto ab soluta vero molestiae, minima eligendi cupiditate dolore praesentium natus rem, veniam ducimus beatae quasi, dolorum tempora.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic error quae animi architecto ab soluta vero molestiae, minima eligendi cupiditate dolore praesentium natus rem, veniam ducimus beatae quasi, dolorum tempora.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic error quae animi architecto ab soluta vero molestiae, minima eligendi cupiditate dolore praesentium natus rem, veniam ducimus beatae quasi, dolorum tempora.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic error quae animi architecto ab soluta vero molestiae, minima eligendi cupiditate dolore praesentium natus rem, veniam ducimus beatae quasi, dolorum tempora.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Category
