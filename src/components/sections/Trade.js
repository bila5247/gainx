import React, { useState } from 'react'

//importing data
import { currency } from '../../data';

//icon
import { IoIosArrowForward } from 'react-icons/io';

const Trade = () => {

    const [itemName, setItemName] = useState('Bitcoin');
    return (
        <section className='section lg:pt-[320px] bg-gradient-to-b from-[#f8f9fb] to-[#e2e3e7]  text-gray-600 lg:-mt-[350px]'>
            <div className='container mx-auto '>
                <h2 className='section-title text-center mb-16'
                    data-aos='fade-up'
                    data-aos-offset='400'>
                    Trade securely and market the high growth with GainX.
                </h2>
                {/* items */}
                <div className='flex flex-col gap-[45px] lg:flex-row'
                    data-aos='fade-up'
                    data-aos-offset='450'
                >
                    {currency.map(
                        (item, index) => {
                            //destructure item
                            const { name, accCur, dep, spread, swapFree, Comm } = item;
                            return (
                                // item
                                <div
                                    onClick={() => setItemName(name)}
                                    className={`${name === itemName ? ' text-white' : 'bg-white'
                                        } w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}
                                    style={{ background: "#0faf93" }}
                                    key={index}
                                >
                                    <div className='flex flex-col justify-center items-center'>
                                        {/* item image */}
                                        {/* <img className='mb-12' src={image} alt='' /> */}
                                        {/* item name */}
                                        <div className='mb-4 flex items-center gap-x-2'>
                                            <div className='text-[32px] font-bold'>{name}</div>
                                        </div>

                                        {/* item description */}
                                        <p className='mb-4'>Account Currency: {accCur}</p>
                                        {/* account deposit */}
                                        <p className='mb-4'>Account Deposit: {dep}</p>
                                        {/* Spread */}
                                        <p className='mb-4'>Spread: {spread}</p>
                                        {/* swap free */}
                                        <p className='mb-4'>Swap Free: {swapFree}</p>
                                        <p className='mb-6 text-center'>Commission: {Comm}</p>
                                        {/* btn */}
                                        <button
                                            className={`${name === itemName
                                                ? 'text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3 transitionall duration-300'
                                                : ' w-16'
                                                }  border-2 border-gray-300 rounded-full h-16 flex justify-center items-center`
                                            }
                                            style={{ background: "#0faf93" }}
                                        >
                                            {name === itemName && (
                                                <div className='text-lg font-medium'>Sign Up</div>
                                            )}
                                            <IoIosArrowForward
                                                className={`${name === itemName ? 'text-2xl' : 'text-3xl'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            );
                        }
                    )}

                </div>
            </div>
        </section>
    )
}

export default Trade
