import React, { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import { AiOutlineLoading } from 'react-icons/ai';
import { BiLoader } from "react-icons/bi"
function Acheivements() {
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
    const apiData = "export defult async function getData(){\n   const data = await fetch('https://ujjawalislive/ achievement ');\n   const data = await data.json();  \n   return data;\n }"
    return <>
        <div className=' bg-transparent bg-[#25282f]   duration-1000 py-5 pl-5 pr-2'>
            <CopyBlock showLineNumbers={false} className="animate-fadeIn font-normal" style={{ padding: "10px 5px", fontSize: "20px", Animation: "fadeIn" }}
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
                            <img class="rounded-full shadow-lg" src="https://savviest-blog-assets.storage.googleapis.com/2020/02/achievements--1-.png" alt="Thomas Lean image" />
                        </span>
                        <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                            <div class="justify-between items-center mb-3 sm:flex">
                                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"></time>
                                <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Some achievement of my life in coding.  <a href="#" class="font-semibold text-gray-900 dark:text-white hover:underline"></a></div>
                            </div>
                            <div class="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                                <p>1. Participated in hackmol 3.0 organised by DSC NITJ and were able to secure a position at top 10 teams among 250+ teams.</p>
                                <p>2. Selected as a frontend developer for improvement and redesign of Dr. B R Ambedkar National Institute Of Technology, Jalandhar official website.</p>
                                <a href="https://drive.google.com/file/d/14wSqd23ll4Fe2jkI_ndNUG7z6qt4Vx6i/view" target="_blank" rel="noreferrer" className='text-blue-400 block'>3 Winner of best portfolio challenge by GirlScript Howrah and Asansol cojointly</a>
                                <a target="_black" rel="noreferrer" className='text-blue-400 block' href="https://drive.google.com/file/u/1/d/1t-OajhRiVZQE-PL6hW7mGKmVyuCjE5dW/view?usp=sharing">4. Winner of best portfolio website challenge by codepromt instagram page.</a>
                                <p>5. Global rank 112 in Exun 2021 codechef</p>
                                <p>6. Global rank 45 in February coockoff 2022 codechef</p>
                            </div>
                        </div>
                    </li>

                </ol>

            </div>}
        </div>
    </>
}

export default Acheivements;