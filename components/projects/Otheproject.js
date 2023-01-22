import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
function Otheproject() {
    const data = "\n  git clone repo_link\n  yarn install / npm install \n  yarn start / npm run start (React project )\n  yarn run dev (Next Project)\n\n";
    return  <>
            <div className='flex justify-center items-center pb-72 flex-col'>
                <div className='md:w-6/12 w-11/12 '>
                    <h1 className='text-center md:text-3xl  text-sm md:font-extrabold font-semibold text-white' >There are many intersting project on my GitHub profile. Please have a look and follow below steps for each repo and enjoy.</h1>
                </div>

                <div className='md:w-6/12 w-11/12 my-10'>
                    <CopyBlock showLineNumbers={false} className="animate-fadeIn" style={{ color: "black", padding: "10px 5px", fontSize: "20px" }}
                        text={data}
                        theme={dracula}
                        wrapLines={true}
                        language="php"
                    />
                </div>
            </div>
        </>
    
}

export default Otheproject