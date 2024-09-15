import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Auth/Action';

const Login = () => {

    const dispatch = useDispatch();


    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = (data) => {
        dispatch(login(data))
        console.log("login project data ", data);
    }


  return (
    <div className='space-y-5'>
        <h1>Login</h1>
        <Form {...form}>
            <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Enter email..." {...field} type='text' className='border w-full border-gray-700    px-5 py-5' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Enter password..." {...field} type='password' className='border w-full border-gray-700    px-5 py-5' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type='submit' className='w-full my-5'>
                    Log In
                </Button>
            </form>
        </Form>  
    </div>
  )
}

export default Login
