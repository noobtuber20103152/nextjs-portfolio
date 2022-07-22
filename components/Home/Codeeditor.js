import React, { useState } from 'react'
import About from './About'
import Acheivements from './Acheivements'
import Education from './Education'
import { DiJavascript1, DiReact, DiPython } from 'react-icons/di';
function Codeeditor() {
    const [data, setdata] = useState({ about: true, education: false, achievement: false });
    const onclick1 = (e) => {
        setdata({ about: true, education: false, achievement: false })
    }
    const onclick2 = (e) => {
        setdata({ about: false, education: true, achievement: false })
    }
    const onclick3 = (e) => {
        setdata({ about: false, education: false, achievement: true })
    }
    return <>
            <div className='mt-3 pb-20 animate-fadeIn'>
                <div className="flex justify-center">
                    <div className="md:w-8/12 w-11/12 border border-[#696e77] rounded-lg " >
                        <div className='bg-[#161a20] pt-2 px-2'>
                            <button onClick={onclick1} name="about" className={` hover:text-white items-center bg-transparent font-semibold ${data.about ? "text-white" : "text-[#696e77]"}  ${data.about ? "bg-[#25282f]" : "bg-[#161a20]"}  duration-200 py-3 px-4  rounded-t-lg`}><DiPython className={`${data.about?"animate-spin text-yellow-400 ":"animate-none"} inline-block mr-2`} />About.py</button>
                            <button onClick={onclick2} name="education" className={`hover:text-white bg-transparent font-semibold   duration-200 py-3 px-4 ${data.education ? "text-white" : "text-[#696e77]"}  ${data.education ? "bg-[#25282f]" : "bg-[#161a20]"} ${data.education ? "bg-[#25282f]" : "bg-[#161a20]"}  rounded-t-lg`}><DiJavascript1 className={`${data.education?"animate-spin text-yellow-200":"animate-none"} inline-block mr-1 `} />Education.js</button>
                            <button onClick={onclick3} name="achievement" className={` hover:text-white bg-transparent font-semibold   duration-200 py-3 px-4 ${data.achievement ? "text-white" : "text-[#696e77]"} ${data.achievement ? "bg-[#25282f]" : "bg-[#161a20]"} ${data.achievement ? "bg-[#25282f]" : "bg-[#161a20]"}  rounded-t-lg`}><DiReact className={`${data.achievement?"animate-spin text-blue-400 ":"animate-none"} inline-block mr-1  `} /> Achievements.jsx</button>
                        </div>
                        {data.about && <About />}
                        {data.education && <Education />}
                        {data.achievement && <Acheivements />}
                    </div>
                </div>
            </div>
        </>
    
}

export default Codeeditor