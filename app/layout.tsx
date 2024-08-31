import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utility';
import '../styles/index.scss';

config.autoAddCss = false;

const poppins = Poppins({
	subsets: ['latin'],
	weight: '400',
});

export const metadata: Metadata = {
	title: 'BestAuto',
	description: 'You best mechanic for your car',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn(poppins.className, '')}>
				<Navbar />

				<div className=' mx-auto h-full bg-white p-0 m-0'>
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
