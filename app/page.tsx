'use client';

import ContactForm from '@/components/ContactForm';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState();
  const [email, setEmail] = useState('kol.paja@gmail.com');
  const [subject, setTitle] = useState('This is the title1');
  const [content, setContent] = useState('This is the body of the example when to meet 2024-07-26 10:00');
  const [isLoading, setIsLoading] = useState(false);

  const send = async () => {
    const res = await fetch('http://localhost:3000/api/send');
    const msg = await res.json();
    setData(msg);
  };

  useEffect(() => {
    send();
  }, []);

  const body = { email, subject, content };

  const handleSendEmail = () => {
    setIsLoading(true);
    fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => setData(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className='flex flex-col justify-center max-w-5xl mx-auto px-4 gap-4'>
      <h1>Selam</h1>

      <hr />

      <div className='flex flex-col'>
        <h2>Form</h2>

        <ContactForm />
      </div>
    </div>
  );
}
