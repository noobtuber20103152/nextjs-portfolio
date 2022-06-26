import React from 'react'
import Codeeditor from './Codeeditor'
// import { } from "bootstrap-icons"
export const Home = () => {
    return (
        <>
            <div className="bg-gradient-to-b pt-20 md:pt-40 text-white from-[#2d2546] to-[#181c22] h-auto ">
                <div className="pb-10">
                    <h1 className='text-center font-bold md:text-6xl text-4xl animate-fadeIn  '>Hey, It's me <span className='text-blue-500'>Ujjawal</span> Rachhoya</h1>
                    <div className='flex justify-center animate-fadeIn'>
                        <p className='my-5  w-12/12 text-center text-[#89939d] text-xl font-medium md:w-6/12  '>MERN stack web developer, Quick learner, Self motivated, Curious person</p>
                    </div>
                    <div className="flex my-5 justify-center animate-fadeIn">
                        <div className='md:w-4/12 w-12/12 flex md:flex-row flex-col justify-center'>
                            <button className="bg-transparent mx-2 my-2  font-bold text-lg py-3 duration-1000 hover:bg-[#2d2546] hover:text-white bg-white text-black px-4 border border-dashed rounded"> Star with blog project <i className="animate-pulse bi bi-arrow-right"></i></button>
                            <button className="bg-transparent mx-2 my-2 text-lg font-semibold hover:bg-white hover:text-black duration-1000 py-3 px-4 border border-dashed  rounded">Explore docs</button>
                        </div>
                    </div>
                </div>
                <Codeeditor  />
            </div>
           
        </>
    )
}
