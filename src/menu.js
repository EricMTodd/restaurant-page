const menuPageController = (() => {
	const renderMenuContainer = () => {
		let container = document.querySelector('#container');

		const createMenuHeader = (() => {
			let headerText = 'Our Menu';
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

		const createMenuBody = (() => {
			let bodyText = `This is the menu!`;
			if (!document.querySelector('#container-body')) {
				let containerBody = document.createElement('div');
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
		renderMenuContainer,
	};
})();

export { menuPageController };
