import React, { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import { AiOutlineLoading } from 'react-icons/ai';
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
                <CopyBlock showLineNumbers={true} className="animate-fadeIn" style={{ padding: "10px 5px", fontSize: "20px" }}
                    text={apiData}
                    theme={dracula}
                    wrapLines={true}
                    language="javascript"
                />
                <button onClick={exucute} className="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded">Submit</button>
                <button onClick={clear} className="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded">Clear</button>
                {loading && <AiOutlineLoading className='animate-spin text-xl' />}
                {output && <div  >
                    Hi, I am Ujjawal Rachhoya pursuing B.Tech study at Dr. B R Ambedkar National Institute Of Technology, Jalandhar. I am a MERN stack web developer and have a strong hand in data structures and algorithms or problem solving skills and you can check out my profile on the coding platform which I mentioned above. Currently I am a 3rd year student and currently looking for an internship.
                </div>}
            </div>
        </>
    
}

export default Education