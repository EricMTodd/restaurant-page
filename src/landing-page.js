const landingPageController = (() => {
	const createHeader = () => {
		let header = document.createElement('div');
		header.id = 'header';
		document.querySelector('#content').appendChild(header);
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
		let footerSpan = document.createElement('span');
		footerSpan.innerText = 'Made with ❤️ by ';
		footerSpan.id = 'footerSpan';
		footer.appendChild(footerSpan);
		let gitHubLink = document.createElement('a');
		gitHubLink.innerText = 'Eric M. Todd';
		gitHubLink.href = 'https://github.com/EricMTodd';
		footer.appendChild(gitHubLink);
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
