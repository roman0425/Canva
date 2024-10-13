import { Field, Input } from '@headlessui/react'
import Icon from '../Icons';
import { cn } from '@/lib/utils';

const SearchField =({className}: {className?: string})=> {
  return (
      <Field className={cn(className, "w-full flex border border-gray-200 rounded-lg p-2 items-center max-w-md min-w-40")}>
        <Icon name="search" className='size-6'/>
        <Input
          className={'w-full h-6 border-none px-2 focus:outline-none'}
          placeholder="Search your content and Canva's"
        />
      </Field>
  )
}

export default SearchField;