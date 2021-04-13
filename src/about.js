const aboutPageController = (() => {
	const renderAboutContainer = () => {
		return (document.querySelector('#container').innerText =
			'Hello from about.js!');
	};
	return {
		renderAboutContainer,
	};
})();

export { aboutPageController };
