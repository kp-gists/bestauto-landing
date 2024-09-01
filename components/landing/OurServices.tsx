import { yanFont900 } from '@/lib/fonts';
import { cn } from '@/lib/utility';
import { IService } from '@/types';
import { bestAuto } from '@/utils/constants';
import React from 'react';
import ServiceCard from '../ServiceCard';

type Props = {};

const OurServices = (props: Props) => {
	return (
		<div className='flex flex-col justify-center items-center py-4 lg:py-16 gap-5'>
			<div className='flex items-center justify-center gap-3'>
				<div className='bg-red-500 w-10 h-0.5' />
				<h1 className='text-red-500 uppercase text-lg font-bold'>our services</h1>
				<div className='bg-red-500 w-10 h-0.5' />
			</div>

			<h2 className={cn('capitalize text-3xl md:text-[50px] leading-none text-center text-black w-full max-w-lg', yanFont900.className)}>
				Trusted Car Repair <br className='block md:hidden' /> the <br className='hidden md:block' /> Professionals
			</h2>

			<div className='flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center'>
				{bestAuto.services.map((service: IService) => (
					<ServiceCard key={service.key} service={service} />
				))}
			</div>
		</div>
	);
};

export default OurServices;
