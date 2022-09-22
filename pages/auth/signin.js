import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Router from 'next/router';

import { signIn, useSession } from 'next-auth/react';

const Signin = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  const { status } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      callbackUrl: '/dashboard',
    })
  }

  useEffect(() => {
    if (status === "authenticated") Router.replace("/dashboard");
  }, [status]);

  return (
    <div className='signin-container flex relative'>
      <div className="form-container">
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <h3 className='text-3xl mb-8 text-center'>Login</h3>
            <input 
              className='mb-6 px-3 rounded-lg' 
              type="email" 
              placeholder='your email...' 
              value={userInfo.email}
              onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
            />
            <input 
              className='mb-6 px-3 rounded-lg' 
              type="password" 
              placeholder='password...' 
              value={userInfo.password}
              onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
            />
            <button type='submit' className='bg-[#9F34E1] rounded-xl'>Login</button>
        </form>
        <Link href="/">
          <a className='text-gray-500 mt-8 text-sm'>Back to landingpage</a>
        </Link>
      </div>
    </div>
  )
}

export default Signin