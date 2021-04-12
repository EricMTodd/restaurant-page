import { coreContentController as core } from './core';

const theBoozyBadger = (() => {
	const initializeLandingPage = (() => {
		core.createHeader();
		core.createTitle();
		core.createTagline();
		core.createNav();
		core.createFooter();
	})();
	return {};
})();
