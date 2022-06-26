import React, { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import { AiOutlineLoading } from 'react-icons/ai';
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
    return (
        <>
            <div className=' bg-transparent bg-[#25282f]   duration-1000 py-5 pl-5 pr-2'>
                <CopyBlock showLineNumbers={true}  className="animate-fadeIn" style={{ padding: "10px 5px", fontSize: "20px", Animation:"fadeIn" }}
                    text={apiData}
                    theme={dracula}
                    wrapLines={true}
                    language="javascript"
                />
                <button onClick={exucute} className="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded">Submit</button>
                <button onClick={clear} className="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded">Clear</button>
                {loading && <AiOutlineLoading className='animate-spin text-xl' />}
                {output && <div c >
                    There are my achievements or nothing else.
                </div>}
            </div>
        </>
    )
}

export default Acheivements;