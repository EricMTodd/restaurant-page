const aboutPageController = (() => {
	const renderAboutContainer = () => {
		if (!document.querySelector('#container-header')) {
			(() => {
				let container = document.querySelector('#container');
				let containerHeader = document.createElement('h1');
				containerHeader.id = 'container-header';
				containerHeader.className = 'primary-text';
				containerHeader.innerText = 'About Us';
				container.appendChild(containerHeader);
			})();
		} else {
			let containerHeader = document.querySelector('#container-header');
			containerHeader.innerText = 'About Us';
		}
	};
	return {
		renderAboutContainer,
	};
})();

export { aboutPageController };
