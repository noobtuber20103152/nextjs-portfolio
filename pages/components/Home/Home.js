import React from 'react'
import Codeeditor from './Codeeditor'
import { BsGithub } from "react-icons/bs"
import { AiFillFilePdf } from "react-icons/ai"
import { SiBlogger } from "react-icons/si"
// import { } from "bootstrap-icons"
function Home() {
    return <>
        <div className="bg-gradient-to-b pt-20 md:pt-40 text-white from-[#2d2546] to-[#181c22] h-auto ">
            <div className="pb-10">
                <h1 className='text-center font-bold md:text-6xl text-4xl animate-fadeIn  '>Hey, It&apos;s me <span className='text-blue-500'>Ujjawal</span> Rachhoya</h1>
                <div className='flex justify-center animate-fadeIn'>
                    <p className='my-5  w-12/12 text-center text-[#89939d] text-xl font-medium md:w-6/12  '>MERN stack web developer, Quick learner, Self motivated, Curious person</p>
                </div>
                <div className="flex my-5 justify-center animate-fadeIn">
                    <div className='md:w-12/12 w-12/12 flex flex-wrap justify-center'>
                        <a href="https://blogtuber.vercel.app/" target="_blank" rel="noreferrer" className="hover:shadow-lg hover:-translate-y-1 hover:shadow-cyan-500/50  bg-transparent mx-2 my-2  font-bold text-lg py-3 duration-500 hover:bg-[#2d2546]  bg-[#373b3f] text-white px-4 rounded">Explore <SiBlogger className='inline text-2xl' /></a>
                        <a href="https://drive.google.com/file/d/1ye4WF0QU0MwY7y8Vk_1GiOeOLGHK9U56/view?usp=sharing" target="_blank" rel="noreferrer" className="hover:shadow-lg hover:-translate-y-1 hover:shadow-yellow-500/50 bg-transparent mx-2 my-2 text-lg font-semibold border hover:border-gray-900 border-gray-400 duration-500 py-3 px-4   rounded">Resume <AiFillFilePdf className='inline text-2xl' /> </a>
                    </div>
                </div>
            </div>
            <Codeeditor />
        </div>

    </>

}
export default Home;
