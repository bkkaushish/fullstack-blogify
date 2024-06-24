import axios from "axios"
import { useState } from "react"


export default function AddBlogs(){
    const [coverImage,setCoverImage]=useState('')
    const [Title,setTitle]=useState('')
    const [Content,setContent]=useState('')
const submit=()=>{
    //formData is used to send image because we used to add multer on server side
    const formData= new FormData();
    formData.append("coverImage",coverImage);
    formData.append("Title",Title);
    formData.append("Content",Content);

    axios.post("/api/addBlog",formData,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
    .then((response)=>{
        console.log(response.data);
        window.location.href="/"
    })
    .catch((e)=>console.log(e));
    setContent('');
    setTitle('');
    setCoverImage(null);
}
    return (
        <>
        <form onSubmit={submit} encType="multipart/form-data" className="bg-white max-w-6xl m-auto mb-14 rounded-md">
            <div className="px-20 pb-20 font-serif space-x-3 space-y-7">
            <div className="pt-10 pb-6 ">
                <label for="image" className="before:content-['*'] before:ml-0.5 before:text-red-500" >Cover Image: </label>
                <input type="file" //accept="image/*"
                id="image"
                onChange={(e)=>setCoverImage(e.target.files[0]) }
                //setImage(e.target.files[0]) is typically used to
                // update the state with the first file selected by the user from an input element of type file
                className="rounded-md border-0 text-black bg-slate-200 px-10 py-2 shadow-sm ring-1 ring-inset ring-white/10
                focus:ring-2 required:ring-4 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 mr-3" />
            </div>
            <div>
                <label for="title" className="before:content-['*'] before:ml-0.5 before:text-red-500" >Title:</label>
                <input type="text"value={Title} 
                id="title"
                onChange={(e)=>setTitle(e.target.value)}
                className="rounded-md border-0 text-black bg-slate-200 px-10 py-2 shadow-sm ring-1 ring-inset ring-white/10
                focus:ring-2 required:ring-4 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 ml-6"  />
            </div>
            <div>
                <label for="content" className="before:content-['*'] before:ml-0.5 before:text-red-500 ">Content:</label>
                <textarea id="content" value={Content}
                onChange={(e)=>setContent(e.target.value)} 
                className="w-full  rounded-md border-0 text-black bg-slate-200 px-10 py-2 shadow-sm ring-1 ring-inset ring-white/10
                focus:ring-2 required:ring-4 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 ml-6 " />
            </div>
            <button type="submit" className=" flex mt-10 m-auto mb-3  px-7 bg-gray-900 p-3 text-white rounded-md hover:bg-blue-600">submit</button>
            </div>
        </form>
        </>
    )
}