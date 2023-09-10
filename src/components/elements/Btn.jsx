"use client"
const Btn = ({ name }) => {
    return (
        <>
            <button class=" btn btn-success btn-sm"
                onClick={() => { console.log('clicked') }}
            >{name}</button>
        </>
    )
}

export default Btn
