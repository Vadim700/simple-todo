import { useTodoStore } from '@/app/stores/useTodoStore';
import { act, renderHook } from '@testing-library/react';

describe('TodoList component', () => {
  beforeEach(async () => {
    const { result } = renderHook(() => useTodoStore());

    result.current.todos = [];
  });

  it('renders correctly with all todos', async () => {
    const { result } = renderHook(() => useTodoStore());

    await act(async () => {
      result.current.addTodo('first test');
      result.current.addTodo('second test');
    });

    result.current.todos[1].completed = true;
    result.current.filter = 'all';

    const filteredTodos = result.current.todos.filter((todo) => {
      if (result.current.filter === 'active') return !todo.completed;
      if (result.current.filter === 'completed') return todo.completed;
      return true;
    });

    expect(filteredTodos.length).toBe(2);
    expect(result.current.todos[0].text).toBe('first test');
    expect(result.current.todos[1].text).toBe('second test');
  });

  it('filters active tasks correctly', async () => {
    const { result } = renderHook(() => useTodoStore());

    await act(async () => {
      result.current.addTodo('completed task');
      result.current.addTodo('active task');
    });

    result.current.todos[0].completed = true;
    result.current.filter = 'active';

    const filteredTodos = result.current.todos.filter((todo) => {
      if (result.current.filter === 'active') return !todo.completed;
      if (result.current.filter === 'completed') return todo.completed;
      return true;
    });

    expect(filteredTodos.length).toBe(1);
    expect(filteredTodos[0].text).toBe('active task');
  });

  it('filter completed tasks correctly', async () => {
    const { result } = renderHook(() => useTodoStore());

    await act(async () => {
      result.current.addTodo('completed task');
      result.current.addTodo('active task');
    });

    result.current.todos[0].completed = true;
    result.current.filter = 'completed';

    const filteredTodos = result.current.todos.filter((todo) => {
      if (result.current.filter === 'active') return !todo.completed;
      if (result.current.filter === 'completed') return todo.completed;
      return true;
    });

    expect(filteredTodos.length).toBe(1);
    expect(filteredTodos[0].text).toBe('completed task');
  });
});
