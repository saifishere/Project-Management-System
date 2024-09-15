import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createIssue } from '../Redux/Issue/Action';
import { useParams } from 'react-router-dom';

const CreateIssueForm = ({status}) => {

    const {id} = useParams()
    const dispatch = useDispatch();

    const form = useForm({
        defaultValues: {
            issueName: "",
            description: ""
        }
    })

    const onSubmit = (data) => {
        data.projectId = id;
        dispatch(createIssue({title: data.issueName, description: data.description, projectId: id, status: status}))
        console.log("create project issue ", data);
    }


  return (
    <div>
        <Form {...form}>
            <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                
                <FormField
                    control={form.control}
                    name="issueName"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Enter issue..." {...field} type='text' className='border w-full border-gray-700    px-5 py-5' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Enter description..." {...field} type='text' className='border w-full border-gray-700 px-5 py-5' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <DialogClose>
                  <Button type='submit' className='w-full my-5'>
                      Create Issue
                  </Button>
                </DialogClose>

            </form>
        </Form>  
    </div>
  )
}

export default CreateIssueForm
