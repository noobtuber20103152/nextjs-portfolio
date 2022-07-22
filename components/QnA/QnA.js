import React, { useState } from 'react'
import Head from "next/head"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
function QnA() {
    const [collapse, setcollapse] = useState({ card1: "hidden", card2: "hidden", card3: "hidden" });
    const onclick = (value) => {
        if (value == 1) {
            setcollapse({ ...collapse, card2: "hidden", card3: "hidden", card1: collapse.card1 == "hidden" ? "" : "hidden" })
        }
        else if (value == 2) {
            setcollapse({ ...collapse, card1: "hidden", card3: "hidden", card2: collapse.card2 == "hidden" ? "" : "hidden" })
        }
        else if (value == 3) {
            setcollapse({ ...collapse, card2: "hidden", card1: "hidden", card3: collapse.card3 == "hidden" ? "" : "hidden" })
        }
    }
    return <>
        <Head>

        </Head>
        <div className='flex justify-center items-center '>
            <div className='md:w-10/12 w-11/12 border py-5 bg-gradient-to-b from-[#d9dbe8] to-white rounded-lg'>
                <div className="flex justify-center mb-3">
                    <img width={80} src="https://c.tenor.com/F1ynPfLGvFcAAAAi/tkthao219-bubududu.gif" alt="" />
                </div>
                <h1 className='text-xl text-center uppercase font-extrabold' >Something about me</h1>
            </div>
        </div>
        <div className='flex justify-center items-center my-10'>
            <div className='md:w-7/12 w-11/12'>
                <div id="accordion-collapse" data-accordion="collapse">
                    <h2 id="accordion-collapse-heading-1">
                        <button onClick={() => onclick(1)} type="button" className="flex justify-start items-center p-5 w-full font-medium text-left rounded-t-xl border  border-gray-400 border-t-0 border-r-0 border-l-0 border-b-1 " data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            {collapse.card1 == "hidden" ? <AiOutlinePlus className='inline mr-2' /> : <AiOutlineMinus className='inline mr-2' />}
                            <span className='text-2xl' >who I am?</span>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" className={collapse.card1} aria-labelledby="accordion-collapse-heading-1">
                        <div className="px-2 ">
                            <p className="my-2 md:ml-8 text-xl text-gray-500 dark:text-gray-400">Hi, I am Ujjawal Rachhoya pursuing B.Tech study at Dr. B R Ambedkar National Institute Of Technology, Jalandhar. I am a MERN stack web developer and have a strong hand in data structures and algorithms or problem solving skills and you can check out my profile on the coding platform which I mentioned above. Currently I am a 3rd year student and currently looking for an internship.</p>
                        </div>
                    </div>
                    <h2 id="accordion-collapse-heading-1">
                        <button onClick={() => onclick(2)} type="button" className="flex justify-start items-center p-5 w-full font-medium text-left rounded-t-xl border  border-gray-400 border-t-0 border-r-0 border-l-0 border-b-1 " data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            {collapse.card2 == "hidden" ? <AiOutlinePlus className='inline mr-2' /> : <AiOutlineMinus className='inline mr-2' />}
                            <span className='text-2xl' >Which technologies I use to build web application?</span>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" className={collapse.card2} aria-labelledby="accordion-collapse-heading-1">
                        <div className="px-2 ">
                            <p className="my-2 md:ml-8 text-xl text-gray-500 dark:text-gray-400">I am using React JS, Next JS for frontend , Node JS for backend, MongoDB for database , tailwind css use as css framework. I created many applications related to each and every technology which you can watch out on my GitHub. Recently I created a blog website which I prefer to  check out first.</p>
                        </div>
                    </div>
                    <h2 id="accordion-collapse-heading-1">
                        <button onClick={() => onclick(3)} type="button" className="flex justify-start items-center p-5 w-full font-medium text-left rounded-t-xl border  border-gray-400 border-t-0 border-r-0 border-l-0 border-b-1 " data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            {collapse.card3 == "hidden" ? <AiOutlinePlus className='inline mr-2' /> : <AiOutlineMinus className='inline mr-2' />}
                            <span className='text-2xl' >What about my interests?</span>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" className={collapse.card3} aria-labelledby="accordion-collapse-heading-1">
                        <div className="px-2 ">
                            <p className="my-2 md:ml-8 text-xl text-gray-500 dark:text-gray-400">I am passionate about gaming, cricket and kabaddi. In my free time I like to play PUBG lite. If you want to play with me I give below and send me friend requests and let's have fun in  the game. I am also a district level kabaddi player and our team was able to secure 2nd position in the tournament and also winning many small village kabbadi tournaments. I also have level 10 town hall max clash of clans id.</p>
                            <p className="my-2 md:ml-8 text-xl text-gray-500 dark:text-gray-400">PUBG lite  - 7282035541  </p>
                            <p className="my-2 md:ml-8 text-xl text-gray-500 dark:text-gray-400">Clash Of Clans  - #YJ098RY20  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default QnA