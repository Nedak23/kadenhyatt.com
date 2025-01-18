import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Kaden Hyatt',
  description: 'Get in touch with Kaden Hyatt for collaborations and opportunities. Contains contact info and a form to send me a message.',
}

export default function Contact() {
  return (
    <main className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-lg text-gray-600 mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider mb-2">Email</h2>
                <a 
                  href="mailto:kadenhyatt@gmail.com" 
                  className="text-lg underline underline-offset-4"
                >
                  kadenhyatt@gmail.com
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider mb-2">Social Media</h2>
                <div className="flex gap-6">
                  <a 
                    href="https://www.linkedin.com/in/kaden-hyatt/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg underline underline-offset-4"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/Nedak23" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg underline underline-offset-4"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://x.com/kaden_hyatt" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg underline underline-offset-4"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </main>
  );
} 