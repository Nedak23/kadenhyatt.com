import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Log that we received a request
    console.log('Received contact form submission');

    const { name, email, message } = await request.json();
    
    // Log the form data
    console.log('Form data:', { name, email, message: message.slice(0, 50) + '...' });

    // Basic validation
    if (!name || !email || !message) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify we have the API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Log that we're about to send the email
    console.log('Attempting to send email via Resend');

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'Kaden Hyatt Website <onboarding@resend.dev>', // Using the verified sender domain
      to: 'kadenhyatt@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Log the result
    console.log('Email sent successfully:', result);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    // Log the full error
    console.error('Error in contact form:', error);
    
    // Return a more specific error message if available
    const errorMessage = error instanceof Error ? error.message : 'Error sending email';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 