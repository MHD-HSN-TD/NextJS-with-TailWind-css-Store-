import React from 'react'

const Category = ({ params }) => {
    const idOfPage = params.id
    return (
        <div>
            <div className="bg-slate-600 text-7xl">{idOfPage}</div>
            Category
        </div>
    )
}

export default Category
