const express= require("express");
const routers= express.Router();

const user=require("../model/userPro");

const blog= require("../model/blog");

routers.get("/api",async (req,res)=>{
  const allBlogs= await blog.find({});
 
  
 //   res.render("home"||"/",{
 //       user: req.user,
 //       blog: allBlogs,
//    });

return res.json({allBlogs})
});


//routers.get("/signup",(req,res)=>{
   // return res.render("signup");
//});
//routers.get("/api/signin",(req,res)=>{
    //return res.render("signin");
//});

routers.post("/api/signup",async (req,res)=>{
    try {
        const {FullName,Email,Password}= req.body;
           const users= await user.create({
                FullName,
                Email,
                Password,
               });
               return res.json({users});
             
    } catch (error) {
        return res.json({message:"need all fields to be filled!!!"})
    }
  
});

routers.post("/api/signin",async (req,res)=>{
    const {Email,Password}= req.body;
try {
    
     //use vertual function made by us in model;
   const token= await user.MatchPasswordAndCreateToken(Email,Password);
   
   res.cookie("token",token,{ httpOnly: true })
    return res.json({successful:"vaild user"})
     
} catch (error) {
    
    return res.json({invalid: "Invalid Email or Password"})
}
   
 });
routers.get("/api/logout",(req,res)=>{
    const clear =res.clearCookie("token");

    if(!clear) return res.json({message:"unsuccessful  attempt "})
    return res.json({message: "logout successfully"})
});

routers.get("/api/user",async(req,res)=>{
    const userInfo= await user.find({_id: req.user});
  const userBlogs= await blog.find({CreatedBy:req.user});
    const users= req.user
  return res.json({users, userInfo,userBlogs});
});
 module.exports= routers;