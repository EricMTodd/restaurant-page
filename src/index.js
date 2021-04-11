import { landingPageController as lpc } from './landing-page';

const initializeLandingPage = (() => {
	lpc.createHeader();
	lpc.createTitle();
	lpc.createTagline();
	lpc.createFooter();
})();
