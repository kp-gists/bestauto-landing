import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
	fullName: string;
	email: string;
	subject: string;
	message: string;
}

const ContactForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const [formData, setFormData] = useState<FormData>({
		fullName: '',
		email: '',
		subject: '',
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
				subject: formData.subject,
				fullName: formData.fullName,
				message: formData.message,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log({ data });
				setIsSuccess(true);
				setFormData({
					fullName: '',
					email: '',
					subject: '',
					message: '',
				});
			})
			.catch((error) => {
				console.log('🚀 ~ handleSubmit ~ error:', error);

				setIsError(true);
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<div className='max-w-xl mx-auto mt-10'>
			<form onSubmit={handleSubmit} className='bg-white w-full shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				<p className='text-black'>isSuccess:{isSuccess ? 'True' : 'False'}</p>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='fullName'>
						Full Name
					</label>
					<input
						id='fullName'
						name='fullName'
						type='text'
						value={formData.fullName}
						onChange={handleChange}
						className='shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						placeholder='Full Name'
						required
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
						Email
					</label>
					<input
						id='email'
						name='email'
						type='email'
						value={formData.email}
						onChange={handleChange}
						className='shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						placeholder='Email'
						required
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='subject'>
						Subject
					</label>
					<input
						id='subject'
						name='subject'
						type='text'
						value={formData.subject}
						onChange={handleChange}
						className='shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						placeholder='Subject'
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
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
