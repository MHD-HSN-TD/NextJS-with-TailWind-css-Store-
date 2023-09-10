import axios from "axios"
import Card from "../Card/Card";
import Link from "next/link";



// export default DataFetch
const DataFetch = async ({ ProId }) => {

    async function getUser() {

        try {
            const response = await axios.get("https://dummyjson.com/products/");
            return response.data.products
        } catch (error) {
            console.loa(error);
        }
    }
    const data = await getUser()
    console.log(data)

    return (
        <div className="grid  lg:grid-cols-4 gap-3 grid-cols-2 lg:px-40 my-6 ">


            {data.map(el => <Link href={`/products/${el.id}`}>
                <Card
                    img={el.thumbnail}
                    title={el.title}
                    desc={el.description}
                    href={`products/${el.id}`}
                    price={el.price}
                />
            </Link>
            )}
        </div>
    )
}

export default DataFetch