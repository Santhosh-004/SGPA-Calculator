
import { Select, Input, SelectItem } from '@nextui-org/react';
import { grades } from '@/libs/data';
import Form from '@/components/Form';


export default function Page() {
  return (
    <div className='my-5'>
      <div>
        <h1 className="text-4xl font-bold text-center">SRM SGPA Calculator</h1>
      </div>
      <div className='w-2/3 mx-auto mt-4'>
        <Form/>
      </div>
    </div>
  )
}