import { yanFont900 } from '@/lib/fonts';
import { cn } from '@/lib/utility';
import React from 'react';

type Props = {};

const OurServices = (props: Props) => {
	return (
		<div className='flex flex-col justify-center items-center py-20 gap-5'>
			<div className='flex items-center justify-center gap-3'>
				<div className='bg-red-500 w-10 h-0.5' />
				<h1 className='text-red-500 uppercase text-lg font-bold'>our services</h1>
				<div className='bg-red-500 w-10 h-0.5' />
			</div>

			<h2 className={cn('capitalize text-[50px] leading-none text-center text-black w-full max-w-lg', yanFont900.className)}>
				Trusted Car Repair the <br className='hidden md:block' /> Professionals
			</h2>
		</div>
	);
};

export default OurServices;
