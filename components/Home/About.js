import React, { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import { AiOutlineLoading } from 'react-icons/ai';
import { BiLoader } from "react-icons/bi"
function About() {
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
    const apiData = "response = request('https://ujjawalislive/ about')\n data =  response.json()\n print(data)"
    return <>
        <div className=' bg-transparent bg-[#25282f]   duration-1000 py-5 pl-5 pr-2'>
            <CopyBlock showLineNumbers={false} className="animate-fadeIn font-normal" style={{ padding: "10px 5px", fontSize: "20px" }}
                text={apiData}
                theme={dracula}
                wrapLines={true}
                language="python"
            />
            <button onClick={exucute} className="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded">Submit</button>
            <button onClick={clear} className="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded">Clear</button>
            {loading && <BiLoader className='animate-spin text-xl' />}
            {output && <div  >
                <ol class="relative border-l w-full my-8 border-gray-200 dark:border-gray-700">
                    <li class="mb-10 ml-6">
                        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img class="rounded-full shadow-lg" src="https://upload.wikimedia.org/wikipedia/en/9/96/Logo_of_NIT_Jalandhar.png" alt="Thomas Lean image" />
                        </span>
                        <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                            <div class="justify-between items-center mb-3 sm:flex">
                                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"></time>
                                <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">MERN stack web developer and competitive programmer<a href="#" class="font-semibold text-gray-900 dark:text-white hover:underline"></a></div>
                            </div>
                            <div class="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300"> I am a MERN stack web developer. I am using React JS, Next JS for frontend , Node JS for backend, MongoDB for database , tailwind css use as css framework. I created many applications related to each and every technology which you can watch out on my GitHub. Recently I created a blog website which I prefer to  check out first.</div>
                        </div>
                    </li>
                </ol>

            </div>}
        </div>
    </>
}

export default About