import React from 'react';

function Footer() {
	return (
		<div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
			<a href="#hero" className="block text-xl md:text-2xl font-semibold">
				Shiaf Arfan
			</a>
			<a
				href="mailto:webcifar@gmail.com"
				className="text-sm md:text-md hover:text-indigo-500"
			>
				webcifar@emial.com
			</a>
			<p className="text-xs mt-2 text-gray-500">
				© TechHub-Blog Creative {new Date().getFullYear()}. All rights reserved
			</p>
		</div>
	);
}

export default Footer;
