const landingPageController = (() => {
	const applyLayer = () => {
		let layer = document.createElement('div');
		layer.id = 'layer';
		document.querySelector('#content').appendChild(layer);
	};

	const createHeader = () => {
		let header = document.createElement('div');
		header.id = 'header';
		document.querySelector('#layer').appendChild(header);
	};

	const createTitle = () => {
		let title = document.createElement('div');
		title.id = 'title';
		title.innerText = 'The Boozy Badger';
		document.querySelector('#header').appendChild(title);
	};

	const createTagline = () => {
		let tagline = document.createElement('div');
		tagline.id = 'tagline';
		tagline.innerText = 'Fine Brews and Crews';
		document.querySelector('#header').appendChild(tagline);
	};

	const createFooter = () => {
		let footer = document.createElement('div');
		footer.id = 'footer';
		footer.innerText = 'Made with ❤️ by Eric M. Todd';
		document.querySelector('#content').appendChild(footer);
	};

	return {
		applyLayer,
		createHeader,
		createTitle,
		createTagline,
		createFooter,
	};
})();

export { landingPageController };
