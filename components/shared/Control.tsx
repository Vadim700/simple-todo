'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui';
import { useTodoStore } from '@/app/stores/useTodoStore';

interface Props {
  className?: string;
}

export const Control: React.FC<Props> = ({ className }) => {
  const { setFilter, filter, todos, deleteCompletedTodo } = useTodoStore();

  const filters: { label: string; value: 'all' | 'active' | 'completed' }[] = [
    { label: 'All', value: 'all' },
    // { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  const handleFilterChange = (value: 'all' | 'active' | 'completed') => {
    setFilter(value);
  };

  const countActiveTodo = todos.filter((item) => !item.completed).length;

  return (
    <div
      className={cn('flex items-center gap-4 justify-between pt-6', className)}
    >
      {countActiveTodo > 0 && (
        <span>
          {countActiveTodo + ' '}
          items left
        </span>
      )}
      <div className="flex items-center gap-2">
        {filters.map(({ label, value }) => (
          <Button
            key={value}
            variant={filter === value ? 'outline' : 'ghost'}
            onClick={() => handleFilterChange(value)}
          >
            {label}
          </Button>
        ))}
      </div>
      <div>
        <Button variant={'ghost'} onClick={() => deleteCompletedTodo()}>
          Clear completed
        </Button>
      </div>
    </div>
  );
};
