import { faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';

interface FormData {
	fullName: string;
	email: string;
	phoneNumber: string;
	message: string;
}

const ContactForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const [formData, setFormData] = useState<FormData>({
		fullName: '',
		email: '',
		phoneNumber: '',
		message: '',
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle form submission logic here, such as sending the data to an API
		setIsLoading(true);
		fetch('/api/emails', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				email: formData.email,
				phoneNumber: formData.phoneNumber,
				fullName: formData.fullName,
				message: formData.message,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				toast.success('Message was sent!');
				setFormData({
					fullName: '',
					email: '',
					phoneNumber: '',
					message: '',
				});
			})
			.catch((error) => {
				console.log('🚀 ~ handleSubmit ~ error:', error);
				toast.error('Sorry! Message was not sent!');
				setIsError(true);
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<div className='ml-0 px-4 py-8 md:px-0 md:py-8 md:ml-[150px] max-w-xl w-full'>
			<form onSubmit={handleSubmit} className='bg-white w-full shadow-md rounded px-8 pt-6 pb-8'>
				<div className='flex gap-3 items-center mb-4'>
					<div className='h-0.5 w-8 bg-red-400' /> <p className='text-red-600 uppercase text-base'>Send a request</p>
				</div>

				<div className='flex flex-col  md:flex-row gap-3 w-full'>
					<div className='mb-4 w-2/3'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='fullName'>
							Your Name
						</label>
						<input
							id='fullName'
							name='fullName'
							type='text'
							value={formData.fullName}
							onChange={handleChange}
							className='shadow active:outline-purple-500 focus:outline-purple-500 bg-white appearance-none border rounded w-full py-2 px-3 h-12 text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
							placeholder='Full Name'
							required
						/>
					</div>

					<div className='mb-4 w-full'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
							Email
						</label>
						<input
							id='email'
							name='email'
							type='email'
							value={formData.email}
							onChange={handleChange}
							className='shadow bg-white appearance-none border rounded w-full py-2 px-3   h-12 text-gray-700 active:outline-purple-500 focus:outline-purple-500 leading-tight focus:outline-none focus:shadow-outline'
							placeholder='Email'
							required
						/>
					</div>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='subject'>
						Phone Number
					</label>
					<input
						id='phoneNumber'
						name='phoneNumber'
						type='text'
						value={formData.phoneNumber}
						onChange={handleChange}
						className='shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						placeholder='+44 131 765 4321'
						required
					/>
				</div>
				<div className='mb-6'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
						Message
					</label>
					<textarea
						rows={4}
						id='message'
						name='message'
						value={formData.message}
						onChange={handleChange}
						className='shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						placeholder='Message'
						required
					/>
				</div>
				<div className='flex items-center justify-between'>
					<button
						type='submit'
						disabled={isLoading}
						className='bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none leading-loose text-lg focus:shadow-outline hover:scale-y-105 active:translate-x-2 text-center align-middle flex justify-center gap-3 items-center'
					>
						Send Message{' '}
						{isLoading ? <FontAwesomeIcon icon={faSpinner} className='animate-spin w-6 h-6' /> : <FontAwesomeIcon icon={faArrowRight} className='w-6 h-6' />}
					</button>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
};

export default ContactForm;
