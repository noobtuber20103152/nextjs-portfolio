import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
    const [data, setdata] = useState({ name: "", email: "", message: "" })
    const onchange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }
    const submit = async () => {
        console.log(data);
        let resdata = await fetch("/api/upload/uploadform", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        resdata = await resdata.json();
        if (resdata.success === "success") {
            setdata({ name: "", email: "", message: "" })
            toast.success("Message sent successfully", {
                position: toast.POSITION.TOP_LEFT
            });
        }

        else {
            toast.warn("Some internal error occured!", {
                position: toast.POSITION.TOP_LEFT
            });
        }
        console.log(resdata)
    }
    return <>
        <ToastContainer />
        <div className="bg-white text-gray-100 px-8 py-12">
            <div className="text-center w-full">

            </div>
            <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                        <div className="text-gray-700 mt-8">
                            {/* Hate forms? Send us an <span className="underline">email</span> instead. */}
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <img height={100} width={200} src="https://c.tenor.com/SSkBJrNVYrMAAAAi/tkthao219-bubududu.gif" alt="" />
                    </div>
                </div>
                <div className="">
                    <div>
                        <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input onChange={onchange} name="name" className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input onChange={onchange} name="email" className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea onChange={onchange} name="message" className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="mt-8">
                        <button onClick={submit}
                            className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Contact