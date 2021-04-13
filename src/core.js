import { aboutPageController as about } from './about';
import { contactPageController as contact } from './contact';
import { menuPageController as menu } from './menu';

const coreContentController = (() => {
	const createHeader = () => {
		let header = document.createElement('div');
		header.id = 'header';
		document.querySelector('#content').appendChild(header);
	};

	const createTitle = () => {
		let title = document.createElement('div');
		title.id = 'title';
		header.className = 'primary-text';
		title.innerText = 'The Boozy Badger';
		document.querySelector('#header').appendChild(title);
	};

	const createTagline = () => {
		let tagline = document.createElement('div');
		tagline.id = 'tagline';
		tagline.className = 'secondary-text';
		tagline.innerText = 'Fine Brews and Crews';
		document.querySelector('#header').appendChild(tagline);
	};

	const createNav = () => {
		let nav = document.createElement('div');
		nav.id = 'nav';
		document.querySelector('#content').appendChild(nav);

		let aboutLink = document.createElement('a');
		aboutLink.id = 'about-link';
		aboutLink.className = 'secondary-text';
		aboutLink.innerText = 'About Us';
		aboutLink.addEventListener('click', (e) => about.renderAboutContainer());
		nav.appendChild(aboutLink);

		let contactLink = document.createElement('a');
		contactLink.id = 'contact-link';
		contactLink.className = 'secondary-text';
		contactLink.innerText = 'Contact Us';
		contactLink.addEventListener('click', (e) =>
			contact.renderContactContainer()
		);
		nav.appendChild(contactLink);

		let menuLink = document.createElement('a');
		menuLink.id = 'menu-link';
		menuLink.className = 'secondary-text';
		menuLink.innerText = 'Our Menu';
		menuLink.addEventListener('click', (e) => menu.renderMenuContainer());
		nav.appendChild(menuLink);
	};

	const createContainer = () => {
		let container = document.createElement('div');
		container.id = 'container';
		container.className = 'secondary-text';
		document.querySelector('#content').appendChild(container);
		about.renderAboutContainer();
	};

	const createFooter = () => {
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
	};

	return {
		createHeader,
		createTitle,
		createTagline,
		createNav,
		createContainer,
		createFooter,
	};
})();

export { coreContentController };
