import Link from "next/link"
import Card from "../Card/Card"

const ShowData = ({ arr, obj, data }) => {

    const asArr = <div className="grid  lg:grid-cols-4 gap-3 grid-cols-2 lg:px-40 ">
        {data.map(el => <Link href={`/products/${el.id}`} key={el.id}>
            <Card
                key={el.id}
                img={el.thumbnail}
                title={el.title}
                desc={el.description}
                href={`products/${el.id}`}
            />
        </Link>
        )}
    </div>
    const asObj = <div className="grid  lg:grid-cols-4 gap-3 grid-cols-2 lg:px-40 ">
        this is obj
    </div>
    return (
        <>
            {obj ? asObj : asArr}
        </>
    )
}

export default ShowData
