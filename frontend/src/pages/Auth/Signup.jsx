import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { register } from '../Redux/Auth/Action';

const Signup = () => {

    const dispatch = useDispatch();

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
            fullName: "",
        }
    })

    const onSubmit = (data) => {
        dispatch(register(data))
        console.log("create project data ", data);
    }


  return (
    <div className='space-y-5'>
        <h1>Register</h1>
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
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Enter FullName..." {...field} type='text' className='border w-full border-gray-700    px-5 py-5' />
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
                    Sign Up
                </Button>
            </form>
        </Form>  
    </div>
  )
}

export default Signup
