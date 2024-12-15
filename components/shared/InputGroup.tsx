'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useTodoStore } from '@/app/stores/useTodoStore';
import { Input, Label } from '@/components/ui';

const InputGroup = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'>
>(({ className, type, ...props }, ref) => {
  const { addTodo } = useTodoStore();
  const submitHandler = (todo: string) => {
    addTodo(todo);
  };

  return (
    <Label className={cn('flex items-center border px-4 gap-5', className)}>
      <ChevronDown className="text-inherit" size={32} />
      <Input id='input' area-label='addTodo' type='search' placeholder="Please type something" onEnter={submitHandler} />
    </Label>
  );
});
InputGroup.displayName = 'Input';

export { InputGroup };
