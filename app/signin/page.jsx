'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const Login = () => {
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isSignUp ? 'Signing Up...' : 'Signing In...', formData);
    };
  return (
    <div className='py-[53px] flex justify-between items-center  w-full h-[100vh]'>
        <div className='flex flex-col items-center w-[335px] mr-[479px] ml-[184px] justify-center'>
            <div className='w-full'>
                {/* upper div  */}
                <div className='flex justify-center '>
                    <img src="/logo.png" alt=""  />
                </div>

                {/* center div  */}
                <div className='mt-[40px]'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    {isSignUp && (
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='Full Name' 
                            value={formData.name} 
                            onChange={handleChange} 
                            className='p-3 border rounded-lg w-full'
                        />
                    )}
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Email' 
                        value={formData.email} 
                        onChange={handleChange} 
                        className='p-3 border rounded-lg w-full'
                    />
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Password' 
                        value={formData.password} 
                        onChange={handleChange} 
                        className='p-3 border rounded-lg w-full'
                    />
                    <button type='submit' className='bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600'>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>
                <p className='text-center text-gray-600 mt-4'>
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                    <span onClick={() => setIsSignUp(!isSignUp)} className='text-blue-500 cursor-pointer'>
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                    </span>
                </p>


                </div>

                {/* lower div  */}
                <div className='w-full mt-[48px] '>
                   
                       <div className='flex items-center justify-center py-[16px] px-[12px] gap-[15px] cursor-pointer border rounded'  onClick={() => router.push("/login")} >
                       <img src="/googlelogo.png" alt="" />
                       <p className='font-[700] text-[16px] xl:text-[20px] leading-[27.32px] text-center text-primary font-[Manrope]'>Continue with Google</p>
                       </div>
                  
                </div>
               
            </div>
        </div>
        <div className='w-[527px] h-full  bg-contain bg-no-repeat bg-[url("/loginImg.png")]'>
            {/* <img src="/loginImg.png" alt="" className='' /> */}
        </div>
    </div>
  )
}

export default Login