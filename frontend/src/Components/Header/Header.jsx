import{Link,NavLink} from 'react-router-dom'

import { useEffect, useState } from 'react'

import axios from 'axios'

export default function Header(){
const [user,setUser]=useState({})
const [userInfo,setUserINfo]=useState([])
const logout=()=>{
  axios.get("/api/logout")
  .then((response)=>console.log(response.data))
  .catch((e)=>console.log(e));
}


    useEffect(()=>{
        axios.get("/api/user")
        .then((response)=>{
          //console.log(response.data.userInfo)
          setUser(response.data.users)
          setUserINfo(response.data.userInfo[0])
         
        })
        .catch((e)=>console.log(e))
       
    },[logout])

    return !user ? (
        <>
       
              <header className='h-20'>
              
              <nav className=' text-right m-10 '>
                  
                  <div   >
                  <Link to="/signin" className="m-4 font-medium border p-4 border-black rounded-md bg-white hover:bg-blue-600 hover:text-white relative z-20">
                     SIGNIN
                  </Link>
                  <Link to="/signup" className="m-4 font-medium border p-4 rounded-md text-white hover:bg-white hover:text-black relative z-20">
                      SIGNUP
                  </Link>
                  
                  </div>
                  
              </nav>        
          </header>
          </>
               ):(
                
                <header>
                
                 <div className=' py-5 px-5 '>
                 <Link to="/profile">  
                    <img src={userInfo.profileImageUrl} alt="PI" width="50px" className=' rounded-full float-end '/> 
                    </Link> 
                </div>
               
            <nav id='nav'>
                <div className=' text-white text-center  m-10 font-medium font-serif text-xl '>
                   
                    <div className='space-x-14  inline-flex ' >
                <NavLink to="/" className=" hover:underline relative z-20">
                   HOME
                </NavLink>
                <NavLink to="/add-blogs" className="hover:underline relative z-20">
                    ADD-BLOG
                </NavLink>
                <NavLink to="/" onClick={logout} className=" hover:underline relative z-20">
                    LOGOUT
                </NavLink>
               
               
                </div>
               
                </div>
            </nav>  
            
            </header>
            
    )
}