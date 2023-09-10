import DataFetch from '@/components/DataFetch/DataFetch'
import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
    return (
        <div>
            <div className=''>
                <div>
                    Products Page
                </div>

                <DataFetch url='products/'></DataFetch>
            </div>
        </div>
    )
}

export default Portfolio
