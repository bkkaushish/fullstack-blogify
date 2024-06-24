
import axios from "axios"
import { useState } from "react"

export default function Signup(){
    const [FullName,setFullName]=useState('');
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const [ConfirmPassword,setConfirmPassword]=useState('');

const submit=()=>{
axios.post("/api/signup",{FullName,Email,Password})
.then((response)=>{
    
    if (response.data.users) {
        window.location.href="/signin"
    } else {
        console.log(response.data)
        
    }
   
}).catch((e)=>console.log(e));
setFullName('')
setEmail("")
setPassword("")
setConfirmPassword('')
}
    return(
        <>
        
        <h1 className=" text-3xl font-serif text-white pt-6 mb-7 font-bold shadow-md tracking-tight relative pl-4 ">BLOGS</h1>
        <div className=" bg-white max-w-2xl m-auto  my-40 pb-40 text-center rounded-lg relative">
             <h1 className=" text-3xl font-serif text-gray-900 pt-6 mb-7 font-bold shadow-md tracking-tight ">SIGN-UP</h1>
                <div className="font-medium text-gray-900 font-serif text-xl  mr-10" >
                <div className="mt-10">
                         <label for="name" className="before:content-['*'] before:ml-0.5 before:text-red-500">FULLNAME: </label>
                         <input type="text" id="name" value={FullName}
        onChange={(e)=>setFullName(e.target.value)}
        required
        className="rounded-md border-0 bg-slate-200 px-10 py-2 shadow-sm ring-1 ring-inset ring-white/10
                focus:ring-2 required:ring-4 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
                     </div>
                     <div className="m-auto mt-5">
                         <label for="email" className="before:content-['*'] before:ml-0.5 before:text-red-500">EMAIL: </label>
                         <input type="text" id="email"
         value={Email}
         required
         onChange={(e)=>setEmail(e.target.value)}
         className=" peer-invalid:ring-2 peer-invalid:ring-red-400 rounded-md border-0 ml-12 bg-slate-200 px-10 py-2 shadow-sm ring-1 ring-inset ring-white/10
                focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6
                "/>
                     </div>
                     <div className="mr-6 mt-5">
                         <label for="pass" className="before:content-['*'] before:ml-0.5 before:text-red-500">CREATE PASSWORD: </label>
                         <input type="password" id="pass"
         value={Password}
         onChange={(e)=>setPassword(e.target.value)} 
         required
         className="rounded-md border-0 mr-14 bg-slate-200 px-10 py-2 shadow-sm ring-1 ring-inset ring-white/10
                focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
                     </div>
                     <div className="mr-10 mt-5">
                          <label for="con-p" className="before:content-['*'] before:ml-0.5 before:text-red-500">CONFIRM PASSWORD:  </label>
                          <input type="password" id="con-p"
        value={ConfirmPassword}
        required
        onChange={(e)=>setConfirmPassword(e.target.value)}
        className="rounded-md border-0 mr-14 bg-slate-200 px-10 py-2 shadow-sm ring-1 ring-inset ring-white/10
                focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                     </div>
        <button onClick={submit} className=" flex mt-10 m-auto mb-3  px-7 bg-gray-900 p-3 text-white rounded-md hover:bg-blue-600">submit
        </button>
                 </div>
         </div>
        </>
    )
}