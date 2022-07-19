import React, { useState } from 'react'
import { SiBlogger, SiMyanimelist, SiBookstack } from "react-icons/si"
import Animetes from './Animetes';
import Blog from './Blog';
import Ebook from './Ebook';
function Projecteditor() {
    const [data, setdata] = useState({ blog: true, animetes: false, ebook: false });
    const onclick1 = (e) => {
        setdata({ blog: true, animetes: false, ebook: false })
    }
    const onclick2 = (e) => {
        setdata({ blog: false, animetes: true, ebook: false })
    }
    const onclick3 = (e) => {
        setdata({ blog: false, animetes: false, ebook: true })
    }
    return <>
        <div className='mt-20 pb-20 animate-fadeIn'>
            <div className="flex justify-center">
                <div className="md:w-8/12 w-11/12 border border-[#696e77] rounded-lg " >
                    <a target="_blank" rel="noreferrer" href={(data.blog && "https://blogtuber.vercel.app/") || (data.animetes && "https://github.com/noobtuber20103152/Hackmol-3.0") || (data.ebook && "https://github.com/noobtuber20103152/eBook")} className='text-center block  text-[#878e99] font-bold bg-[#161a23] my-2 hover:text-white '>{data.blog && "Blog Website"} {data.animetes && "Animetes"} {data.ebook && "eBook store"}</a>
                    <div className='bg-[#161a20] pt-2 px-2'>
                        <button onClick={onclick1} name="blog" className={` hover:text-white items-center bg-transparent font-semibold ${data.blog ? "text-white" : "text-[#696e77]"}  ${data.blog ? "bg-[#25282f]" : "bg-[#161a20]"}  duration-200 py-3 px-4  rounded-t-lg`}><SiBlogger className={`${data.blog ? "animate-spin text-blue-400 " : "animate-none"} inline-block mr-2`} />Blog Website</button>
                        <button onClick={onclick2} name="animetes" className={`hover:text-white bg-transparent font-semibold   duration-200 py-3 px-4 ${data.animetes ? "text-white" : "text-[#696e77]"}  ${data.animetes ? "bg-[#25282f]" : "bg-[#161a20]"} ${data.animetes ? "bg-[#25282f]" : "bg-[#161a20]"}  rounded-t-lg`}><SiMyanimelist className={`${data.animetes ? "animate-spin text-yellow-200" : "animate-none"} inline-block mr-1 `} />Animetes</button>
                        <button onClick={onclick3} name="ebook" className={` hover:text-white bg-transparent font-semibold   duration-200 py-3 px-4 ${data.ebook ? "text-white" : "text-[#696e77]"} ${data.ebook ? "bg-[#25282f]" : "bg-[#161a20]"} ${data.ebook ? "bg-[#25282f]" : "bg-[#161a20]"}  rounded-t-lg`}><SiBookstack className={`${data.ebook ? "animate-spin text-green-400 " : "animate-none"} inline-block mr-1  `} /> eBook store</button>
                    </div>

                    {data.blog && <Blog />}
                    {data.animetes && <Animetes />}
                    {data.ebook && <Ebook />}
                </div>
            </div>
        </div>
    </>
}

export default Projecteditor;