const contactPageController = (() => {
	const renderContactContainer = () => {
		let container = document.querySelector('#container');
		const createContactHeader = (() => {
			let headerText = 'Contact Us';
			if (!document.querySelector('#container-header')) {
				let containerHeader = document.createElement('h1');
				containerHeader.id = 'container-header';
				containerHeader.className = 'primary-text';
				containerHeader.innerText = headerText;
				container.appendChild(containerHeader);
			} else {
				let containerHeader = document.querySelector('#container-header');
				containerHeader.innerText = headerText;
			}
		})();
		const createContactBody = (() => {
			let bodyText = `This is the contact info.`;
			if (!document.querySelector('#container-body')) {
				let containerBody = document.createElement('p');
				containerBody.id = 'container-body';
				containerBody.className = 'secondary-text';
				containerBody.innerText = bodyText;
				container.appendChild(containerBody);
			} else {
				let containerBody = document.querySelector('#container-body');
				containerBody.innerText = bodyText;
			}
		})();
	};
	return {
		renderContactContainer,
	};
})();

export { contactPageController };
