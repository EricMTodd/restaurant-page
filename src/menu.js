const menuPageController = (() => {
	const renderMenuPage = () => {
		let pageBody = document.querySelector('#page-body');
		pageBody.innerHTML = '';
		const renderMenuPageTitle = (() => {
			document.querySelector('#page-title').innerText = 'Our Menu';
		})();
	};
	return {
		renderMenuPage,
	};
})();

export { menuPageController };
