import { data } from "./data";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Projects() {
  const router = useRouter();
  const path = router.asPath;
  console.log(path);
  // data
  return (
    <>
      <div className="bg-[#0f172a] pt-10 py-10">
        <div className="lg:w-8/12 w-full px-10 mx-auto ">
          <div className="border-b border-gray-400">
            <h1 className=" text-[30px] md:text-[30px] font-[700] text-white">
              {" "}
              Projects
            </h1>
          </div>
        </div>

        <div className="lg:w-8/12 pb-32 w-full mx-auto mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-10">
            {data?.map((e) => {
              return (
                <>
                  <Link href={`${path}/${e.route}`}>
                    <div className="rounded-2xl my-2 hover:cursor-pointer hover:bg-[#2b3546] bg-[#1f293a] px-4 py-4">
                      <img className="rounded-lg" src={e.imgUrl} />
                      <h1 className="text-[18px] text-white mt-3 font-[700]">
                        {e.projectName}
                      </h1>
                      <p className="text-[#d3d3d3] mb-1">{e.shortDesc}</p>
                      {e.tech?.map((e2) => {
                        return (
                          <>
                            <span
                              class={`bg-blue-100 text-blue-800 text-sm font-[700] mr-2 px-2.5 py-0.5 rounded`}
                            >
                              {e2.tagName}
                            </span>
                          </>
                        );
                      })}
                      {/* <span class="bg-blue-100 text-blue-800 text-sm font-[700] mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span> */}
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
