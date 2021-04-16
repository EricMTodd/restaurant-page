import { aboutPageController as about } from './about';
// import { contactPageController as contact } from './contact';
// import { menuPageController as menu } from './menu';

const indexController = (() => {
	const renderHeader = (() => {
		let header = document.createElement('div');
		header.id = 'header';
		document.querySelector('#content').appendChild(header);
	})();

	const renderTitle = (() => {
		let title = document.createElement('div');
		title.id = 'title';
		header.className = 'primary-text';
		title.innerText = 'The Boozy Badger';
		document.querySelector('#header').appendChild(title);
	})();

	const renderTagline = (() => {
		let tagline = document.createElement('div');
		tagline.id = 'tagline';
		tagline.className = 'secondary-text';
		tagline.innerText = 'Fine Brews and Crews';
		document.querySelector('#header').appendChild(tagline);
	})();

	const renderNav = (() => {
		let nav = document.createElement('div');
		nav.id = 'nav';
		document.querySelector('#content').appendChild(nav);

		const renderAboutLink = (() => {
			let aboutLink = document.createElement('a');
			aboutLink.id = 'about-link';
			aboutLink.className = 'secondary-text';
			aboutLink.innerText = 'About';
			// aboutLink.addEventListener('click', (e) => about.renderAboutContainer());
			aboutLink.addEventListener('click', (e) => console.log('aboutLink'));
			nav.appendChild(aboutLink);
		})();

		const renderContactLink = (() => {
			let contactLink = document.createElement('a');
			contactLink.id = 'contact-link';
			contactLink.className = 'secondary-text';
			contactLink.innerText = 'Contact';
			// contactLink.addEventListener('click', (e) =>
			// 	contact.renderContactContainer()
			// );
			contactLink.addEventListener('click', (e) => console.log('contactLink'));

			nav.appendChild(contactLink);
		})();

		const renderMenuLik = (() => {
			let menuLink = document.createElement('a');
			menuLink.id = 'menu-link';
			menuLink.className = 'secondary-text';
			menuLink.innerText = 'Menu';
			// menuLink.addEventListener('click', (e) => menu.renderMenuContainer());
			menuLink.addEventListener('click', (e) => console.log('menuLink'));

			nav.appendChild(menuLink);
		})();
	})();

	const renderDivider = (() => {
		let img = document.createElement('img');
		img.id = 'divider';
		document.querySelector('#content').appendChild(img);
	})();

	const renderPageTitle = (() => {
		let pageTitle = document.createElement('div');
		pageTitle.id = 'page-title';
		pageTitle.className = 'primary-text';
		document.querySelector('#content').appendChild(pageTitle);
	})();

	const renderPageBody = (() => {
		let pageBody = document.createElement('div');
		pageBody.id = 'page-body';
		pageBody.className = 'secondary-text';
		document.querySelector('#content').appendChild(pageBody);
		about.renderAboutPage();
	})();

	const renderFooter = (() => {
		let footer = document.createElement('div');
		footer.id = 'footer';

		let footerSpan = document.createElement('span');
		footerSpan.className = 'secondary-text';
		footerSpan.innerText = 'Made with ❤️ by ';
		footer.appendChild(footerSpan);

		let gitHubLink = document.createElement('a');
		gitHubLink.target = '_blank';
		gitHubLink.className = 'secondary-text';
		gitHubLink.innerText = 'Eric M. Todd';
		gitHubLink.href = 'https://github.com/EricMTodd';
		footer.appendChild(gitHubLink);
		document.body.appendChild(footer);
	})();

	return {};
})();
