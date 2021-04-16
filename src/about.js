const aboutPageController = (() => {
	const renderAboutPage = () => {
		const renderAboutPageTitle = (() => {
			document.querySelector('#page-title').innerText = 'About us';
		})();

		const renderAboutPageBody = (() => {
			const renderServicesContainer = (() => {
				let servicesContainer = document.createElement('div');
				servicesContainer.id = 'services-container';
				servicesContainer.className = 'secondary-text';
				document.querySelector('#page-body').appendChild(servicesContainer);

				const renderServicesImage = (() => {
					let servicesImage = document.createElement('img');
					servicesImage.id = 'services-image';
					servicesImage.src = '../dist/images/about/drinking-pirates1.jpg';
					servicesImage.alt = 'services-image';
					document
						.querySelector('#services-container')
						.appendChild(servicesImage);
				})();

				const renderServicesText = (() => {
					let servicesText = document.createElement('div');
					servicesText.id = 'services-text';
					servicesText.innerText = 'Services';
					document
						.querySelector('#services-container')
						.appendChild(servicesText);
				})();
			})();

			const renderEventsContainer = (() => {
				let eventsContainer = document.createElement('div');
				eventsContainer.id = 'events-container';
				eventsContainer.className = 'secondary-text';
				document.querySelector('#page-body').appendChild(eventsContainer);

				const renderEventsImage = (() => {
					let eventsImage = document.createElement('img');
					eventsImage.id = 'events-image';
					eventsImage.alt = 'events-image';
					document.querySelector('#events-container').appendChild(eventsImage);
				})();

				const renderEventsText = (() => {})();
			})();

			const renderLocationContainer = (() => {
				console.log('location');
			})();
		})();
	};
	return {
		renderAboutPage,
	};
})();

export { aboutPageController };
