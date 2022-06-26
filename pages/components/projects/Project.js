import React from 'react'
import { SiBlogger,SiMyanimelist ,SiBookstack } from "react-icons/si"
import Otheproject from './Otheproject';
import Projecteditor from './Projecteditor';
function Project() {
    return (
        <>
            <div className='bg-[#1b1f24] py-10'>
                <div className=' w-12/12 flex flex-col   justify-center items-center '>
                    <h1 className='animate__animated animate__rubberBand   animate__delay-1s  text-3xl md:w-6/12 w-11/12 md:mr-64 ml-0 text-white text-left font-extrabold pt-5' >Want to see my project?</h1>
                    <p className='text-left text-xl md:w-6/12 md:mr-64 ml-0 w-11/12 text-[#88909b] font-semibold' >I am the kind of person who learns from making projects and implements concepts through out making projects. These are my best projects which really inspire you.</p>
                </div>
                <div className='w-12/12   my-5 ml-0 flex justify-start items-start'>
                    <div className='  flex justify-center flex-wrap w-full '>
                        <a  target="_blank" rel="noreferrer" href="https://blogtuber.vercel.app/" className="hover:shadow-lg hover:-translate-y-1 hover:shadow-cyan-500/50 bg-[#24292f] flex flex-col justify-center items-center font-semibold m-2 w-[150px] h-[150px]   bordr rounded-xl">
                           <SiBlogger className='text-6xl text-blue-400' />
                           <p className='text-white my-2'>Blog Website</p>
                        </a >
                        <a  target="_blank" rel="noreferrer" href="https://github.com/noobtuber20103152/Hackmol-3.0"  className="hover:shadow-lg hover:-translate-y-1 hover:shadow-yellow-500/50 bg-[#24292f] flex flex-col justify-center items-center font-semibold m-2 w-[150px] h-[150px]   bordr rounded-xl">
                           <SiMyanimelist className='text-6xl text-yellow-400' />
                           <p className='text-white my-2'>Animites GitHub</p>
                        </a >
                        <a  target="_blank" rel="noreferrer"  href="https://github.com/noobtuber20103152/eBook" className="hover:shadow-lg hover:-translate-y-1 hover:shadow-green-500/50 bg-[#24292f] flex flex-col justify-center items-center font-semibold m-2 w-[150px] h-[150px]   bordr rounded-xl">
                           <SiBookstack className='text-6xl text-green-400' />
                           <p className='text-white my-2'>eBook GitHub</p>
                        </a >
                    </div>
                </div>
                <Projecteditor />
                <Otheproject/>
            </div>
            
        </>
    )
}

export default Project;