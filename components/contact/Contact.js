import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function Contact() {
    const [data, setdata] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [message, setmessage] = useState("Send Message");
    const onchange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    };
    const [sending, setsending] = useState(false);
    const submit = () => {
        console.log(data);
        setsending(true);
        fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                if (response.status == 200) {
                    setmessage("Message Send Successfull");
                    setsending(false);
                    setdata({ name: "", email: "", message: "" });
                    window.scrollTo(0, 0);
                    // setTimeout(() => {
                    //     setmessage("Send Message");
                    //     setdata({ name: "", email: "", phone: "", message: "" });
                    // }, 3000);
                } else {
                    console.log("Error");
                }
            });
    };
    return (
        <>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            class="absolute inset-0"
                            frameborder="0"
                            title="map"
                            marginheight="0"
                            marginwidth="0"
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6622727596946!2d75.53365521508933!3d31.39587458141088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e0!3m2!1sen!2sin!4v1671505541622!5m2!1sen!2sin"
                            //   style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
                            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                        ></iframe>
                        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div class="lg:w-1/2 px-6">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p class="mt-1">
                                    MBH-B , Dr B R Ambedkar
                                    National Institute of Technology
                                    G.T. Road, Amritsar Bypass,
                                    Jalandhar (Punjab), India - 144027
                                </p>
                            </div>
                            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <a class="text-indigo-500 leading-relaxed">jobsujjawal100@gmail.com</a>
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <p class="leading-relaxed">+918890881464</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                            Feedback
                        </h2>
                        <p class="leading-relaxed mb-5 text-gray-600">
                            Waiting for your response.
                        </p>
                        <div class="relative mb-4">
                            <label for="name" class="leading-7 text-sm text-gray-600">
                                Name
                            </label>
                            <input
                                value={data.name}
                                onChange={onchange}
                                type="text"
                                id="name"
                                name="name"
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                value={data.email}
                                onChange={onchange}
                                type="email"
                                id="email"
                                name="email"
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div class="relative mb-4">
                            <label for="message" class="leading-7 text-sm text-gray-600">
                                Message
                            </label>
                            <textarea
                                value={data.message}
                                onChange={onchange}
                                id="message"
                                name="message"
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button onClick={submit} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Submit
                        </button>
                        {/* <p class="text-xs text-gray-500 mt-3">
                            Chicharrones blog helvetica normcore iceland tousled brook viral
                            artisan.
                        </p> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
