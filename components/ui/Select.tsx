import { forwardRef, type SelectHTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean;
  placeholder?: string;
  options: readonly string[];
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, invalid, placeholder, options, ...props },
  ref,
) {
  return (
    <div className="relative">
      <select
        ref={ref}
        aria-invalid={invalid ? 'true' : undefined}
        className={cn(
          'h-12 w-full appearance-none rounded-card border bg-paper px-4 pr-10 text-[14px] text-ink transition-all duration-200 ease-aura',
          'focus:outline-none focus:border-gold focus:shadow-focus-ring',
          invalid ? 'border-danger/60' : 'border-line',
          // Empty value renders muted to mimic a placeholder
          props.value === '' && 'text-ink-muted',
          className,
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        strokeWidth={2}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted"
        aria-hidden
      />
    </div>
  );
});

export default Select;
