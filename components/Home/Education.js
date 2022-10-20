import React, { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import { AiOutlineLoading } from 'react-icons/ai';
import { BiLoader } from "react-icons/bi"
function Education() {
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
    const apiData = "async function getData(){\n   const data = await fetch('https://ujjawalislive/ education ');\n   const data = await data.json();  \n   console.log(data);\n }\n  getData();"
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
            {loading && <BiLoader className='animate-spin text-xl' />}
            {output && <div  >
                <ol class="relative border-l w-full my-8 border-gray-200 dark:border-gray-700">
                    <li class="mb-10 ml-6">
                        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img class="rounded-full shadow-lg" src="https://upload.wikimedia.org/wikipedia/en/9/96/Logo_of_NIT_Jalandhar.png" alt="Bonnie image" />
                        </span>
                        <div class="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                            <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Dec 2020 - present</time>
                            <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Currentyle pursuing B.Tech in computer science and engineering at <a  target="_blank" href="https://www.nitj.ac.in/" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Dr. B R Ambedkar National Institute Of Technology, Jalandhar</a> </div>
                        </div>
                    </li>
                </ol>
                
            </div>}
        </div>
    </>

}

export default Education