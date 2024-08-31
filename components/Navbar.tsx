'use client';

import React, { useEffect, useState } from 'react';
import MobileNavbar from './MobileNavbar';
import Link from 'next/link';
import { navLinks } from '@/utils/constants';
import Image from 'next/image';
import { cn } from '@/lib/utility';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	const menu = (
		<div className='hidden md:flex items-center gap-x-4'>
			{navLinks.map((link) => (
				<Link
					key={link.key}
					href={link.href}
					className='capitalize font-semibold text-md border-b-2 border-transparent hover:border-gray-300 hover:text-green-500'
				>
					{link.title}
				</Link>
			))}
		</div>
	);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		});
	}, []);

	console.log({ isScrolled });

	return (
		<nav
			className={cn(
				'w-full shadow-lg backdrop-blur-sm bg-white  ',
				isScrolled ? ` sticky top-0  left-0 right-0 z-50 translate-y-0  bg-white/60 transition-all delay-1000` : 'relative ',
			)}
		>
			<div className='flex py-2 items-center h-16 justify-between mx-auto px-4 md:px-6  max-w-7xl '>
				<MobileNavbar />

				<Link href='/' className='flex gap-x-0 md:gap-x-2' title='BestAuto'>
					{/* <Image
          src={passport}
          width={44}
          height={44}
          alt=''
          className='ml-10'
          loading='eager'
        /> */}
					<div className='hidden lg:flex flex-col items-center justify-center'>
						<p className='text-lg font-bold '>BestAuto</p>
					</div>
				</Link>

				{menu}

				<div className=''></div>
			</div>
		</nav>
	);
};

export default Navbar;
