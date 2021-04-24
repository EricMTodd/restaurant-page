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
				servicesContainer.className = 'secondary-text primary-container';
				servicesContainer.innerHTML = `<img id='services-image' src='https://i.imgur.com/i9chLLX.jpg' > Services are available 24 hours. Room and board with plenty of fine company!`;
				pageBody.appendChild(servicesContainer);
			})();

			const renderEventsContainer = (() => {
				let eventsContainer = document.createElement('div');
				eventsContainer.className = 'secondary-text primary-container';
				eventsContainer.innerHTML = `<img id='events-image' src='https://i.imgur.com/p78gZTe.jpg' > Events are held bi-weekly hiring local talent only. Everything from minstrels to exotic dancers.`;
				pageBody.appendChild(eventsContainer);
			})();

			const renderLocationContainer = (() => {
				let locationContainer = document.createElement('div');
				locationContainer.className = 'secondary-text primary-container';
				locationContainer.innerHTML = `<img id='location-image' src='https://i.imgur.com/je2aOQo.jpg' > The Boozy Badger is located in the docks district in the city of Morath on the southern tip on the Isle of Valkenkrig.`;
				pageBody.appendChild(locationContainer);
			})();
		})();
	};

	return {
		renderAboutPage,
	};
})();

export { aboutPageController };
