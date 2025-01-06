'use client';
import React from 'react';
import { ModalPage } from './';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginForm({ isOpen, onClose }: Props) {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (value: { username: string; password: string }) => {
    console.log(value);
    router.push('/dashboard');
    onClose();
  };

  return (
    <ModalPage isOpen={isOpen} onClose={onClose} className='w-[500px]'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=' flex flex-col  items-center justify-center'
        >
          <FormField
            name='username'
            control={form.control}
            render={({ field }) => (
              <FormItem className='mt-4  w-full px-8 '>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    {...field}
                    placeholder='Enter your username'
                    className=' placeholder:text-[#C4C4C4] h-[50px] w-full'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name='password'
            control={form.control}
            render={({ field }) => (
              <FormItem className='mt-4  w-full px-8 '>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    {...field}
                    placeholder='password'
                    className=' placeholder:text-[#C4C4C4] h-[50px] w-full'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex items-center justify-between w-full px-9 mt-2'>
            Remember Me
            <Link href={'/forgot-password'}>
              <Button variant='link'>Forgot Password</Button>
            </Link>
          </div>

          <Button className='w-[70%] mt-5 py-2 min-h-[50px] '>Login</Button>
        </form>
      </Form>
    </ModalPage>
  );
}
