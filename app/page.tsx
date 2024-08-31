'use client';

import ContactForm from '@/components/ContactForm';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Hero from '@/components/landing/Hero';

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
		<>
			<Hero />

			<div className=' flex flex-col justify-center max-w-7xl mx-auto px-4 gap-4 pt-6'>
				{/* TODO landing page */}
				{/* menu bar */}
				{/* hero img */}

				{/* CTA btns */}

				{/* our services component */}
				{/* our project */}
				{/* what we do */}

				{/* work process */}

				{/* blog posts ? */}
				<h1>
					asd asd asd asd asd Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae incidunt atque, rem iusto exercitationem quo obcaecati quis
					ratione placeat vitae minima nemo inventore quos quam. Ratione veniam similique quia soluta?
				</h1>

				<hr />

				<p className='text-black'>use daisy ui</p>
				<button className='btn w-fit btn-primary text-white'>Button</button>
				<div className='flex flex-col'>
					<h2>Form</h2>

					<ContactForm />
					<ContactForm />
					<ContactForm />
				</div>
			</div>
		</>
	);
}
