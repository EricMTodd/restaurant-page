const menuPageController = (() => {
	const renderMenuPage = () => {
		let pageBody = document.querySelector('#page-body');
		pageBody.innerHTML = '';
		const renderMenuPageTitle = (() => {
			document.querySelector('#page-title').innerText = 'Our Menu';
		})();

		const renderDrinksMenu = (() => {
			let drinksContainer = document.createElement('div');
			drinksContainer.id = 'drinks-container';
			drinksContainer.className = 'primary-text';
			drinksContainer.innerText = 'Drinks';
			pageBody.appendChild(drinksContainer);
		})();

		const renderBelgianAleContainer = (() => {
			let belgianAleContainer = document.createElement('div');
			belgianAleContainer.id = 'belgian-ale-container';
			belgianAleContainer.innerHTML = `
				<div id='belgian-ale-title' class='secondary-text'>Belgian Ale</div>
				<div class='secondary-text'>8.00% ABV | $7.50</div>
				`;
			document
				.querySelector('#drinks-container')
				.appendChild(belgianAleContainer);
		})();

		const renderIndiaPaleAle = (() => {
			let indiaPaleAleContainer = document.createElement('div');
			indiaPaleAleContainer.id = 'india-pale-ale-container';
			indiaPaleAleContainer.innerHTML = `
				<div id='india-pale-ale-title' class='secondary-text'>India Pale Ale</div>
				<div class='secondary-text'>6.5% ABV | $6.00</div>
				`;
			document
				.querySelector('#drinks-container')
				.appendChild(indiaPaleAleContainer);
		})();
	};
	return {
		renderMenuPage,
	};
})();

export { menuPageController };
