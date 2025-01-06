import React, { useEffect } from 'react';
import { ModalPage } from './';
import { QRCodeSVG } from 'qrcode.react';
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
import { Label } from './ui/label';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

type Payload = {
  recipient: string;
  amount: string;
  currency: string;
};

export function QrCodeGenerator({ isOpen, onClose }: Props) {
  const form = useForm<Payload>({
    defaultValues: {
      recipient: '',
      amount: '',
      currency: 'NGN',
    },
  });

  const onSubmit = (value: Payload) => {
    console.log(value);

    // onClose();
  };
  useEffect(() => {
    form.setValue('amount', '');
    form.setValue('recipient', '');
  }, [isOpen, form]);

  return (
    <ModalPage isOpen={isOpen} onClose={onClose} className='w-[500px]'>
      <Label>Scan code to send money</Label>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=' flex flex-col  items-center justify-center'
        >
          <FormField
            name='recipient'
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
            name='amount'
            control={form.control}
            render={({ field }) => (
              <FormItem className='mt-4  w-full px-8 '>
                <FormLabel>Amount</FormLabel>
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

          {/* <Button className='w-[70%] mt-5 py-2 min-h-[50px] '>Login</Button> */}
        </form>
      </Form>
      {form.watch('amount') !== '' && form.watch('recipient') !== '' && (
        <div className='flex items-center justify-center'>
          <QRCodeSVG value={JSON.stringify(form.getValues())} size={200} />
        </div>
      )}
    </ModalPage>
  );
}

export function QRScanner() {
  return (
    <></>
    // <QrReader
    //   onResult={(result, error) => {
    //     if (!!result) {
    //       setData(result?.text);
    //     }
    //   }}
    //   style={{ width: '100%' }}
    // />
  );
}
