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
				console.log('events');
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
