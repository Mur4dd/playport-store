import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function index() {
    const [searchProduct, setSearchProduct] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [isDropdownVisible, setIsDropdownVisible] = useState(false)

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible)
    }

    const handleSearch = (e) => {
        setSearchProduct(e.target.value)
        console.log(e.target.value)
    }

    const checkAndShowSearch = async () => {
        try {
            const response = await axios.get('http://localhost:3001/products')
            const products = response.data
            console.log(products);

            const filteredProducts = products.filter(product =>
                product.brand.toLowerCase().includes(searchProduct.toLowerCase())
            );
            setSearchResults(filteredProducts)
        } catch (error) {
            console.error('Xəta baş verdi:', error);
        }

    }

    return (
        <>
            {/* Header section for the PlayPort store */}
            <header className='bg-black py-4 md:py-6 lg:py-8 xl:py-10 text-white uppercase font-montserrat'>
                {/* Container for the header content */}
                <div className='container mx-auto flex items-center justify-between md:space-x-16 relative'>
                    {/* Logo section */}
                    <h1 className='pl-2 md:pl-0 md:text-[16px] lg:text-[24px] xl:text-[36px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-white'>playport</h1>

                    {/* Menu for mobile */}
                    <div className='md:hidden flex items-center space-x-16 relative'>
                        <div className='flex space-x-2'>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    checkAndShowSearch()
                                }}
                                className='flex space-x-2'>
                                <input type="text"
                                    name="searchProductMobile"
                                    id="searchProductMobile"
                                    value={searchProduct}
                                    onChange={handleSearch}
                                    className='w-16 border-b border-white focus:outline-0 focus:border-b-blue-800 transition duration-300' />
                                <label htmlFor="searchProductMobile"><FontAwesomeIcon icon={faMagnifyingGlass} className='text-[20px]' /></label>
                                
                            </form>
                            {/* Dropdown Search Result */}
                            <div className={`absolute top-full left-0 bg-white rounded-full ${searchResults.length === 0 ? 'hidden' : ''}`}>
                                {searchResults.length > 0 && (
                                    <ul className='bg-white text-black rounded-lg shadow-lg p-4'>
                                        {searchResults.map(result =>(
                                            <li key={result.id} className='flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer'>
                                                <div className='w-[50px] h-[25px] rounded-full'>
                                                    <img src={result.image} alt="photo" className='w-[50px] h-[25px]' />
                                                </div>
                                                <div>
                                                    <h3 className='text-[10px] font-semibold'>{result.brand} {result.model} {result.storage}</h3>
                                                    <p className='text-[8px] text-gray-600'>{result.price} {result.currency}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div
                        onClick={toggleDropdown} 
                        className='flex flex-col gap-1 items-center pr-2 md:pr-0 hover:cursor-pointer group'>
                            <div className='w-5 h-0.5 rounded-full bg-white group-hover:bg-blue-800 transition duration-300'></div>
                            <div className='w-5 h-0.5 rounded-full bg-white group-hover:bg-blue-800 transition duration-300'></div>
                            <div className='w-5 h-0.5 rounded-full bg-white group-hover:bg-blue-800 transition duration-300'></div>
                        </div>
                    </div>

                    {/* Dropdown Menu */}
                    {isDropdownVisible && (
                        <div className='md:hidden font-semibold absolute z-50 top-full left-0 bg-white rounded-lg shadow-lg p-4 w-full'>
                        <ul className='space-y-2'>
                            <li><a href="#" className='block text-black hover:text-blue-800 transition duration-300'>haqqımızda</a></li>
                            <li><a href="#" className='block text-black hover:text-blue-800 transition duration-300'>məhsullar</a></li>
                            <li><a href="#" className='block text-black hover:text-blue-800 transition duration-300'>əlaqə</a></li>
                        </ul>
                    </div>
                    )}

                    {/* Navigation */}
                    <nav className='hidden md:flex justify-between flex-1'>
                        {/* Navigation links */}
                        <div className='flex items-center space-x-8 font-semibold md:text-[12px] lg:text-[16px] xl:text-[18px]'>
                            <a href="#" className='hover:text-blue-800 transition duration-300'>haqqımızda</a>
                            <a href="#" className='hover:text-blue-800 transition duration-300'>məhsullar</a>
                            <a href="#" className='hover:text-blue-800 transition duration-300'>əlaqə</a>
                        </div>
                        {/* Search area */}
                        <div className='flex gap-3 items-center relative'>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    checkAndShowSearch()
                                }}
                                className='flex space-x-4'>
                                <input type="text"
                                    name="searchProductDesktop"
                                    id="searchProductDesktop"
                                    value={searchProduct}
                                    onChange={handleSearch}
                                    className='w-16 lg:w-24 xl:w-36 border-b border-white focus:outline-0 focus:border-b-blue-800 transition duration-300' />
                                <label htmlFor="searchProductDesktop"><FontAwesomeIcon icon={faMagnifyingGlass} className='text-[20px]' /></label>
                            </form>
                            {/* Dropdown Search Result */}
                            <div className={`absolute top-full left-0 bg-white rounded-full ${searchResults.length === 0 ? 'hidden' : ''}`}>
                                {searchResults.length > 0 && (
                                    <ul className='bg-white text-black rounded-lg shadow-lg p-4'>
                                        {searchResults.map(result =>(
                                            <li key={result.id} className='flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer'>
                                                <div className='w-[100px] h-[50px] rounded-full'>
                                                    <img src={result.image} alt="photo" className='w-[100px] h-[50px]' />
                                                </div>
                                                <div>
                                                    <h3 className='text-[14px] font-semibold'>{result.brand} {result.model} {result.storage}</h3>
                                                    <p className='text-[12px] text-gray-600'>{result.price} {result.currency}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            {/* Space line */}
                            <div className='h-11 w-[1px] bg-white'></div>
                            {/* Registration */}
                            <div className='flex items-center md:text-[12px] lg:text-[16px] xl:text-[18px] space-x-4 font-bold'>
                                <div>
                                    <a href="#" className='hover:opacity-50 transition duration-300'>giriş et</a>
                                </div>
                                <div className='bg-blue-800 p-2 hover:bg-blue-950 transition duration-300'>
                                    <a href="#">qeydiyyat</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default index