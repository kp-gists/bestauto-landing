import React from 'react';
import ContactForm from './ContactForm';

type Props = {};

const SendRequest = (props: Props) => {
	return (
		<div
			className='flex flex-col md:flex-row md:p-10 lg:p-14 bg-cover  justify-start  items-start relative overflow-hidden  my-8 md:my-12 gap-3'
			style={{ backgroundImage: `url('/imgs/appointment-bg.png` }}
		>
			{/* form of request appointment */}
			<ContactForm />
		</div>
	);
};

export default SendRequest;
