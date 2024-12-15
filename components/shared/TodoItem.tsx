'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { useTodoStore } from '@/app/stores/useTodoStore';

interface Props {
  className?: string;
  title: string;
  id: string;
  completed: boolean;
}

export const TodoItem: React.FC<Props> = ({
  className,
  title,
  id,
  completed,
}) => {
  const { toggleTodo } = useTodoStore();

  const handleChange = () => {
    toggleTodo(id);
  };

  return (
    <li className={cn(className, 'border-b last:border-0 pl-4')}>
      <label className="group flex items-center cursor-pointer py-4">
        <Checkbox
          id={id}
          checked={completed}
          onClick={handleChange}
          className="mr-4 group-hover:border-emerald-600"
        />
        {title}
      </label>
    </li>
  );
};
