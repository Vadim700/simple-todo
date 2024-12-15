import * as React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.ComponentProps<'input'> {
  onEnter?: (value: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, onEnter, ...props }, ref) => {
    const [value, setValue] = React.useState<string>('');

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const handlerKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && value.trim()) {
        if (onEnter) {
          onEnter(value);
        }
        setValue('');
      }
    };

    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={inputHandler}
        onKeyDown={handlerKeyDown}
        className={cn(
          'flex h-9 w-full min-h-16 border-input outline-none bg-transparent py-4 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-2xl placeholder:italic placeholder:text-2xl',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
