const contactPageController = (() => {
	const renderContactContainer = () => {
		return (document.querySelector('#container').innerText =
			'Hello from contact.js!');
	};
	return {
		renderContactContainer,
	};
})();

export { contactPageController };
