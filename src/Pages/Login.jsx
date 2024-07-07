import React from 'react'
import { useState } from 'react';
import logo from '../assets/Images/logo1.png';
import google from '../assets/Images/googlecuy.png';
import backgroundImage from '../assets/Images/bg-login.jpeg';


async function loginUser(credentials) {
  return fetch('https://www.mecallapi.com/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function Signin() {
  const classes = useStyles();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
    });
    if ('accessToken' in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = "/home";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  } 

}

 function Login(){

 
  

  return (
  
    // <div className='bg-[url(/src/assets/Images/bg-login.jpeg)] bg-cover bg-center h-screen'>
    //   <form action="/home">
    //     <div className="flex flex-col items-center justify-center h-screen">
    //     <img src={logo} alt="Chill" />
    //     <div>
          
    //       <input type="text" />
    //       <label htmlFor="username"></label>
    //     </div>
    //     <div>
    //       <input type="password" />
    //       <label htmlFor="password"></label>
    //     </div>

    //     </div>
       
       
    // {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">Login</button> */}
    // </form>
    // </div>

    <div className='text-white h-[100vh] flex items-center justify-center bg-cover bg-center h-screen'  style={{backgroundImage: 'url(/src/assets/Images/bg-login.jpeg)'}}> 
    
      <div className='bg-slate-950 border border-slate-600 rounded-md p-10 shadow-lg backdrop-flter backdrop-blur-lg bg-opacity-5 relative'>
      <div className='flex justify-center'> <img src={logo} alt="Chill" /></div>
     
        <h1 className='text-2xl font-bold text-center'> Login</h1>
        <h1 className='py-2 text-sm font-bold text-center '>Welcome back!👋</h1>
        <form action=""></form>
        <div className='relative my-4'>
          <input type="text" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' />
          <label htmlFor="" className='absolute text-md duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>username</label>
        </div>
        <div className='relative my-4'>
          <input type="password" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' />
          <label htmlFor="" className='absolute text-md duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>password</label>
        </div>
        <div className='text-sm p-1 mb-2'> 
          <p> Don't have an account? <a href="/register">Sign up</a></p>
        </div>
        <div className='text-sm p-1 mb-2'>
         <a href="#!">Forgot password?</a>
        </div>
        <button type='submit' className='w-full  text-[15px]  bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login</button>
      {/* <hr className='p-2 border-gray-600'/> */}
      <div className="p-2 divider">OR</div>
      <div className=''>
        <button type='submit' className='inline-flex justify-center gap-2 w-full mb-4 text-[15px]  outline outline-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' > <img src={google} alt="google" />Sign in with Google</button>
        </div>
      </div>
      
    </div>
  )
}

export default Login