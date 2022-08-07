import React, { useState } from 'react'
import { DiJavascript1, DiReact, DiMysql, DiPython } from 'react-icons/di';
import Coding from './Coding';
import Tech from './Tech';
function Skillscodeeditor() {
    const [data, setdata] = useState({ coding: true, skills: false });
    const onclick1 = (e) => {
        setdata({ coding: true, skills: false })
    }
    const onclick2 = (e) => {
        setdata({ coding: false, skills: true })
    }
    const onclick3 = (e) => {
        setdata({ coding: false, skills: false })
    }
    return <>
            <div className='mt-3 pb-20 animate-fadeIn'>
                <div className="flex justify-center">
                    <div className="md:w-8/12 w-11/12 border border-[#696e77] rounded-lg " >
                        <div className='bg-[#161a20] pt-2 px-2'>
                            <button onClick={onclick1} name="coding" className={` hover:text-white items-center bg-transparent font-normal ${data.coding ? "text-white" : "text-[#696e77]"}  ${data.coding ? "bg-[#25282f]" : "bg-[#161a20]"}  duration-200 py-3 px-4  rounded-t-lg`}><DiMysql className={`${data.coding ? "animate-spin" : "animate-none"} inline-block mr-2`} />coding.sql</button>
                            <button onClick={onclick2} name="skills" className={`hover:text-white bg-transparent font-normal   duration-200 py-3 px-4 ${data.skills ? "text-white" : "text-[#696e77]"}  ${data.skills ? "bg-[#25282f]" : "bg-[#161a20]"} ${data.skills ? "bg-[#25282f]" : "bg-[#161a20]"}  rounded-t-lg`}><DiJavascript1 className={`${data.skills ? "animate-spin" : "animate-none"} inline-block mr-1`} />skills.js</button>
                        </div>
                        {data.coding && <Coding/>}
                        {data.skills && <Tech/>}
                    </div>
                </div>
            </div>

        </>
    
}

export default Skillscodeeditor