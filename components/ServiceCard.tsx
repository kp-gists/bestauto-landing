import { IService } from '@/types';
import Image from 'next/image';
import React from 'react';

type Props = {
	service: IService;
};

const ServiceCard = ({ service }: Props) => {
	return (
		<div
			className=' flex flex-col p-4 md:p-10  justify-end rounded-md items-start relative overflow-hidden   gap-3'
			style={{ backgroundImage: `url(${service.img})` }}
		>
			<div className='w-16 h-16 md:w-24 md:h-24 z-20 bg-red-500 rounded-xl flex items-center justify-center'>
				<Image src={service.icon} className='animate-pulse w-10 h-10 md:w-[65px] md:h-[65px]' alt={service.title} width={65} height={65} />
			</div>

			{/* <!-- Gradient Overlay --> */}
			<div className='absolute inset-0 bg-gradient-to-t z-10 from-black/70 to-transparent'></div>

			<h1 className='text-white text-2xl font-bold z-20'>{service.title}</h1>

			<p className='text-gray-300 text-base md:text-lg font-bold z-20'>{service.desc}</p>
			{/* TODO add any actions */}
		</div>
	);
};

export default ServiceCard;
