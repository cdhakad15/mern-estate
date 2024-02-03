import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react';
import OAuth from '../components/OAuth';
import {useSelector} from "react-redux";


const Profile = () => {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const {currentUser} = useSelector(state=>state.user)

  const navigate= useNavigate();
  const handleChange= (e)=>{
       setFormData(
         {
          ...formData,
          [e.target.id]:e.target.value,
        });
  };

  const handleSubmit = async (e)=>{   
    e.preventDefault();

    try{
      setLoading(true);
     const res = await fetch("api/auth/signup",
     {
      method:"POST",
      "headers":{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(formData),
     });

     const data = await res.json();
     if(data.success === false){
      setError(data.message);
      setLoading(false);
      return;
     }

     setLoading(false);
     navigate("/sign-in");
    
    }
    catch(error){
      setLoading(false);
      setError(error.message);
    }

    
     };
   

   
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Profile</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 ' >
      <img src={currentUser.avatar} alt="" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'/>
        <input type="name" placeholder='Username' className='border p-3 rounded-lg ' id='username'  onChange={handleChange}  />
        <input type="email" placeholder='Email' className='border p-3 rounded-lg ' id='email'  onChange={handleChange}/>
        <input type="password" placeholder='Password' className='border p-3 rounded-lg ' id='password' onChange={handleChange} />
         <button  disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
         {loading ? "Loading..." : "Update"}
         </button> 

         
      </form>
       
       <div className='flex gap-2 mt-6  justify-between '>
        <span className='text-red-700 cursor-pointer'>Delete Account </span>
        <Link to="/sign-in">
         <span className='text-red-700 cursor-pointer'>Sign out</span>
        </Link>
       </div>
    {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default Profile