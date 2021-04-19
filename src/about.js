const aboutPageController = (() => {
	const renderAboutPage = () => {
		let pageBody = document.querySelector('#page-body');
		pageBody.innerHTML = '';
		const renderAboutPageTitle = (() => {
			document.querySelector('#page-title').innerText = 'About us';
		})();
		const renderAboutPageBody = (() => {
			const renderServicesContainer = (() => {
				let servicesContainer = document.createElement('div');
				servicesContainer.id = 'services-container';
				servicesContainer.className = 'secondary-text';
				servicesContainer.innerHTML = `<img id='services-image' src='../dist/images/about/drinking-pirates1.jpg' > Services are available 24 hours. Room and board with plenty of fine company!`;
				pageBody.appendChild(servicesContainer);
			})();

			const renderEventsContainer = (() => {
				let eventsContainer = document.createElement('div');
				eventsContainer.id = 'events-container';
				eventsContainer.className = 'secondary-text';
				eventsContainer.innerHTML = `<img id='events-image' src='../dist/images/about/drinking-pirates2.jpg' > Events are held bi-weekly hiring local talent only. Everything from minstrels to exotic dancers.`;
				pageBody.appendChild(eventsContainer);
			})();

			const renderLocationContainer = (() => {
				let locationContainer = document.createElement('div');
				locationContainer.id = 'location-container';
				locationContainer.className = 'secondary-text';
				locationContainer.innerHTML = `<img id='location-image' src='../dist/images/about/drinking-pirates3.jpg' > The Boozy Badger is located in the docks district in the city of Morath on the southern tip on the Isle of Valkenkrig.`;
				pageBody.appendChild(locationContainer);
			})();
		})();
	};

	return {
		renderAboutPage,
	};
})();

export { aboutPageController };
