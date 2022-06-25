import React, { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import { AiOutlineLoading } from 'react-icons/ai';
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
    const apiData = "response = request('https://www.nitj.ac.in/ student/20103152')\n data =  response.json()\n print(data)"
    return (
        <>
            <div className=' bg-transparent bg-[#25282f]   duration-1000 py-5 pl-5 pr-2'>
                <CopyBlock style={{ padding: "10px 5px", fontSize: "20px" }}
                    text={apiData}
                    theme={dracula}
                    wrapLines={true}
                    language="python"
                />
                <button onClick={exucute} class="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded">Submit</button>
                <button onClick={clear} class="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded">Clear</button>
                {loading && <AiOutlineLoading className='animate-spin text-xl' />}
                {output && <div>
                    I am a MERN stack web developer nothing else.
                </div>}
            </div>
        </>
    )
}

export default About