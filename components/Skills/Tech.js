import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { AiOutlineLoading, AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact, DiPython } from "react-icons/di";
import {
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiC,
  SiCplusplus,
  SiMysql,
  SiFlutter
} from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { FaGit } from "react-icons/fa";
import { SiStrapi } from "react-icons/si";
function Tech() {
  const [output, setoutput] = useState(false);
  const [loading, setloading] = useState(false);
  const exucute = () => {
    setoutput(false);
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setoutput(true);
    }, 2000);
  };
  const clear = () => {
    setoutput(false);
  };
  const apiData =
    "import { Skills } from ' ./models '\n async function getSkills () {\n   let data = await Skills.find( { type: 'technical' } ) ;\n   return data ;\n  }\n  console.log( getSkills( ) );\n ";
  return (
    <>
      <div className=" bg-transparent bg-[#25282f]   duration-1000 py-5 pl-5 pr-2">
        <CopyBlock
          showLineNumbers={false}
          className="animate-fadeIn"
          style={{ padding: "10px 5px", fontSize: "20px" }}
          text={apiData}
          theme={dracula}
          wrapLines={true}
          language="javascript"
        />
        <button
          onClick={exucute}
          className="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded"
        >
          Submit
        </button>
        <button
          onClick={clear}
          className="my-3 bg-transparent mx-2 py-1   duration-1000   bg-[#455a64] text-[#c9e9ee] px-2  rounded"
        >
          Clear
        </button>
        {loading && <AiOutlineLoading className="animate-spin text-xl" />}
        {output && (
          <div>
            <ol class="relative border-l w-full my-8 border-gray-200 dark:border-gray-700">
              <li class="mb-10 ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <img
                    class="rounded-full shadow-lg"
                    src="https://upload.wikimedia.org/wikipedia/en/9/96/Logo_of_NIT_Jalandhar.png"
                    alt="Thomas Lean image"
                  />
                </span>
                <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                  <div class="justify-between items-center mb-3 sm:flex">
                    <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"></time>
                    <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                      Tech stack and programming languages which I use to make
                      web application.
                      <a
                        href="#"
                        class="font-semibold text-gray-900 dark:text-white hover:underline"
                      ></a>
                    </div>
                  </div>
                  <div class="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                    <AiOutlineHtml5 className="inline-block mx-1 text-2xl text-red-500" />
                    <DiCss3 className="inline-block mx-1 text-2xl text-blue-600" />
                    <DiJavascript1 className="inline-block mx-1 text-2xl text-yellow-300" />
                    <DiReact className="inline-block mx-1 text-2xl text-blue-500" />
                    <SiNodedotjs className="inline-block mx-1 text-2xl text-green-400" />
                    <SiMongodb className="inline-block mx-1 text-2xl text-green-500" />
                    <SiExpress className="inline-block mx-1 text-2xl text-gray-400" />
                    <SiMysql className="inline-block mx-1 text-2xl text-[#f29111]" />
                    <TbBrandNextjs className="inline-block mx-1 text-2xl text-yellow-500" />
                    <SiC className="inline-block mx-1 text-xl text-blue-400" />
                    <SiCplusplus className="inline-block mx-1 text-2xl text-blue-600" />
                    <DiPython className="inline-block mx-1 text-3xl text-yellow-600" />
                    <FaGit className="inline-block mr-1 text-2xl text-orange-300" />
                    <AiFillGithub className="inline-block mr-1 text-2xl text-blue-500" />
                    <SiStrapi className="inline-block mr-1 text-2xl text-blue-500" />
                    <TbBrandReactNative className="inline-block mr-1 text-2xl text-blue-500" />
                    {/* <BiLogoFlutter className="inline-block mr-1 text-2xl text-blue-500" /> */}
                    <SiFlutter className="inline-block mr-1 text-2xl text-blue-500" />
                  </div>
                </div>
              </li>
            </ol>
          </div>
        )}
      </div>
    </>
  );
}

export default Tech;
