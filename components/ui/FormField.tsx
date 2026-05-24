import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type FormFieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Wraps a form control with label + optional hint + optional error.
 * Per spec §08: label is JetBrains Mono 12px uppercase, gold dot
 * marks required fields, error text is muted red beneath the field.
 */
export default function FormField({
  label,
  htmlFor,
  required,
  hint,
  error,
  children,
  className,
}: FormFieldProps) {
  const errorId = error ? `${htmlFor}-error` : undefined;
  const hintId = hint ? `${htmlFor}-hint` : undefined;
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label
        htmlFor={htmlFor}
        className="inline-flex items-center gap-2 font-mono text-eyebrow uppercase tracking-[0.18em] text-ink-muted"
      >
        <span>{label}</span>
        {required && (
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-gold"
            aria-label="required"
          />
        )}
      </label>
      {hint && (
        <p id={hintId} className="text-small text-ink-muted">
          {hint}
        </p>
      )}
      {/* Inject describedby into the child if relevant */}
      {children}
      {error && (
        <p
          id={errorId}
          role="alert"
          aria-live="polite"
          className="text-small text-danger"
        >
          {error}
        </p>
      )}
    </div>
  );
}
