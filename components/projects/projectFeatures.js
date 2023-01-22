import React from "react";

function ProjectFeatures(props) {
  return (
    <>
      <div className="md:w-8/12 w-full mx-auto">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex w-full mb-20 flex-wrap">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                {props.title}
              </h1>
              <p class=" lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                {props.description}
                <br />
                <a
                  href={props.live}
                  target="_blank"
                  class="  text-green-400  mx-auto leading-relaxed text-base"
                >
                  {props.live}
                </a>
              </p>
            </div>
            <div class="flex flex-wrap md:-m-2 -m-1">
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full hover:scale-125 hover:cursor-pointer duration-300 border object-cover h-full object-center block"
                    src={`/assets/${props.id}1.jpg`}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full hover:scale-125 hover:cursor-pointer duration-300 border object-cover h-full object-center block"
                    src={`/assets/${props.id}2.jpg`}
                  />
                </div>
                <div class="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    class="w-full hover:scale-125 hover:cursor-pointer duration-300 border h-full object-cover object-center block"
                    src={`/assets/${props.id}3.jpg`}
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    class="w-full hover:scale-125 hover:cursor-pointer duration-300 border h-full object-cover object-center block"
                    src={`/assets/${props.id}4.jpg`}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full hover:scale-125 hover:cursor-pointer duration-300 border object-cover h-full object-center block"
                    src={`/assets/${props.id}5.jpg`}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full hover:scale-125 hover:cursor-pointer duration-300 border object-cover h-full object-center block"
                    src={`/assets/${props.id}6.jpg`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProjectFeatures;
