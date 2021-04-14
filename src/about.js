const aboutPageController = (() => {
	const renderAboutContainer = () => {
		let container = document.querySelector('#container');
		if (!document.querySelector('#container-header')) {
			let containerHeader = document.createElement('h1');
			containerHeader.id = 'container-header';
			containerHeader.className = 'primary-text';
			containerHeader.innerText = 'About Us';
			container.appendChild(containerHeader);
		} else {
			let containerHeader = document.querySelector('#container-header');
			containerHeader.innerText = 'About Us';
		}
		if (!document.querySelector('#container-body')) {
			let containerBody = document.createElement('p');
			containerBody.id = 'container-body';
			containerBody.className = 'secondary-text';
			containerBody.innerText = `Located in the Docks District of Morath, The Boozy Badger is a must visit for any sea-weary sailor. With fine drink, food and good company, it's the best spot you can spend your shore leave!`;
			container.appendChild(containerBody);
		} else {
			let containerBody = document.querySelector('#container-body');
			containerBody.innerText = `Located in the Docks District of Morath, The Boozy Badger is a must visit for any sea-weary sailor. With fine drink, food and good company, it's the best spot you can spend your shore leave!`;
		}
	};
	return {
		renderAboutContainer,
	};
})();

export { aboutPageController };
