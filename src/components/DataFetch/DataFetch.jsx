'use client'
import axios from "axios"
import Card from "../Card/Card";
import Link from "next/link";




// const DataFetch = ({ url, oneElement }) => {

//     // Want to use async/await? Add the `async` keyword to your outer function/method.
//     async function getUser(url, id) {
//         try {
//             let data = []
//             const response = await axios.get(`https://dummyjson.com/products/`);
//             // console.log(response.data.products);
//             data = response.data.products
//             // console.log(data)
//             return data

//         } catch (error) {
//             console.error(error);
//         }
//     }
//     const data = getUser()
//     console.log(data)
//     return (
//         <div>
//             {/* {data.map(el => el.id)} */}
//         </div>
//     )
// }

// export default DataFetch
const DataFetch = async ({ url, oneElement }) => {

    async function getUser(url, id) {
        try {
            const response = await axios.get(` https://dummyjson.com/${url}`);
            return response.data.products
        } catch (error) {
            console.error(error);
        }
    }
    const data = await getUser(url)
    console.log(data)
    return (
        <div className="grid grid-cols-4 gap-3 px-40 ">


            {
                data.map(el => <Link href={`/products/${el.id}`}>
                    <Card
                        img={el.thumbnail}
                        title={el.title}
                        desc={el.description}
                        href={`products/${el.id}`}
                    />
                </Link>
                )}
        </div>
    )
}

export default DataFetch