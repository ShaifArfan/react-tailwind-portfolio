import React from 'react';
import services from '../data/services';
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';

function Services() {
	return (
		<div className="py-12">
			<SectionTitle>Our Services</SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{services.map(service => (
					<ServiceItem
						key={service.title}
						title={service.title}
						icon={service.icon}
						description={service.description}
					/>
				))}
			</div>
		</div>
	);
}

export default Services;
