import { yanFont900 } from '@/lib/fonts';
import { cn } from '@/lib/utility';
import Image from 'next/image';
import React from 'react';

type Props = {
	doing: {
		key: string;
		icon: string;
		title: string;
		desc: string;
	};
	isLeft?: boolean;
};

const DoCard = ({ doing, isLeft = false }: Props) => {
	return (
		<div className={cn('flex gap-x-5', isLeft ? 'flex-row-reverse md:flex-row-reverse ' : ' flex-row-reverse md:flex-row', '')}>
			<div className='flex flex-col w-fit gap-2'>
				<h2 className={cn('capitalize  text-[26px] leading-none  text-black w-full max-w-lg', yanFont900.className)}>{doing.title}</h2>
				<p className='text-gray-500 text-lg'>{doing.desc}</p>
			</div>

			<div className='bg-red-100 relative rounded-md w-16 h-16 leading-[64px] flex-none flex-shrink-0 text-center '>
				<Image
					src={doing.icon}
					className='bg-cover block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
					alt={doing.title}
					width={40}
					height={40}
				/>
			</div>
		</div>
	);
};

export default DoCard;
