import { useState } from "react"

import axios from 'axios'


export default function SignIn(){
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('')
    const [invalid,setInvalid]= useState("")
const submit=()=>{
    axios.post("/api/signin",{Email,Password})
    .then(response => {

        if (response.data.successful) {
            window.location.href="/";///after success,,, redirect to home page;
            // Handle success here, e.g., redirect or update UI
        } else {
            console.log(response.data);
            setInvalid(response.data.invalid)
        }     
    })
    .catch((error)=>console.log(error));

    setEmail("");
    setPassword('')
}
const handle_submit=()=>{
    window.location.href="/signup"
}
    return(
        <div>
        
        <div className=" z-20">
           
        <h1 className=" text-3xl font-serif text-white pl-4 pt-6 mb-7 font-bold shadow-md tracking-tight relative">BLOGS</h1>
        <div className=" bg-white max-w-2xl m-auto  my-40 pb-40 text-center rounded-lg relative">
            <h1 className=" text-3xl font-serif text-gray-900 pt-6 mb-7 font-bold shadow-md tracking-tight ">SIGN-IN</h1>
            <div className="font-medium text-gray-900 font-serif text-xl  mr-10" >
             <p  className=" text-red-400 mx-20 pt-0.5 h-8 bg-red-200 ring-1 ring-red-400 rounded-md shadow-md">{invalid}</p>

            <div className="mt-10">
               <label for="email"className=" before:content-['*'] before:ml-0.5 before:text-red-500"  >Email:  </label>
                <input type="email"
                id="email"
                value={Email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                className=" rounded-md border-0 bg-slate-200 px-10 py-2 shadow-sm ring-1 ring-inset ring-white/10
                focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 "
                />
                </div>
                <div className="mr-7">
                <label for="password" className=" before:content-['*'] before:ml-0.5 before:text-red-500">Password: </label>
                <input id="password" type="password" value={Password}
                onChange={(e)=>setPassword(e.target.value)}
                className="rounded-md border-0 bg-slate-200 px-10 py-2 shadow-sm ring-1 ring-inset ring-white/10
                focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 mt-5 "/>
                </div>

                <button onClick={submit} className=" flex mt-10 m-auto mb-3  px-7 bg-gray-900 p-3 text-white rounded-md hover:bg-blue-600">log-In</button>
                <p>or</p>
                <button onClick={handle_submit} className="mt-3 m-auto px-7 bg-gray-900 p-3 text-white rounded-md hover:bg-blue-600">Sign-up</button>
            </div>
        </div>
        </div>
        </div>
    )
}