import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function Blog(){
const {id}=useParams()//for getting url info;
const [blog,setBlog]=useState({})
const [CreatedBy,setCreatedBy]=useState({})
const [comments,setComments]=useState([])
const [user,setUser]=useState({})

const [comment,setComment]=useState("") 
const submit=(e)=>{
  e.preventDefault()
 axios.post(`/api/comment/${id}` , {comment})
 .catch((e)=>console.log(e));

 setComment("");
 window.location.href=`/${id}`;

}
useEffect(()=>{
    axios.get(`/api/${id}`)
    .then((response)=>{
      // console.log(response.data.users)
     setBlog(response.data.blogs)
     setCreatedBy(response.data.blogs.CreatedBy)
   setComments(response.data.comments)
     setUser(response.data.users)
    })
    .catch((e)=>console.log(e));
});
    return user? (
        <>
        <h1 className="text-white text-left font-bold text-3xl font-serif ml-14  mt-5 mb-11 uppercase">{blog.Title}</h1>
           
        <div className="bg-white space-y-8  w-full py-5 font-serif font-medium text-xl m-auto flex-wrap shadow-md shadow-transparent  ">
        
       
        <img src={blog.coverImageUrl} alt="coverImage " width="500px" className=" m-auto py-10 px-10 "/>
        <p className=" flex-wrap px-6  font-serif text-left first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-black
  first-letter:mr-3 first-letter:float-left  w-full bg-white h-fit">{blog.Content}</p>
     
     
     </div>
          <div className="text-white text-left font-bold  max-w-screen-2xl text-xl mt-4">
     <span >
        <img src={CreatedBy.profileImageUrl} alt="profile image" className=" ml-11 inline-flex mr-4 rounded-full  " width="50px"/>{CreatedBy.FullName}
         
        </span>
     
     </div>

     <div className="text-white ml-11 mt-10 font-bold text-xl ">
    <h1 className="mb-5 underline">Comments: {comments.length}</h1>
    
        <div className="mb-10">
            <input  type="text" value={comment} onChange={(e)=>setComment(e.target.value)}
            className="text-black  rounded-md border-0 bg-white px-10 py-2 shadow-sm ring-1 ring-inset ring-white/10
            focus:ring-2 first-letter:uppercase focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6  mr-4"/>
            <button onClick={submit}
            className="   bg-gray-600 p-2 text-white rounded-md hover:bg-blue-600">submit</button>
        </div>

        <div className=" divide-y-2 space-y-4 tracking-tight mb-5 first-letter:uppercase ">
           {comments.map((com)=>(
             <div key={com.id} className=" space-y-3 pt-3">
               <img src={com.CreatedBy.profileImageUrl} width="50px" className=" rounded-full inline-flex"/> {com.CreatedBy.FullName}
               <pre className="ml-6  ">{com.comment}</pre>
             </div>
           ))}
</div>
        
    
     </div>
    
        </>
    ):(
      <>
      <h1 className="text-white text-left font-bold text-3xl font-serif ml-14  mt-5 mb-11 uppercase">{blog.Title}</h1>
           
           <div className="bg-white space-y-8  w-full py-5  font-serif font-medium text-xl m-auto flex-wrap shadow-md shadow-transparent  ">
           
          
           <img src={blog.coverImageUrl} alt="coverImage " width="500px" className=" m-auto py-10 px-10 "/>
           <p className=" flex-wrap px-6 font-serif text-left first-line:uppercase first-line:tracking-widest
     first-letter:text-7xl first-letter:font-bold first-letter:text-black
     first-letter:mr-3 first-letter:float-left  w-full bg-white h-fit">{blog.Content}</p>
        
        
        </div>
             <div className="text-white text-left font-bold  max-w-screen-2xl text-xl mt-4">
        <span >
           <img src={CreatedBy.profileImageUrl} alt="profile image" className=" ml-11 inline-flex mr-4 rounded-full  " width="50px"/>{CreatedBy.FullName}
            
           </span>
        
        </div>
   
        <div className="text-white ml-11 mt-10 font-bold text-xl ">
       <h1 className="mb-5 underline">Comments: {comments.length}</h1>
       
          
   
           <div className=" divide-y-2 space-y-4 tracking-tight mb-5 first-letter:uppercase ">
              {comments.map((com)=>(
                <div key={com.id} className=" space-y-3 pt-3">
                  <img src={com.CreatedBy.profileImageUrl} width="50px" className=" rounded-full inline-flex"/> {com.CreatedBy.FullName}
                  <pre className="ml-6  ">{com.comment}</pre>
                </div>
              ))}
   </div>
           
       
        </div>
       
      </>
    )
}