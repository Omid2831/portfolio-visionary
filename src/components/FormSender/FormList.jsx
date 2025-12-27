import React from 'react'
import { Form } from '../ui/form'
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import '../../styles/form-sender.css'
import { Input } from '../ui/input';
import { Button } from '../ui/button';

// Zod validation model for the form fields
const formSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters long'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters long'),
});

const FormList = () => {
    // 1. useForm hook to manage form state and the validation
    const form = useForm({
        resolver: zodResolver(formSchema),
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    });

    // 2. Handle the submission
    const onSubmit = form.handleSubmit((data) => {
        // Log the form data to the console for demonstration purposes
        console.log('Form Data:', data);

        // reset the form after we get the log data
        form.reset();
    });

    return (
        <Form>
            <form onSubmit={onSubmit} className="space-y-6">
                <div className='partials'>
                    <label htmlFor="name">Name</label>
                    <Input id="name" type="text" {...form.register('name')} autoComplete="off" />
                    {form.formState.errors.name && <span>{form.formState.errors.name.message}</span>}
                </div>
                <div className='partials'>
                    <label htmlFor="email">Email</label>
                    <Input id="email" type="email" {...form.register('email')} autoComplete="off" />
                    {form.formState.errors.email && <span>{form.formState.errors.email.message}</span>}
                </div>
                <div className='partials'>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        rows={5}
                        className="input textarea"
                        {...form.register('message')}
                        autoComplete="off"
                    />
                    {form.formState.errors.message && <span>{form.formState.errors.message.message}</span>}
                </div>
                <Button type="submit" className="flex justify-around w-full md:w-3/4 mx-auto">
                    Submit
                </Button>
            </form>
        </Form>
    )
}

export default FormList