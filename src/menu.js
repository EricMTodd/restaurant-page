const menuPageController = (() => {
	const renderMenuContainer = () => {
		return (document.querySelector('#container').innerText =
			'Hello from menu.js!');
	};
	return {
		renderMenuContainer,
	};
})();

export { menuPageController };
