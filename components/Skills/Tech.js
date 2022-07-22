import React, { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import { AiOutlineLoading, AiOutlineHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiJavascript1, DiReact, DiPython } from 'react-icons/di';
import { SiNodedotjs, SiMongodb, SiExpress, SiC, SiCplusplus, SiMysql } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { FaGit } from "react-icons/fa"
function Tech() {
    const [output, setoutput] = useState(false);
    const [loading, setloading] = useState(false);
    const exucute = () => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
            setoutput(true)
        }, 2000);
    }
    const clear = () => {
        setoutput(false)
    }
    const apiData = "import { Skills } from ' ./models '\n async function getSkills () {\n   let data = await Skills.find( { type: 'technical' } ) ;\n   return data ;\n  }\n  console.log( getSkills( ) );\n "
    return <>
            <div className=' bg-transparent bg-[#25282f]   duration-1000 py-5 pl-5 pr-2'>
                <CopyBlock showLineNumbers={false} className="animate-fadeIn" style={{ padding: "10px 5px", fontSize: "20px" }}
                    text={apiData}
                    theme={dracula}
                    wrapLines={true}
                    language="javascript"
                />
                <button onClick={exucute} className="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded">Submit</button>
                <button onClick={clear} className="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded">Clear</button>
                {loading && <AiOutlineLoading className='animate-spin text-xl' />}
                {output && <div  >
                    <AiOutlineHtml5 className='inline-block mx-1 text-2xl text-red-500' />
                    <DiCss3 className='inline-block mx-1 text-2xl text-blue-600' />
                    <DiJavascript1 className='inline-block mx-1 text-2xl text-yellow-300' />
                    <DiReact className='inline-block mx-1 text-2xl text-blue-500' />
                    <SiNodedotjs className='inline-block mx-1 text-2xl text-green-400' />
                    <SiMongodb className='inline-block mx-1 text-2xl text-green-500' />
                    <SiExpress className='inline-block mx-1 text-2xl text-gray-400' />
                    <SiMysql className='inline-block mx-1 text-2xl text-[#f29111]' />
                    <TbBrandNextjs className='inline-block mx-1 text-2xl text-white' />
                    <SiC className='inline-block mx-1 text-xl text-blue-400' />
                    <SiCplusplus className='inline-block mx-1 text-2xl text-blue-600' />
                    <DiPython className='inline-block mx-1 text-3xl text-yellow-600' />
                    <FaGit className='inline-block mr-1 text-2xl text-orange-300' />
                    <AiFillGithub className='inline-block mr-1 text-2xl text-white' />
                </div>}
            </div>
        </>
    
}

export default Tech;