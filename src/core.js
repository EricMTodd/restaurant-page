import { aboutPageController } from './about';
import { contactPageController } from './contact';
import { menuPageController } from './menu';

const coreContentController = (() => {
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

	const createNav = () => {
		let nav = document.createElement('div');
		nav.id = 'nav';
		document.querySelector('#content').appendChild(nav);

		let aboutLink = document.createElement('a');
		aboutLink.id = 'about-link';
		aboutLink.innerText = 'About Us';
		aboutLink.addEventListener('click', (e) =>
			aboutPageController.renderAboutContainer()
		);
		nav.appendChild(aboutLink);

		let contactLink = document.createElement('a');
		contactLink.id = 'contact-link';
		contactLink.innerText = 'Contact Us';
		contactLink.addEventListener('click', (e) =>
			contactPageController.renderContactContainer()
		);
		nav.appendChild(contactLink);

		let menuLink = document.createElement('a');
		menuLink.id = 'menu-link';
		menuLink.innerText = 'Our Menu';
		menuLink.addEventListener('click', (e) =>
			menuPageController.renderMenuContainer()
		);
		nav.appendChild(menuLink);
	};

	const createFooter = () => {
		let footer = document.createElement('div');
		footer.id = 'footer';

		let footerSpan = document.createElement('span');
		footerSpan.innerText = 'Made with ❤️ by ';
		footer.appendChild(footerSpan);

		let gitHubLink = document.createElement('a');
		gitHubLink.target = '_blank';
		gitHubLink.innerText = 'Eric M. Todd';
		gitHubLink.href = 'https://github.com/EricMTodd';
		footer.appendChild(gitHubLink);
		document.body.appendChild(footer);
	};

	return {
		createHeader,
		createTitle,
		createTagline,
		createNav,
		createFooter,
	};
})();

export { coreContentController };
