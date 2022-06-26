import React, { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import { AiOutlineLoading, AiOutlineGithub } from 'react-icons/ai';
import { SiCodechef, SiLeetcode, SiCodeforces, SiGeeksforgeeks, SiBina } from "react-icons/si"
function Coding() {
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
    const apiData = "SELECT coding from DETAILS ;"
    return <>
            <div className=' bg-transparent bg-[#25282f]   duration-1000 py-5 pl-5 pr-2'>
                <CopyBlock showLineNumbers={true} className="animate-fadeIn" style={{ padding: "10px 5px", fontSize: "20px" }}
                    text={apiData}
                    theme={dracula}
                    wrapLines={true}
                    language="sql"
                />
                <button onClick={exucute} className="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded">Submit</button>
                <button onClick={clear} className="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded">Clear</button>
                {loading && <AiOutlineLoading className='animate-spin text-xl' />}
                {output && <div  >
                    <a href="https://www.codechef.com/users/ujjawal_100" rel="noreferrer" target="_blank" className='py-2 mx-2 inline-block'>
                        <SiCodechef className='text-white text-2xl' />
                    </a>
                    <a href="https://leetcode.com/ujjawalrachhoya100/" rel="noreferrer" target="_blank" className='py-2 mx-2 inline-block'>
                        <SiLeetcode className='text-red-500 text-2xl' />
                    </a>
                    <a href="https://codeforces.com/profile/Noob_tuber" rel="noreferrer" target="_blank" className='py-2 mx-2 inline-block'>
                        <SiCodeforces className='text-blue-500 text-2xl' />
                    </a>
                    <a href="https://auth.geeksforgeeks.org/user/ujjawalrcs20/practice/" rel="noreferrer" target="_blank" className='py-2 mx-2 inline-block'>
                        <SiGeeksforgeeks className='text-green-500 text-2xl' />
                    </a>
                    <a href="https://github.com/noobtuber20103152" target="_blank" rel="noreferrer" className='py-2 mx-2 inline-block'>
                        <AiOutlineGithub className='text-white text-2xl' />
                    </a>
                </div>}
            </div>
        </>
    
}

export default Coding;