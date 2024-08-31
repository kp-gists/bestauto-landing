'use client';

import type { Metadata } from 'next';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utility';
import '../styles/index.scss';
import { poppins } from '@/lib/fonts';
import { useEffect, useState } from 'react';
import SplashScreen from '@/components/SplashScreen';

config.autoAddCss = false;

// export const metadata: Metadata = {
// 	title: 'BestAuto',
// 	description: 'You best mechanic for your car',
// };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isLoading, setIsLoading] = useState(true);
	console.log('🚀 ~ isLoading:', isLoading);

	const handleLoad = (event: any) => {
		event.target.media = 'all';
	};

	useEffect(() => {
		// Wait until the page is fully loaded
		const handlePageLoad = () => {
			setIsLoading(false);
		};

		// Check if the page has already loaded
		if (document.readyState === 'complete') {
			handlePageLoad();
		} else {
			window.addEventListener('load', handlePageLoad);
		}

		// Cleanup event listener
		return () => window.removeEventListener('load', handlePageLoad);
	}, [isLoading]);

	return (
		<html lang='en'>
			<head>
				<link rel='preload' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' as='style' />
				<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' media='print' onLoad={handleLoad} />
				<noscript>
					<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' />
				</noscript>
			</head>
			<body className={cn(poppins.className, '')}>
				<Navbar />

				<div className=' mx-auto h-full bg-white p-0 m-0'>
					{isLoading && <SplashScreen />}
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
