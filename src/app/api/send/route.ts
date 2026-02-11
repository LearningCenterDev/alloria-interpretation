import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, mode, notes } = await request.json();

        const { data, error } = await resend.emails.send({
            from: 'alloria.interpretation@resend.dev',
            to: ['learningcenterdeveloper@gmail.com'], // TIP: This must be the email you signed up for Resend with, unless you have verified your own domain.
            subject: `New Contact Form Submission from ${name}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #2FBF71; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px;">New Application Received</h2>
          
          <div style="margin-bottom: 30px;">
            <p style="margin: 5px 0;"><strong style="color: #64748b; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em;">Full Name:</strong><br/> <span style="font-size: 16px; font-weight: 600; color: #1e293b;">${name}</span></p>
            <p style="margin: 15px 0;"><strong style="color: #64748b; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em;">Email Address:</strong><br/> <span style="font-size: 16px; font-weight: 600; color: #1e293b;">${email}</span></p>
            <p style="margin: 15px 0;"><strong style="color: #64748b; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em;">Service Mode:</strong><br/> <span style="font-size: 14px; font-weight: 600; background: #f1f5f9; padding: 4px 12px; border-radius: 20px; color: #1e293b;">${mode}</span></p>
          </div>

          <div style="background: #F8FAFC; padding: 20px; border-radius: 12px; border: 1px solid #f1f5f9;">
            <strong style="color: #64748b; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em;">Message / Notes:</strong>
            <p style="font-size: 14px; line-height: 1.6; color: #334155; margin-top: 10px;">${notes || 'No extra notes provided.'}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #f1f5f9; text-align: center;">
            <p style="font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em;">Sent via Alloria Contact Portal</p>
          </div>
        </div>
      `,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (err: any) {
        console.error('Internal Server Error:', err);
        return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
    }
}
