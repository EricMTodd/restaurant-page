const menuPageController = (() => {
	const renderMenuContainer = () => {
		if (!document.querySelector('#container-header')) {
			let container = document.querySelector('#container');
			let containerHeader = document.createElement('h1');
			containerHeader.id = 'container-header';
			containerHeader.className = 'primary-text';
			containerHeader.innerText = 'Our Menu';
			container.appendChild(containerHeader);
		} else {
			let containerHeader = document.querySelector('#container-header');
			containerHeader.innerText = 'Our Menu';
		}
		if (!document.querySelector('#container-body')) {
			let containerBody = document.createElement('p');
			containerBody.id = 'container-body';
			containerBody.className = 'secondary-text';
			containerBody.innerText = `This is the menu!`;
			container.appendChild(containerBody);
		} else {
			let containerBody = document.querySelector('#container-body');
			containerBody.innerText = `This is the menu!`;
		}
	};
	return {
		renderMenuContainer,
	};
})();

export { menuPageController };
