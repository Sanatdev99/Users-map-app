// Replace all instances of 'text-2xl' with 'text-base font-semibold'

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 as uuid } from 'uuid';

const schema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    birthdate: z.string().refine(s => !isNaN(Date.parse(s))),
    gender: z.enum(['male', 'female', 'other']),
});

type UserFormProps = {
    initial?: z.infer<typeof schema> & { id: string; createdAt: string };
    onSave: (user: z.infer<typeof schema> & { id: string; createdAt: string }) => void;
    onCancel: () => void;
};

export default function UserForm({ initial, onSave, onCancel }: UserFormProps) {
    const { register, handleSubmit, reset, formState } = useForm({ resolver: zodResolver(schema) });

    useEffect(() => {
        initial ? reset(initial) : reset({ firstName: '', lastName: '', birthdate: '', gender: 'male' });
    }, [initial]);

    const submit = (data: any) => {
        const u = initial ? { ...initial, ...data } : { id: uuid(), createdAt: new Date().toISOString(), ...data };
        onSave(u);
    };

    return (
        <form onSubmit={handleSubmit(submit)} className='grid gap-4'>
            <div>
                <label className='text-xl font-semibold'>First Name</label>
                <input className='w-full text-2xl border rounded-md px-3 py-2' {...register('firstName')} />
                <p className='text-2xl font-semibold text-red-600'>{formState.errors.firstName ? String(formState.errors.firstName.message) : null}</p>
            </div>
            <div>
                <label className='text-xl font-semibold'>Last Name</label>
                <input className='w-full border text-2xl rounded-md px-3 py-2' {...register('lastName')} />
                <p className='text-sm text-red-600'>{formState.errors.lastName ? String(formState.errors.lastName.message) : null}</p>
            </div>
            <div>
                <label className='text-2xl'>Birthdate</label>
                <input type='date' className='w-full border rounded-md px-3 text-2xl py-2' {...register('birthdate')} />
                <p className='text-2xl text-red-600'>{formState.errors.birthdate ? String(formState.errors.birthdate.message) : null}</p>
            </div>
            <div>
                <label className='text-xl'>Gender</label>
                <select className='w-full border rounded-md px-3 py-2 text-2xl' {...register('gender')}>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
            </div>
            <div className='flex justify-end gap-2'>
                <button type='button' onClick={onCancel} className='border px-3 py-1 rounded-md text-xl'>Cancel</button>
      
                <button className='border px-3 py-1 rounded-md text-xl'>Save</button>
            </div>
        </form>
    );
}