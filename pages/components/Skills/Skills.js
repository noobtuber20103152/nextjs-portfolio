import React from 'react'
import Skillscodeeditor from './Skillscodeeditor'

function Skills() {
    return  <>

            <div className='bg-[#1b1f24] pt-20  top-100 text-white '>
                <div className=' flex justify-center'>
                    <div className='md:w-6/12 w-12/12'>
                        <h1 className='md:text-4xl text-2xl font-bold text-center animate-fadeIn' >Let&apos;s talk about my coding skills, technical skills and whatever you want to hire me. Please have a look.</h1>
                    </div>
                </div>
                <video playsInline autoPlay muted className=" bg-[#1b1f24]  js-viewport-aware-video events-none height-auto width-auto position-absolute mx-auto bottom-0 z-n1" width="1920" height="780" poster="https://github.githubassets.com/images/modules/site/copilot/hero/bg-poster@2x.webp">
                    <source type="video/mp4; codecs=hvc1" src="https://github.githubassets.com/images/modules/site/copilot/hero/bg@2x.hevc.mov" media="(min-device-pixel-ratio: 1.75), (-webkit-min-device-pixel-ratio: 1.75)" />
                    <source type="video/mp4; codecs=hvc1" src="https://github.githubassets.com/images/modules/site/copilot/hero/bg@1.5x.hevc.mov" media="(min-device-pixel-ratio: 1.3), (-webkit-min-device-pixel-ratio: 1.3)" />
                    <source type="video/mp4; codecs=hvc1" src="https://github.githubassets.com/images/modules/site/copilot/hero/bg@1x.hevc.mov" />
                    <source type="video/webm" src="https://github.githubassets.com/images/modules/site/copilot/hero/bg@2x.webm" media="(min-device-pixel-ratio: 1.75), (-webkit-min-device-pixel-ratio: 1.75)" />
                    <source type="video/webm" src="https://github.githubassets.com/images/modules/site/copilot/hero/bg@1.5x.webm" media="(min-device-pixel-ratio: 1.3), (-webkit-min-device-pixel-ratio: 1.3)" />
                    <source type="video/webm" src="https://github.githubassets.com/images/modules/site/copilot/hero/bg@1x.webm" />
                </video>
                <div className=' flex flex-col justify-center items-center py-5'>
                    <div className='md:w-7/12 w-12/12'>
                        <h1 className='md:text-5xl text-3xl font-extrabold text-center' >Focus on solving bigger problems</h1>
                    </div>
                    <div className='md:w-6/12 w-12/12 mt-5 '>
                        <p className='text-center text-xl text-[#88909b] font-semibold' >I am the kind of person who deals with problems everyday and tries to solve them until they are solved. If you have any problem regarding technology in which I have little bit knowledge I will try to solve it.</p>
                    </div>
                </div>
                <Skillscodeeditor />
            </div>
        </>
    
}

export default Skills