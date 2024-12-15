'use client';
import React from 'react';
import { TodoItem } from './TodoItem';
import { cn } from '@/lib/utils';
import { useTodoStore } from '@/app/stores/useTodoStore';

interface Props {
  className?: string;
}

export const TodoList: React.FC<Props> = ({ className }) => {
  const { todos, filter } = useTodoStore();

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <ul className={cn('border shadow-xl text-2xl', className)}>
      {filteredTodos.map((todo) => (
        <TodoItem
          title={todo.text}
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};
