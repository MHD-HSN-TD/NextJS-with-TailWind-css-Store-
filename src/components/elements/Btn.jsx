"use client"
const Btn = () => {
    return (
        <>
            <button class=" btn btn-success btn-sm"
                onClick={() => { console.log('clicked') }}
            >Button</button>
        </>
    )
}

export default Btn
