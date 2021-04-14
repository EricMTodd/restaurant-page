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
	};
	return {
		renderMenuContainer,
	};
})();

export { menuPageController };
