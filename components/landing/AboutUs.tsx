import { cn } from '@/lib/utility';
import { IService } from '@/types';
import Image from 'next/image';
import React from 'react';

type Props = {};

const about = {
	img1: '/imgs/about_1.png',
	img2: '/imgs/about_2.png',
	title: 'So Who are we? you may ask',
	desc: 'A car repair is a service provided to fix any issues or damages with a your vehicle. It involves diagnosing the problem, repairing or replacing the necessary parts, and ensuring that the car',
	services: [
		{
			key: 'about-us-service-1',
			icon: '/icons/about_icon_1.svg',
			title: 'Elite Automotive Service',
			desc: 'Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed',
		},
		{
			key: 'about-us-service-2',
			icon: '/icons/about_icon_2.svg',
			title: 'Pro Drive Garage',
			desc: 'Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed',
		},
	],
	trusted: {
		icon: '/icons/people_icon.svg',
		value: '5k+',
		title: 'Trusted Customer',
	},
	champs: {
		icon: '/icons/champion _icon.png',
		value: '10k+',
		title: 'Years of Experience',
	},
	stats: [
		{
			key: 'stats-1',
			icon: '/icons/stats_1.svg',
			title: '2,540+',
			desc: 'Project Done',
		},
		{
			key: 'stats-2',
			icon: '/icons/stats_2.svg',
			title: '100+',
			desc: 'Project Win',
		},
		{
			key: 'stats-3',
			icon: '/icons/stats_3.svg',
			title: '10+',
			desc: 'Glorious Years',
		},
		{
			key: 'stats-4',
			icon: '/icons/stats_4.svg',
			title: '8,255+',
			desc: 'Active Clients',
		},
	],
};

export type ServiceWithoutImg = Omit<IService, 'img'>;

const ServiceCard = ({ service }: { service: ServiceWithoutImg }) => {
	return (
		<div className='p-4 md:p-6 bg-white rounded-lg flex flex-col md:flex-row gap-4 items-center'>
			<div className='relative p-1 md:p-2 overflow-hidden'>
				<Image src={service.icon} width={64} height={64} alt='service image' />
			</div>

			<div className='w-full'>
				<h2 className='text-black font-bold'>{service.title}</h2>
				<p className=' text-black text-base'>{service.desc}</p>
			</div>
		</div>
	);
};

const AboutUs = (props: Props) => {
	return (
		<div className='relative pb-8 md:pb-[230px] mb-10 md:mb-[200px] pt-8 px-4 md:px-8 bg-gray-200 rounded-2xl w-full flex flex-col md:flex-row justify-evenly  gap-10 md:gap-8'>
			<div className='flex flex-col w-full h-full gap-6'>
				<div className='flex pl-0 md:pl-[230px] relative '>
					<div className='absolute md:left-0 bottom-2 md:bottom-1/2 md:top-0 p-2 md:p-6 animate-moveLeftRight md:animate-moveUpDown rounded-md right-2 md:right-2/3 flex flex-col gap-2 items-center bg-red-500'>
						<div className='flex items-center justify-between gap-3 md:flex-col'>
							<Image width={64} height={40} className='h-8 w-8 md:w-16 md:h-10' src={about.trusted.icon} alt={about.trusted.title} />

							<strong className='text-white text-3xl font-extrabold'>{about.trusted.value}</strong>
						</div>

						<p className='text-white capitalize text-base'>{about.trusted.title}</p>
					</div>

					<Image src={about.img1} className='rounded-md' width={470} height={325} alt='about us' />
				</div>
				<div className='flex relative w-full'>
					<Image src={about.img2} className='rounded-md' width={510} height={300} alt='about us' />

					<div className='absolute bottom-2 md:bottom-1/4 md:top-1/4  p-2 md:p-6 animate-moveLeftRight rounded-md left-1/3 md:right-1 md:left-2/3 flex flex-col gap-1 md:gap-2 bg-white'>
						<div className='flex justify-center items-center gap-4'>
							<div className='relative p-2 bg-red-500 rounded-full'>
								<Image width={28} height={28} className='w-5 h-5 md:w-7 md:h-7' src={about.champs.icon} alt={about.champs.title} />
							</div>

							<strong className='text-black text-xl md:text-3xl font-extrabold'>{about.champs.value}</strong>
						</div>
						<p className='text-black capitalize text-base'>{about.champs.title}</p>
					</div>
				</div>
			</div>

			<div className='flex flex-col gap-4 w-full md:w-3/4'>
				<div className='flex justify-start gap-3 items-center'>
					<div className='h-0.5 w-10 bg-red-500' />
					<p className='uppercase text-base text-red-500'>KNOW about us</p>
				</div>

				<h1 className='text-black font-bold text-3xl capitalize'>{about.title}</h1>

				<p className='text-black '>{about.desc}</p>

				<div className='flex flex-col gap-4 md:gap-6 mt-4'>
					{about.services.map((service: ServiceWithoutImg) => (
						<ServiceCard key={service.key} service={service} />
					))}
				</div>
			</div>

			{/* floating bot items */}

			<div className='md:absolute mt-8 md:mt-0 mx-0 md:mx-10 rounded-xl -bottom-[90px] right-0 left-0 bg-red-500 p-6 md:p-10 flex   justify-between gap-3 flex-col md:flex-row '>
				{about.stats.map((stat, idx) => (
					<div
						className={cn('flex items-center gap-2', idx < about.stats.length - 1 ? 'mb-4 md:mr-4 pb-4 md:pr-4 border-b-2 md:border-r-2 border-white' : '')}
						key={stat.key}
					>
						<div className='w-20 h-20 flex justify-center items-center bg-white rounded-full'>
							<Image width={40} height={40} src={stat.icon} alt={stat.title} />
						</div>
						<div className='flex flex-col justify-start items-center'>
							<strong className='text-white text-[50px] font-extrabold'>{stat.title}</strong>
							<p className='text-white capitalize text-base'>{stat.desc}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AboutUs;
