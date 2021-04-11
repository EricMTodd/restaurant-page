const landingPageController = (() => {
	const createHeader = () => {
		let header = document.createElement('div');
		header.id = 'header';
		console.log('createHeader');
		document.querySelector('#content').appendChild(header);
	};

	const createTitle = () => {
		let title = document.createElement('div');
		title.id = 'title';
		title.innerText = 'The Boozy Badger';
		console.log('createTitle');
		document.querySelector('#header').appendChild(title);
	};

	const createTagline = () => {
		let tagline = document.createElement('div');
		tagline.id = 'tagline';
		tagline.innerText = 'Fine Brews and Crews';
		console.log('createTagline');
		document.querySelector('#header').appendChild(tagline);
	};

	const createFooter = () => {
		let footer = document.createElement('div');
		footer.id = 'footer';
		footer.innerText = 'Made with ❤️ by Eric M. Todd';
		console.log('createFooter');
		document.querySelector('#content').appendChild(footer);
	};

	return {
		createHeader,
		createTitle,
		createTagline,
		createFooter,
	};
})();

export { landingPageController };
