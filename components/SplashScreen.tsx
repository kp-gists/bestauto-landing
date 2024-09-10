import React from 'react';
import SvgFrame from './SvgFrame';

export default function SplashScreen() {
	return (
		<div className='fixed inset-0 flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 z-50 h-screen w-screen overflow-hidden'>
			<div className='text-center'>
				<SvgFrame />
				<h1 className='text-4xl font-bold text-cyan-500 mt-4 animate-pulse'>Loading...</h1>
			</div>
		</div>
	);
}
