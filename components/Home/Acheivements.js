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
            <CopyBlock showLineNumbers={false} className="animate-fadeIn" style={{ padding: "10px 5px", fontSize: "20px", Animation: "fadeIn" }}
                text={apiData}
                theme={dracula}
                wrapLines={true}
                language="javascript"
            />
            <button onClick={exucute} className="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded">Submit</button>
            <button onClick={clear} className="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded">Clear</button>
            {loading && <BiLoader className='animate-spin text-xl' />}
            {output && <div c >
                <p>1. Participated in hackmol 3.0 organised by DSC NITJ and were able to secure a position at top 10 teams among 250+ teams.</p>
                <p>2. Selected as a frontend developer for improvement and redesign of Dr. B R Ambedkar National Institute Of Technology, Jalandhar official website.</p>
                <a href="https://drive.google.com/file/d/14wSqd23ll4Fe2jkI_ndNUG7z6qt4Vx6i/view" target="_blank" rel="noreferrer" className='text-blue-400 block'>3 Winner of best portfolio challenge by GirlScript Howrah and Asansol cojointly</a>
                <a target="_black" rel="noreferrer" className='text-blue-400 block' href="https://drive.google.com/file/u/1/d/1t-OajhRiVZQE-PL6hW7mGKmVyuCjE5dW/view?usp=sharing">4. Winner of best portfolio website challenge by codepromt instagram page.</a>
                <p>5. Global rank 112 in Exun 2021 codechef</p>
                <p>6. Global rank 45 in February coockoff 2022 codechef</p>
            </div>}
        </div>
    </>
}

export default Acheivements;