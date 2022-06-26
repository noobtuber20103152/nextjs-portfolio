import React from 'react'
import { SiVisualstudiocode } from "react-icons/si"
function CodeEditor() {
    return <>
        <div className='bg-[#1b1f24] pt-20 pb-5'>
            <div className=' w-12/12 flex flex-col   justify-center items-center '>
                <h1 className='animate__animated animate__rubberBand   animate__delay-1s  text-3xl md:w-6/12 w-11/12 md:ml-64 ml-0 text-white text-left font-extrabold pt-5' >Which code editor I use</h1>
                <p className='text-left text-xl md:w-6/12 md:ml-64 ml-0 w-11/12 text-[#88909b] font-semibold' >I am using VS Code for coding because VS Code comes up with better user interface lot&apos;s of extensions. Navigation from one folder to another folder is so easy and the most important thing is vs code user experience.</p>
            </div>
            <div className='w-12/12 my-5 ml-0 flex justify-center items-center'>
                <div className=' w-12/12 md:w-4/12 '>
                    <button className="hover:shadow-lg hover:-translate-y-1 hover:shadow-cyan-500/50 bg-[#24292f] flex flex-col justify-center items-center font-semibold m-2  p-6 bordr rounded-xl">
                        <SiVisualstudiocode className='text-6xl text-blue-400' />
                        <p className='text-white my-2'>Visual Studio Code</p>
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default CodeEditor