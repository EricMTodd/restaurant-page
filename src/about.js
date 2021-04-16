const aboutPageController = (() => {
	const renderAboutContainer = () => {
		let container = document.querySelector('#container');

		const createAboutHeader = (() => {
			let headerText = 'About Us';
			if (!document.querySelector('#container-header')) {
				let containerHeader = document.createElement('div');
				containerHeader.id = 'container-header';
				containerHeader.className = 'primary-text';
				containerHeader.innerText = headerText;
				container.appendChild(containerHeader);
			} else {
				document.querySelector('#container-header').innerText = headerText;
			}
		})();

		const createAboutBody = (() => {
			let bodyText = `Located in the Docks District of Morath, The Boozy Badger is a must visit for any sea-weary sailor. With fine drink, food and good company, it's the best spot you can spend your shore leave!`;
			if (!document.querySelector('#container-body')) {
				let containerBody = document.createElement('div');
				containerBody.id = 'container-body';
				containerBody.className = 'secondary-text';
				container.appendChild(containerBody);
			}
			document.querySelector('#container-body').innerText = bodyText;
		})();
	};

	return {
		renderAboutContainer,
	};
})();

export { aboutPageController };
