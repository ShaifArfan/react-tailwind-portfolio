import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Works from './components/Works';

function App() {
	return (
		<div className="bg-white dark:bg-slate-900 min-h-screen font-inter ">
			<div className="max-w-5xl w-11/12 mx-auto">
				<HeroSection />
				<Services />
				<Works />
				<About />
				<Footer />
			</div>
		</div>
	);
}

export default App;
