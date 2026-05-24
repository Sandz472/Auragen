import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, invalid, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      aria-invalid={invalid ? 'true' : undefined}
      className={cn(
        'min-h-[140px] w-full rounded-card border bg-paper px-4 py-3 text-[14px] leading-relaxed text-ink placeholder:text-ink-muted transition-all duration-200 ease-aura',
        'focus:outline-none focus:border-gold focus:shadow-focus-ring',
        'resize-y',
        invalid ? 'border-danger/60' : 'border-line',
        className,
      )}
      {...props}
    />
  );
});

export default Textarea;
