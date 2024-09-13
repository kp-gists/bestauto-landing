import { yanFont900 } from '@/lib/fonts';
import { cn } from '@/lib/utility';
import { bestAuto } from '@/utils/constants';
import React from 'react';
import Image from 'next/image';
import DoCard from '../DoCard';

type Props = {};

const WhatWeDo = (props: Props) => {
	return (
		<div className='flex flex-col py-7 items-center justify-center  gap-4 h-full w-full '>
			<div className='flex justify-center items-center gap-3'>
				<div className='w-10 h-0.5 bg-red-500' />
				<h1 className='uppercase text-base font-bold text-red-500'>What We Do</h1>
				<div className='w-10 h-0.5 bg-red-500' />
			</div>

			<h2 className={cn('capitalize text-3xl md:text-[50px] leading-none pb-4 text-center text-black w-full max-w-lg', yanFont900.className)}>
				Dependable Car Repair The Solutions
			</h2>

			<div className='flex flex-col  md:flex-wrap lg:flex-row lg:flex-nowrap relative max-h-full lg:max-h-[574px]'>
				<div className='flex justify-center items-center mb-6 md:mb-0 pt-12 max-h-[514px] h-full w-full lg:w-1/3 order-1 md:order-1 lg:order-2'>
					<Image alt='what we do as a car service' width={332} height={510} className={'rounded-full  bg-cover h-full'} src={bestAuto.whatWeDo.img} />
				</div>

				<div className='flex flex-col justify-between w-full md:w-1/2 lg:w-1/3 gap-y-16 p-6 order-2 lg:order-1'>
					{bestAuto.whatWeDo.doing.slice(0, 3).map((doing) => (
						<DoCard key={doing.key} doing={doing} />
					))}
				</div>

				<div className='flex flex-col gap-y-16 p-6 lg:px-[30px]  w-full  md:w-1/2 lg:w-1/3 justify-between order-3'>
					{bestAuto.whatWeDo.doing.slice(3, 6).map((doing) => (
						<DoCard key={doing.key} doing={doing} isLeft />
					))}
				</div>
			</div>
		</div>
	);
};

export default WhatWeDo;
