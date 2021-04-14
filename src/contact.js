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
		if (!document.querySelector('#container-body')) {
			let containerBody = document.createElement('p');
			containerBody.id = 'container-body';
			containerBody.className = 'secondary-text';
			containerBody.innerText = `This is the contact info.`;
			container.appendChild(containerBody);
		} else {
			let containerBody = document.querySelector('#container-body');
			containerBody.innerText = `This is the contact info.`;
		}
	};
	return {
		renderContactContainer,
	};
})();

export { contactPageController };
