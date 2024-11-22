import React from 'react'
import Bgsign from '../../../assets/Background.png'
import Innerimage from '../../../assets/Image.png'

const Signin = () => {
  return (
    <div className='h-screen bg-cover bg-center flex items-center justify-center font-poppins' style={{backgroundImage : `url(${Bgsign})`} }>
      <div className='w-2/4 h-3/4   flex'>
        <div className='w-2/4 h-full bg-fuchsia-300 '>
            <img src={Innerimage} alt="" className=' w-full h-full'/>
        </div>
        <form className='bg-white w-full rounded-tr-2xl rounded-br-2xl flex items-center justify-center flex-col gap-2 text-gray-400 text-sm'>
          <div className='mb-5'>
            <h1 className='text-black text-3xl'>Create an account</h1>
          </div>
          <div className='flex flex-col'>
            <label className='ml-2'>Username</label>
            <input type="text" placeholder='' className='border-2 w-96 h-10 rounded-xl'/>
          </div>
          <div className='flex flex-col'>
            <label className='ml-2'>Email</label>
            <input type="email" placeholder='' className='border-2 w-96 h-10 rounded-xl'/>
          </div>
          <div className='flex flex-col'>
            <label className='ml-2'>Password</label>
            <input type="password" placeholder='' className='border-2 w-96 h-10 rounded-xl'/>
          </div>
          <div className='flex flex-col'>
            <label className='ml-2'>Confirm Password</label>
            <input type="password" placeholder='' className='border-2 w-96 h-10 rounded-xl'/>
          </div>
          <div  className='flex flex-col justify-center items-center gap-1'>
            <button className='border-2 w-96 h-10 rounded-3xl mt-2 bg-slate-300 hover:bg-slate-400 text-white'>Create an account</button>
            <h1 >Already have an account? <span>Sign in</span> </h1>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin
