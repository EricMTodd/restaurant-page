const contactPageController = (() => {
	const renderContactPage = () => {
		let pageBody = document.querySelector('#page-body');
		pageBody.innerHTML = '';
		const renderContactPageTitle = (() => {
			document.querySelector('#page-title').innerText = 'Contact us';
		})();

		const renderContactInformationContainer = (() => {
			let contactInformationContainer = document.createElement('div');
			contactInformationContainer.id = 'contact-information-container';
			contactInformationContainer.innerHTML = `<div>The Boozy Badger has a coop of trained carrier pidgeons. Just send a pidgeon and we will ensure it's safety and health is in good standing. Simply address the note to "Caitlyn" our coop keeper and she will handle all inquirys or requests.</div>`;
			pageBody.appendChild(contactInformationContainer);
		})();
	};
	return {
		renderContactPage,
	};
})();

export { contactPageController };
