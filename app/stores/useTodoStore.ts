import { Todo } from '@/types/todo';
import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

interface TodoStore {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteCompletedTodo: () => void;
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  filter: 'all',
  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: uuidv4(),
          text,
          completed: false,
        },
      ],
    })),
  
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),
  
  deleteCompletedTodo: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    })),
  
  setFilter: (filter) => set({ filter }),
}));
