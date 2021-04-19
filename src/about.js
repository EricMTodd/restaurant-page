const aboutPageController = (() => {
	const renderAboutPage = () => {
		let pageBody = document.querySelector('#page-body');
		const renderAboutPageTitle = (() => {
			document.querySelector('#page-title').innerText = 'About us';
		})();

		const renderAboutPageBody = (() => {
			const renderServicesContainer = (() => {
				let servicesContainer = document.createElement('div');
				servicesContainer.id = 'services-container';
				servicesContainer.className = 'secondary-text';
				pageBody.appendChild(servicesContainer);

				const renderServicesImage = (() => {
					let servicesImage = document.createElement('img');
					servicesImage.id = 'services-image';
					servicesImage.src = '../dist/images/about/drinking-pirates1.jpg';
					servicesImage.alt = 'services-image';
					servicesContainer.appendChild(servicesImage);
				})();

				const renderServicesText = (() => {
					let servicesText = document.createElement('div');
					servicesText.id = 'services-text';
					servicesText.innerText =
						'Services are available 24 hours. Room and board with plenty of fine company!';
					servicesContainer.appendChild(servicesText);
				})();
			})();

			const renderEventsContainer = (() => {
				let eventsContainer = document.createElement('div');
				eventsContainer.id = 'events-container';
				eventsContainer.className = 'secondary-text';
				pageBody.appendChild(eventsContainer);

				const renderEventsImage = (() => {
					let eventsImage = document.createElement('img');
					eventsImage.id = 'events-image';
					eventsImage.src = '../dist/images/about/drinking-pirates2.jpg';
					eventsImage.alt = 'events-image';
					eventsContainer.appendChild(eventsImage);
				})();

				const renderEventsText = (() => {
					let eventsText = document.createElement('div');
					eventsText.id = 'events-text';
					eventsText.innerText =
						'Events are held bi-weekly hiring local talent only. Everything from minstrels to exotic dancers';
					eventsContainer.appendChild(eventsText);
				})();
			})();

			const renderLocationContainer = (() => {
				let locationContainer = document.createElement('div');
				locationContainer.id = 'location-container';
				locationContainer.className = 'secondary-text';
				pageBody.appendChild(locationContainer);

				const renderLocationImage = (() => {
					let locationImage = document.createElement('img');
					locationImage.id = 'location-image';
					locationImage.src = '../dist/images/about/drinking-pirates3.jpg';
					locationImage.alt = 'location-image';
					locationContainer.appendChild(locationImage);
				})();

				const renderLocationText = (() => {
					let locationText = document.createElement('div');
					locationText.id = 'location-text';
					locationText.className = 'secondary-text';
					locationText.innerText =
						'The Boozy Badger is located in the docks district in the city of Morath on the southern tip of the Isle of Valkenkrig.';
					locationContainer.appendChild(locationText);
				})();
			})();
		})();
	};
	return {
		renderAboutPage,
	};
})();

export { aboutPageController };
