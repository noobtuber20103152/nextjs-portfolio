/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import { AiOutlineLoading, AiOutlineGithub } from 'react-icons/ai';
import { SiCodechef, SiLeetcode, SiCodeforces, SiGeeksforgeeks, SiBina } from "react-icons/si"
function Coding() {
    const [output, setoutput] = useState(false);
    const [loading, setloading] = useState(false);
    const exucute = () => {
        setoutput(false);
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
            <CopyBlock showLineNumbers={false} className="animate-fadeIn" style={{ padding: "10px 5px", fontSize: "20px" }}
                text={apiData}
                theme={dracula}
                wrapLines={true}
                language="sql"
            />
            <button onClick={exucute} className="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded">Submit</button>
            <button onClick={clear} className="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded">Clear</button>
            {loading && <AiOutlineLoading className='animate-spin text-xl' />}
            {output && <div  >
                <ol className="relative border-l w-full my-8 border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ml-6">
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img className="rounded-full shadow-lg" src="https://upload.wikimedia.org/wikipedia/en/9/96/Logo_of_NIT_Jalandhar.png" alt="Thomas Lean image" />
                        </span>
                        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                            <div className="justify-between items-center mb-3 sm:flex">
                                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"></time>
                                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Coding plateforms where I solve DSA problems and participate in various contest.<a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline"></a></div>
                            </div>
                            <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                                <a href="https://www.codechef.com/users/ujjawal_100" rel="noreferrer" target="_blank" className='py-2 mx-2 inline-block'>
                                    <SiCodechef className='text-purple-500 text-2xl' />
                                </a>
                                <a href="https://leetcode.com/noobtuber/" rel="noreferrer" target="_blank" className='py-2 mx-2 inline-block'>
                                    <SiLeetcode className='text-red-500 text-2xl' />
                                </a>
                                <a href="https://codeforces.com/profile/Noob_tuber" rel="noreferrer" target="_blank" className='py-2 mx-2 inline-block'>
                                    <SiCodeforces className='text-blue-500 text-2xl' />
                                </a>
                                <a href="https://auth.geeksforgeeks.org/user/ujjawalrcs20/practice/" rel="noreferrer" target="_blank" className='py-2 mx-2 inline-block'>
                                    <SiGeeksforgeeks className='text-green-500 text-2xl' />
                                </a>
                                <a href="https://github.com/noobtuber20103152" target="_blank" rel="noreferrer" className='py-2 mx-2 inline-block'>
                                    <AiOutlineGithub className='text-blue-600 text-2xl' />
                                </a>
                            </div>
                        </div>
                    </li>
                </ol>


            </div>}
        </div>
    </>

}

export default Coding;