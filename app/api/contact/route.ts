import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  workEmail: z.string().email(),
  phone: z.string().optional(),
  organisation: z.string().min(1),
  sector: z.string().min(1),
  interest: z.string().min(1),
  message: z.string().min(20),
  newsletter: z.boolean().optional(),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed' }, { status: 422 });
  }

  const d = parsed.data;

  const { error } = await resend.emails.send({
    from: 'AuraGen Contact Form <no-reply@auragen.co.za>',
    to: 'info@auragen.co.za',
    replyTo: d.workEmail,
    subject: `New enquiry from ${d.firstName} ${d.lastName} — ${d.organisation}`,
    text: [
      `Name: ${d.firstName} ${d.lastName}`,
      `Email: ${d.workEmail}`,
      `Phone: ${d.phone || '—'}`,
      `Organisation: ${d.organisation}`,
      `Sector: ${d.sector}`,
      `Area of interest: ${d.interest}`,
      `Newsletter: ${d.newsletter ? 'Yes' : 'No'}`,
      '',
      d.message,
    ].join('\n'),
  });

  if (error) {
    console.error('[contact] Resend error', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
