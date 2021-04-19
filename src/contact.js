const contactPageController = (() => {
	const renderContactPage = () => {
		let pageBody = document.querySelector('#page-body');
		pageBody.innerHTML = '';
		const renderContactPageTitle = (() => {
			document.querySelector('#page-title').innerText = 'Contact Us';
		})();
	};
	return {
		renderContactPage,
	};
})();

export { contactPageController };
