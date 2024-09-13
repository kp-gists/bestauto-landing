'use client';

import { useEffect, useState } from 'react';

import Hero from '@/components/landing/Hero';
import OurServices from '@/components/landing/OurServices';
import SendRequest from '@/components/SendRequest';
import AboutUs from '@/components/landing/AboutUs';
import WhatWeDo from '@/components/landing/WhatWeDo';

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

				<OurServices />
				<AboutUs />

				{/* what we do */}
				<WhatWeDo />

				<SendRequest />

				{/* <div className='w-36 h-36 rounded-full m-4 bg-red-gradient blur-lg'></div> */}
			</div>
		</div>
	);
}
