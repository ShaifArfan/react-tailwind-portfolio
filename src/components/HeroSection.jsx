import React, { useState, useEffect } from 'react';

function HeroSection() {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	return (
		<div id="hero" className="flex items-center justify-center flex-col py-20">
			<div className="text-center">
				<button
					type="button"
					onClick={handleThemeSwitch}
					className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
				>
					{theme === 'dark' ? '🌞' : '🌙'}
				</button>
				<h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
					Hi, This is Arfan
				</h1>
				<p className="font-inter text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi rerum
					quia harum eaque, quae laboriosam quisquam distinctio{' '}
				</p>
				<a
					href="#works"
					className="font-inter inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-md md:px-8"
				>
					See Works
				</a>
			</div>
		</div>
	);
}

export default HeroSection;
