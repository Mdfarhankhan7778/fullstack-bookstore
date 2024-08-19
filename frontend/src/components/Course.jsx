import React, { useEffect, useState } from 'react'
// import list from "../../public/list.json"
import CArds from './CArds'
import axios from 'axios'

import { Link } from 'react-router-dom'

function Course() {
    const [book,setBook] = useState([]);
    useEffect(()=>{
        const getBook=async()=>{
            try{
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data);

            } catch (error){
                console.log(error);
                
            }
        }
        getBook();

    },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>
<div className='mt-28 items-center justify-center text-center'>
    <h1 className='text-2xl md:text-4xl'>
        We're delighted to have you{" "}<span className='text-pink-500'>Here! :</span>
    </h1>
    <p className='mt-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eveniet sed corporis fugiat porro. Veniam magnam velit rem corrupti ratione quod libero aliquid!
         Ipsum voluptate quisquam nostrum! Aperiam, beatae distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, autem officiis? Quaerat aliquam laboriosam, dignissimos aperiam dolorum eveniet odio saepe officia unde? 
         Laboriosam similique, sint illo tempore necessitatibus perspiciatis dolorum.</p>
        <Link to="/">
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-30'>Back</button>
        </Link> 

</div>
<div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
    
    {book.map((item)=>(
        <CArds key={item.id} item={item} />

    ))}
</div>
    </div>
    </>
  )
}

export default Course
