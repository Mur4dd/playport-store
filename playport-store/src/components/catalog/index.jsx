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
        <div className='container mx-auto text-white font-montserrat uppercase pt-10'>
            {/* Header of Catalog */}
            <div className='font-semibold md:text-[16px] lg:text-[20px] xl:text-[22px] text-center'>
                <h1>kataloq</h1>
            </div>
            <div className='flex flex-wrap justify-between pt-10'>
                {products && products.map(result => (
                    <div key={result.id} className='flex flex-col justify-between rounded-[10px] border-2 border-white p-2.5 w-[300px] h-[400px] gap-2.5 shadow-xl shadow-blue-500/30'>
                        <div>
                            <img src={result.image} alt="productImage" className='w-full h-[150px]' />
                        </div>
                        <div>
                            <h6 className='font-bold'>{result.brand} {result.model} {result.storage}</h6>
                            <p className='italic opacity-50 pt-2'>{result.description}</p>
                        </div>
                        <div>
                            <h6 className='font-bold'>{result.price} {result.currency}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default index