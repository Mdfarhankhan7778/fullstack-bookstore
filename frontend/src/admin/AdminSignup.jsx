
import React from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

// iZLmqVTTXtfFUSlA
function AdminSignup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm();
  
  const onsubmit = async (data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    };
    await axios
    .post("http://localhost:4001/admin/adminsignup",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success("signup Successfully");
        navigate(from,{replace:true});
      }

    })
    .catch((err)=>{
      if(err.response){
      console.log(err);

      toast.error("Error:" + err.response.data.message);
    }
    });
}
//     data = {isaAdmin:true}
//     if(data){
//             toast.success("signup Successfully");
//             navigate(from,{replace:true});
//   }}
  return (
    <>
     <div className=" flex h-screen items-center justify-center ">

     <div className="w-[600px] p-5 dark:bg-slate-900 dark:text-white rounded-md">
     <div className="modal-box dark:bg-slate-900 dark:text-white ">
    <form onSubmit={handleSubmit(onsubmit)} method="dialog">
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">SignUp</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input type="text" placeholder='Enter your Name' className='w-80 px-3 py-1 border rounded-md outline-none '
         {...register("fullname", { required: true })} />
                  <br/>
        {errors.fullname && <span className='text-pink-400 text-sm'>Name is required</span>}
        

    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type="email" placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none '
         {...register("email", { required: true })} />
         <br/>
        {errors.email && <span className='text-pink-400 text-sm'>Email is required</span>}

    </div>
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type="password" placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md outline-none ' 
         {...register("password", { required: true })}/>
                  <br/>
        {errors.password && <span className='text-pink-400 text-sm'>Password is required</span>}

    </div>
    <div className='mt-4 flex justify-around'>
        <button className='bg-red-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>SignUp</button>
        <p className='text-xl'>Have account?{" "} <button onClick={()=>document.getElementById('my_modal').showModal()} className='underline text-blue-500 courser-pointer'>Login</button>{" "}
        <AdminLogin/>
        </p>

    </div>
    </form>
  </div>
      </div>
      </div>
  
    </>
   
  )
}
export default AdminSignup

