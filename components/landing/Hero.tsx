import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { bestAuto, contacts } from '@/utils/constants';
import { yanFont900 } from '@/lib/fonts';

const Hero = () => {
	return (
		<div className=' relative h-[80vh] w-screen overflow-hidden '>
			<div className='absolute inset-0 z-0'>
				<Image layout='fill' objectFit='cover' priority={true} alt='BestAuto hero image' src='/imgs/hero_bg_2_1(1).png' />
			</div>

			<div className=' absolute w-full flex  justify-center items-center bg-transparent  h-full z-20 top-0 left-0 right-0 p-6'>
				<div className='flex flex-col gap-4  justify-start items-start max-w-7xl w-full h-full pt-36'>
					<div className='w-full flex flex-start items-center gap-2'>
						<div className='h-0.5 w-10 bg-white rounded' />

						<h1 className='text-xl text-white font-bold uppercase'>{bestAuto.heroSlogan.subTitle}</h1>
					</div>
					<div className='flex flex-col max-w-md w-full gap-4'>
						<h1
							className={cn('text-[54px] text-white leading-tight', yanFont900.className)}
							dangerouslySetInnerHTML={{
								__html: bestAuto.heroSlogan.title,
							}}
						></h1>

						<p className='text-xl text-gray-300'>{bestAuto.heroSlogan.desc}</p>

						<div className='flex gap-x-6 gap-y-5 mt-8'>
							{/* TODO navigate to learn more */}
							<button className='btn btn-error text-white btn-lg'>Learn More</button>

							<div className='flex w-full flex-start items-center gap-4'>
								<div className='flex items-center justify-center w-14 h-14 bg-red-500 rounded-full'>
									<FontAwesomeIcon icon={faMobileScreenButton} className='h-6 w-6 text-white animate-wiggle' style={{ animationDelay: '3s' }} />
								</div>

								<div className='flex flex-col'>
									<h2 className='text-xl text-white font-normal'>Give Us A Call:</h2>

									<a className='text-2xl text-white font-bold' href={contacts.tel.href}>
										{contacts.tel.displayText}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='hero-2'>
				<div className='hero-shape2' />
			</div>
		</div>
	);
};

export default Hero;
