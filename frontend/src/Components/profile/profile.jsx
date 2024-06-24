import axios from "axios"
import { useEffect, useState } from "react"

import {Link}from "react-router-dom"
export default function Profile(){
   const[userBlog,setUserBlog]=useState([])
   const [userInfo,setUserInfo]=useState({})
    useEffect(()=>{
   axios.get("/api/user")
   .then((response)=>{
    //console.log(response.data.userBlogs)
    setUserBlog(response.data.userBlogs)
         setUserInfo(response.data.userInfo[0])
   })
   .catch((e)=>console.log(e));
    })
    return(
      <>
        <div className=" grid gap-4 lg:grid-cols-12 ">
            <div className=" lg:col-span-2 hidden lg:block text-white ml-6 font-serif font-medium tracking-tight my-4 border-r-2">
            <h1 className=" fixed text-3xl font-serif text-white pt-6 mb-9 font-bold shadow-md tracking-tight  pl-4 ">BLOGS</h1>
            <div className="mt-24 ml-2 text-xl fixed ">
            <ul>
                <li className="mb-8">
                    
                    <Link to="/">
                    <div className="inline-flex space-x-7  hover:bg-slate-700 p-2 hover:rounded-md w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40px">
                        <path fill="white" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                    <span className="pt-4" >Home</span>
                    </div>                   
                    </Link>
                    
                </li>
                <li className="mb-8">
                    
                    <Link to="/add-blogs">
                    <div className="inline-flex space-x-7  hover:bg-slate-700 p-2 hover:rounded-md w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  width="35px"><path fill="white" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    <span className="pt-4" >Add Blogs</span>
                    </div>                   
                    </Link>
                    
                </li>
                <li className="mb-8">
                    
                    <Link to="/add-blogs">
                    <div className="inline-flex space-x-7  hover:bg-slate-700 p-2 hover:rounded-md w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="40px">
                    <path fill="white" d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/></svg>
                    <span className="pt-4" >Saved</span>
                    </div>                   
                    </Link>
                    
                </li>
            </ul>
            </div>
            <div className="fixed bottom-0 ml-7 ">
            <ul>
                <li className="mb-3">
                    
                    <Link to="/">
                    <div className="inline-flex space-x-7 p-2 hover:underline w-full">
                    <span className="pt-4" >About</span>
                    </div>                   
                    </Link>
                    
                </li>
                <li className="mb-3">
                    
                    <Link to="/">
                    <div className="inline-flex space-x-7 hover:underline p-2 w-full">
                    <span className="pt-4" >Help</span>
                    </div>                   
                    </Link>
                    
                </li>
                <li className="mb-6">
                    
                    <Link to="/">
                    <div className="inline-flex hover:underline space-x-7 p-2 w-full">
                    <span className="pt-4" >Github</span>
                    </div>                   
                    </Link>
                    
                </li>
            </ul>
            </div>
            </div>
            <div className="lg:col-span-1 "></div>
            <div className=" lg:col-span-8 ">
                <div className=" space-y-6  ">
                    <h1 className="text-center text-white pt-5 font-serif font-medium text-3xl">Profile</h1>
                    <div className="border border-white rounded-md text-white my-5 mx-4 pb-5 pt-5   ">
          
                        <img src={userInfo.profileImageUrl} alt="profile image" className=" ml-20 inline-flex sm:w-24 lg:w-72  rounded-full    " /> {userInfo.FullName}
                    </div>
                    <div className="grid sm:grid-cols-3 px-5 font-serif ">
           
                    {userBlog.map((blog)=>(
                        <Link to={blog._id}>
                            <div key={blog._id} className=" bg-gray-100 shadow-md m-6 h-auto p-8 space-y-3 shadow-gray-600 hover:rounded-none  rounded-lg hover:-translate-y-1 hover:scale-110 duration-300   ">
                   
                                <img src={blog.coverImageUrl} alt="coverImage"   className="m-auto w-full h-auto sm:auto lg:w-80"/>
                                <h3>{blog.Title}</h3>
                            </div>
                        </Link>
                  ))}
          
                    </div>
                </div>
            </div>
        </div>
      
         </>
            
    )
}