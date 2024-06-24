import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"




export default function Home(){
const [blogs,setBlogs]=useState([])
///variable are not applicable to store it;
//because we required function

    useEffect(()=>{
        axios.get("/api")
        .then((response)=>{
            //console.log(response.data)
            setBlogs(response.data.allBlogs);
           
        })
        .catch((e)=>console.log(e))
})

    return(

        <div className=" bg-gray-950 w-full  ">
            
            <div className="font-bold space-y-10 font-serif text-xl text-center relative z-20 ">
          <h1 className="text-4xl text-white font-serif animate-pulse">BLOGS</h1>
          <div className="grid lg:grid-cols-3 px-5">
           
            {blogs.map((blog)=>(
                <Link to={blog._id}>
                <div key={blog._id} className=" bg-gray-100 shadow-md m-6 h-80 p-8 space-y-3 shadow-gray-600 hover:rounded-none  rounded-lg hover:-translate-y-1 hover:scale-110 duration-300   ">
                    
                <img src={blog.coverImageUrl} alt="coverImage"width="200px" height="100px" className="m-auto"/>
                <h3 >{blog.Title}</h3>
                </div>
                </Link>
            ))}
           
            </div>
            </div>
          
        </div>
    )
}