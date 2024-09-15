import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup';
import { Button } from '@/components/ui/button';
import './Auth.css'

const Auth = () => {

    const[active, setActive] = useState(false);

  return (
    <div className='loginContainer'>
      <div className='box h-[30rem] w-[25rem]'>
        <div className='minContainer login'>
            <div className='loginBox w-full px-10 space-y-5'>
                {active ? <Signup/> : <Login/>}
                <div>
                    {active ? <span>Already have an account ?</span>: <span>Create Account</span>}
                    <Button variant='ghost' onClick={()=>setActive(!active)}>{active ? "login": "signup"}</Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
