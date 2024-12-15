import { act, render, renderHook, screen } from '@testing-library/react';
import { useTodoStore } from '@/app/stores/useTodoStore';
import { Control } from '@/components/shared/Control';

describe('Control component', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useTodoStore());

    result.current.todos = [];
  });

  it('renders buttons correctly', () => {
    render(<Control />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('set filter "active" is correctly', async () => {
    const { getByText } = render(<Control />);

    const { result } = renderHook(() => useTodoStore());

    await act(async () => {
      getByText('Active').click();
    });

    expect(result.current.filter).toBe('active');
  });

  it('shows correct count of active todos', async () => {
    const { getByText } = render(<Control />);

    const { result } = renderHook(() => useTodoStore());

    await act(async () => {
      result.current.addTodo('active todo');
      result.current.addTodo('active todo');
      result.current.addTodo('completed todo');
    });

    result.current.todos[2].completed = true;

    await act(async () => {
      getByText('Active').click();
    });

    expect(screen.getByText('2 items left')).toBeInTheDocument();
  });

  it('clears completed todos', async () => {
    const { getByText } = render(<Control />);

    const { result } = renderHook(() => useTodoStore());

    await act(async () => {
      result.current.addTodo('active todo');
      result.current.addTodo('completed todo');
      result.current.addTodo('completed todo');
      result.current.addTodo('active todo');
      result.current.addTodo('active todo');
    });

    result.current.todos[1].completed = true;
    result.current.todos[2].completed = true;

    await act(async () => {
      getByText('Clear completed').click();
    });

    expect(screen.getByText('3 items left')).toBeInTheDocument();
  });
});
