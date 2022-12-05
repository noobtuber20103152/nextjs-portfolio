import React from 'react'
import { SiFoodpanda, SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks } from "react-icons/si"
import { BsFillFileBinaryFill, BsGithub } from "react-icons/bs"
import { AiFillFilePdf } from "react-icons/ai"
function Card() {
    return <>
        <div className='flex justify-center relative -my-52 items-center  '>
            <div className='md:w-10/12 w-11/12 bg-[#fffffe] rounded-lg shadow-2xl border-gray-400 border shadow-cyan-500/10 h-auto'>
                <h1 className='text-7xl text-center  flex justify-center items-center mt-10' >
                    <img src="https://c.tenor.com/VPs3ue2iciQAAAAi/tkthao219-bubududu.gif" height={100} width={100} alt="" />
                </h1>
                <h1 className='text-center text-[#24282e]  mt-5 text-3xl md:text-6xl font-extrabold'>
                    Don&apos;t fly solo
                </h1>
                <p className='text-center text-xl font-normal mt-5 text-[#83848b]' >Give me a chance I prove you, Why I am better than other.</p>
                <div className="flex my-5 justify-center animate-fadeIn">
                    <div className='md:w-12/12 w-12/12 flex flex-wrap justify-center'>
                        <a href="https://github.com/noobtuber20103152" target="_blank" rel="noreferrer" className="hover:shadow-lg hover:-translate-y-1 hover:shadow-cyan-500/50  bg-transparent mx-2 my-2  font-normal text-lg py-3 duration-500 hover:bg-[#2d2546]  bg-[#373b3f] text-white px-4 rounded">Explore <BsGithub className='inline text-2xl' /></a>
                        <a href="/Ujjawal_Rachhoya_SDE.pdf" target="_blank" rel="noreferrer" className="hover:shadow-lg hover:-translate-y-1 hover:shadow-yellow-500/50 bg-transparent mx-2 my-2 text-lg font-normal border hover:border-gray-900 border-gray-400 duration-500 py-3 px-4   rounded">Resume <AiFillFilePdf className='inline text-2xl' /> </a>
                    </div>
                </div>
                <div className="flex my-5  justify-center animate-fadeIn ">
                    <div className='md:w-12/12 w-12/12 flex flex-wrap  justify-center'>
                        <a href="https://www.codechef.com/users/ujjawal_100" target="_blank" rel="noreferrer" className="hover:shadow-lg hover:-translate-y-1 hover:shadow-cyan-500/50  bg-transparent mx-2 my-2  font-normal text-lg py-3 duration-500  text-black px-4 rounded">Codechef <SiCodechef className='inline text-2xl' /></a>
                        <a href="https://leetcode.com/noobtuber/" target="_blank" rel="noreferrer" className="hover:shadow-lg hover:-translate-y-1 hover:shadow-red-500/50 bg-transparent mx-2 my-2 text-lg font-normal  duration-500 py-3 px-4   rounded">Leetcode <SiLeetcode className='inline text-2xl' /> </a>
                        <a href="https://auth.geeksforgeeks.org/user/ujjawalrcs20" target="_blank" rel="noreferrer" className="hover:shadow-lg hover:-translate-y-1 hover:shadow-green-500/50 bg-transparent mx-2 my-2 text-lg font-normal  duration-500 py-3 px-4   rounded">Geeksforgeek <SiGeeksforgeeks className='inline text-2xl' /> </a>
                        <a href="https://codeforces.com/profile/Noob_tuber" target="_blank" rel="noreferrer" className="hover:shadow-lg hover:-translate-y-1 hover:shadow-blue-500/50 bg-transparent mx-2 my-2 text-lg font-normal  duration-500 py-3 px-4   rounded">Codeforces <SiCodeforces className='inline text-2xl' /> </a>
                        <a href="https://binarysearch.com/@/ujjawalrachhoya" target="_blank" rel="noreferrer" className="hover:shadow-lg hover:-translate-y-1 hover:shadow-cyan-500/50 bg-transparent mx-2 my-2 text-lg font-normal  duration-500 py-3 px-4   rounded">Binary Search <BsFillFileBinaryFill className='inline text-2xl' /> </a>
                        <a href="https://github.com/noobtuber20103152" target="_blank" rel="noreferrer" className="hover:shadow-lg hover:-translate-y-1 hover:shadow-black/50 bg-transparent mx-2 my-2 text-lg font-normal  duration-500 py-3 px-4   rounded">GitHub <BsGithub className='inline text-2xl' /> </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Card