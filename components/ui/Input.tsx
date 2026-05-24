import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type InputProps = InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean };

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, invalid, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      aria-invalid={invalid ? 'true' : undefined}
      className={cn(
        'h-12 w-full rounded-card border bg-paper px-4 text-[14px] text-ink placeholder:text-ink-muted transition-all duration-200 ease-aura',
        'focus:outline-none focus:border-gold focus:shadow-focus-ring',
        invalid ? 'border-danger/60' : 'border-line',
        className,
      )}
      {...props}
    />
  );
});

export default Input;
