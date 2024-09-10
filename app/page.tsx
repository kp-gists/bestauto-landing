'use client';

import ContactForm from '@/components/ContactForm';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Hero from '@/components/landing/Hero';
import OurServices from '@/components/landing/OurServices';
import WhatWeDo from '@/components/WhatWeDo';
import SendRequest from '@/components/SendRequest';

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
		<div className='w-full h-full'>
			<Hero />

			<div className=' flex flex-col justify-center max-w-7xl mx-auto  w-full h-full  px-4 gap-4'>
				{/* TODO landing page */}
				{/* menu bar */}

				{/* our services component */}
				<OurServices />
				{/* our project */}
				{/* work process */}
				{/* about us */}
				{/* stats */}

				{/* what we do */}
				<WhatWeDo />

				{/* send request for appointment */}
				<SendRequest />
				{/* blog posts ? */}

				<hr />

				<div className='w-36 h-36 rounded-full m-4 bg-red-gradient blur-lg'></div>
				{/* 
				<p className='text-black'>use daisy ui</p>
				<button className='btn w-fit btn-primary text-white'>Button</button>
				<div className='flex items-center flex-col'>
					<h2>Form</h2>

					<ContactForm />
				</div> */}
			</div>
		</div>
	);
}
