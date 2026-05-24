import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'children' | 'type'> & {
  label: ReactNode;
  invalid?: boolean;
  error?: string;
};

/**
 * Styled checkbox. The native input stays in the DOM for accessibility but is
 * visually hidden; a sibling `<span>` renders the visible box and check mark.
 * Both visual states are driven by `peer-checked:`.
 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, className, invalid, error, id, ...props },
  ref,
) {
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={id}
        className="group inline-flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-ink-secondary"
      >
        <input
          ref={ref}
          type="checkbox"
          id={id}
          aria-invalid={invalid ? 'true' : undefined}
          aria-describedby={errorId}
          className="peer sr-only"
          {...props}
        />
        <span
          className={cn(
            'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border bg-paper transition-all duration-200 ease-aura',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-gold peer-focus-visible:ring-offset-2',
            'peer-checked:border-gold peer-checked:bg-gold peer-checked:[&>svg]:opacity-100',
            invalid ? 'border-danger/60' : 'border-line group-hover:border-gold',
          )}
          aria-hidden
        >
          <Check
            size={14}
            strokeWidth={3}
            className="text-onyx opacity-0 transition-opacity"
          />
        </span>
        <span>{label}</span>
      </label>
      {error && (
        <p id={errorId} role="alert" className="ml-8 text-small text-danger">
          {error}
        </p>
      )}
    </div>
  );
});

export default Checkbox;
