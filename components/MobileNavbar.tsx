import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';

type Props = {};

const MobileNavbar = (props: Props) => {
	return (
		<div className='block md:hidden  drawer'>
			<input id='my-drawer' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content'>
				{/* Page content here */}
				<label htmlFor='my-drawer' className='btn btn-link btn-accent bg-transparent drawer-button'>
					<FontAwesomeIcon icon={faBars} className='fa-fw w-6 h-6' />
				</label>
			</div>
			<div className='drawer-side'>
				<label htmlFor='my-drawer' aria-label='close sidebar' className='drawer-overlay'></label>
				<ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
					{/* Sidebar content here */}
					<li>
						<a>BestAuto</a>
					</li>
					<li>
						<a>Sidebar Item 2</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MobileNavbar;
