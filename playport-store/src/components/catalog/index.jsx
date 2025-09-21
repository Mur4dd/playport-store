import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/slices/productSlice'

function index() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    const { products } = useSelector(store => store.products)

    return (
        // Container of Cataloge
        <div className='container mx-auto text-white font-montserrat uppercase pt-10 pb-10'>
            {/* Header of Catalog */}
            <div className='font-semibold md:text-[16px] lg:text-[20px] xl:text-[22px] text-center'>
                <h1>kataloq</h1>
            </div>
            <div className='flex flex-wrap md:justify-between gap-20 pt-10 justify-center'>
                {/* Product Cards */}
                {products && products.map(result => (
                    <div key={result.id} className='flex flex-col justify-between rounded-[10px] border-2 border-white p-2.5 w-[300px] h-[400px] gap-2.5 shadow-xl shadow-blue-500 hover:scale-105 transition-transform duration-300 hover:cursor-pointer'>
                        <div>
                            <img src={result.image} alt="productImage" className='w-[90%] h-[150px] justify-self-center border-b-2 border-white p-2' />
                        </div>
                        <div>
                            <h6 className='font-bold'>{result.brand} {result.model} {result.storage}</h6>
                            <p className='italic opacity-50 pt-2 line-clamp-2 text-[14px]'>{result.description}</p>
                        </div>
                        <div>
                            <h6 className='font-bold'>{result.price} {result.currency}</h6>
                        </div>
                        <div>
                            <button className='bg-blue-800 rounded-[10px] w-full h-10 uppercase font-bold cursor-pointer hover:bg-blue-950 transition duration-300'>səbətə at</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default index