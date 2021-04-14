const contactPageController = (() => {
	const renderContactContainer = () => {
		if (!document.querySelector('#container-header')) {
			let container = document.querySelector('#container');
			let containerHeader = document.createElement('h1');
			containerHeader.id = 'container-header';
			containerHeader.className = 'primary-text';
			containerHeader.innerText = 'Contact Us';
			container.appendChild(containerHeader);
		} else {
			let containerHeader = document.querySelector('#container-header');
			containerHeader.innerText = 'Contact Us';
		}
	};
	return {
		renderContactContainer,
	};
})();

export { contactPageController };
