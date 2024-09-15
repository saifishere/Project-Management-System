import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createComment } from '../Redux/Comment/Action';

const CreateCommentForm = ({issueId}) => {

    const dispatch = useDispatch()

    const form = useForm({
        defaultValues: {
            content: "",
        }
    })

    const onSubmit = (data) => {
        dispatch(createComment({content: data.content, issueId}))
        console.log("create comment ", data);
    }

  return (
    <div>
        <Form {...form}>
            <form className='flex gap-2' onSubmit={form.handleSubmit(onSubmit)}>
                
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <div className='flex gap-2'>
                                <div>
                                    <Avatar>
                                        <AvatarFallback>
                                            S
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <FormControl>
                                    <Input placeholder="Add a comment..." {...field} type='text' className='w-[20rem]' />
                                </FormControl>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />
                <Button type='submit'>
                    Save
                </Button>
            </form>
        </Form>  
    </div>
  )
}

export default CreateCommentForm
