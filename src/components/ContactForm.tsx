'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      const message = error instanceof Error ? error.message : 'Failed to send message. Please try again later.';
      setErrorMessage(message);
      console.error('Contact form error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="text-sm font-semibold uppercase tracking-wider block mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider block mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          required
        ></textarea>
      </div>
      
      {status === 'error' && (
        <div className="text-red-600">
          {errorMessage}
        </div>
      )}
      
      {status === 'success' && (
        <div className="text-green-600">
          Message sent successfully!
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full py-3 px-6 rounded-lg text-lg font-medium transition-colors ${
          status === 'loading'
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-gray-800 hover:bg-gray-900 text-white'
        }`}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
} 