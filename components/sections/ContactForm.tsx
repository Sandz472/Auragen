'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2 } from 'lucide-react';
import FormField from '@/components/ui/FormField';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';
import Checkbox from '@/components/ui/Checkbox';
import Button from '@/components/ui/Button';
import { contact } from '@/lib/copy';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  workEmail: z
    .string()
    .min(1, 'Work email is required')
    .email('Enter a valid email address'),
  phone: z.string().optional(),
  organisation: z.string().min(1, 'Organisation is required'),
  sector: z.string().min(1, 'Please select a sector'),
  interest: z.string().min(1, 'Please select an area of interest'),
  message: z
    .string()
    .min(20, 'Please give us at least 20 characters so we can help'),
  consent: z
    .boolean()
    .refine((v) => v === true, 'Please confirm so we can respond to you'),
  newsletter: z.boolean().optional(),
});

type FormValues = z.infer<typeof schema>;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      sector: '',
      interest: '',
      consent: false,
      newsletter: false,
    },
    mode: 'onBlur',
  });

  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (_values: FormValues) => {
    setStatus('submitting');
    // Mock submission per spec: simulate network round-trip, then show success.
    // Wire this to a real /api/contact endpoint (or external form service) later.
    await new Promise((res) => setTimeout(res, 900));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-feature border border-line bg-cream p-8 md:p-10"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30">
          <CheckCircle2 size={22} className="text-gold-deep" aria-hidden />
        </div>
        <h2 className="mt-6 font-display text-h3 font-semibold tracking-[-0.01em] text-ink">
          {contact.form.success.title}
        </h2>
        <p className="mt-3 text-[15.5px] leading-relaxed text-ink-secondary">
          {contact.form.success.body}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-feature border border-line bg-paper p-6 md:p-8"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormField
          htmlFor="firstName"
          label="First name"
          required
          error={errors.firstName?.message}
        >
          <Input
            id="firstName"
            autoComplete="given-name"
            invalid={!!errors.firstName}
            {...register('firstName')}
          />
        </FormField>

        <FormField
          htmlFor="lastName"
          label="Last name"
          required
          error={errors.lastName?.message}
        >
          <Input
            id="lastName"
            autoComplete="family-name"
            invalid={!!errors.lastName}
            {...register('lastName')}
          />
        </FormField>

        <FormField
          htmlFor="workEmail"
          label="Work email"
          required
          error={errors.workEmail?.message}
          className="md:col-span-2"
        >
          <Input
            id="workEmail"
            type="email"
            autoComplete="email"
            invalid={!!errors.workEmail}
            {...register('workEmail')}
          />
        </FormField>

        <FormField htmlFor="phone" label="Phone" error={errors.phone?.message}>
          <Input id="phone" type="tel" autoComplete="tel" {...register('phone')} />
        </FormField>

        <FormField
          htmlFor="organisation"
          label="Organisation"
          required
          error={errors.organisation?.message}
        >
          <Input
            id="organisation"
            autoComplete="organization"
            invalid={!!errors.organisation}
            {...register('organisation')}
          />
        </FormField>

        <FormField
          htmlFor="sector"
          label="Sector"
          required
          error={errors.sector?.message}
        >
          <Select
            id="sector"
            placeholder="Select a sector"
            options={contact.form.sectorOptions}
            invalid={!!errors.sector}
            {...register('sector')}
          />
        </FormField>

        <FormField
          htmlFor="interest"
          label="Area of interest"
          required
          error={errors.interest?.message}
        >
          <Select
            id="interest"
            placeholder="Select an area"
            options={contact.form.interestOptions}
            invalid={!!errors.interest}
            {...register('interest')}
          />
        </FormField>

        <FormField
          htmlFor="message"
          label="Message"
          required
          error={errors.message?.message}
          className="md:col-span-2"
        >
          <Textarea
            id="message"
            placeholder="Tell us what you are trying to solve…"
            invalid={!!errors.message}
            {...register('message')}
          />
        </FormField>
      </div>

      <div className="mt-7 space-y-4">
        <Checkbox
          id="consent"
          label={contact.form.consent}
          invalid={!!errors.consent}
          error={errors.consent?.message}
          {...register('consent')}
        />
        <Checkbox
          id="newsletter"
          label={contact.form.newsletter}
          {...register('newsletter')}
        />
      </div>

      <div className="mt-8 flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
          We respond within one business day.
        </p>
        <Button
          type="submit"
          disabled={status === 'submitting'}
          variant="primary"
          arrow="upRight"
          className={status === 'submitting' ? 'cursor-wait opacity-80' : ''}
        >
          {status === 'submitting' ? 'Sending…' : contact.form.submitLabel}
        </Button>
      </div>
    </form>
  );
}
