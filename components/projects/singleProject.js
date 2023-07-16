import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineLink } from "react-icons/ai"
import { FaYoutube } from "react-icons/fa"
function SingleProject(props) {
    const data = props.data;
    // const router = useRouter();
    // const { slug } = router.query;
    // console.log(slug)
    return <>
        <div className='bg-[#0f172a] py-10'>
            <div className='mx-auto lg:w-5/12 w-full px-5 '>
                <h1 className='text-2xl font-[700] text-white mb-5'>{data?.projectName}</h1>
                <img src={data?.imgUrl} />
                {data?.longDesc?.map((e) => {
                    return <>
                        <p className='text-[#d3d3d3] mt-6 mb-1'>{e}</p>
                    </>
                })}
                <h1 className='text-xl text-white my-6 font-bold'>Links</h1>
                <a href={data?.liveLink?.url} className='px-4 rounded-lg py-2 bg-white text-black'>
                    <AiOutlineLink className="inline text-xl text-blue-500" />   {data?.liveLink?.text}
                </a>
                {data?.youtube && <a href={data?.youtube?.url} className='px-4 rounded-lg py-2 mx-3 bg-white text-black'>
                    <FaYoutube className="inline text-xl text-red-500" />   {data?.youtube?.text}
                </a>}
            </div>

        </div>
    </>
}

export default SingleProject