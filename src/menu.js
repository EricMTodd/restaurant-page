const menuPageController = (() => {
	const renderMenuPage = () => {
		let pageBody = document.querySelector('#page-body');
		pageBody.innerHTML = '';
		const renderMenuPageTitle = (() => {
			document.querySelector('#page-title').innerText = 'Our Menu';
		})();

		const renderDrinksContainer = (() => {
			let drinksContainer = document.createElement('div');
			drinksContainer.id = 'drinks-container';
			pageBody.appendChild(drinksContainer);

			const renderDrinksMenuTitle = (() => {
				let drinksMenuTitle = document.createElement('div');
				drinksMenuTitle.id = 'drinks-menu-title';
				drinksMenuTitle.className = 'primary-text';
				drinksMenuTitle.innerText = 'Drinks';
				document
					.querySelector('#drinks-container')
					.appendChild(drinksMenuTitle);
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

			const renderPilsner = (() => {
				let pilsnerContainer = document.createElement('div');
				pilsnerContainer.id = 'pilsner-container';
				pilsnerContainer.innerHTML = `
					<div id='pilsner-title' class='secondary-text'>Pilsner</div>
					<div class='secondary-text'>5.0% | $5.50</div>
					`;
				document
					.querySelector('#drinks-container')
					.appendChild(pilsnerContainer);
			})();
		})();

		const renderStartersContainer = (() => {
			let startersContainer = document.createElement('div');
			startersContainer.id = 'starters-container';
			pageBody.appendChild(startersContainer);

			const renderStartersTitle = (() => {
				let startersTitle = document.createElement('div');
				startersTitle.id = 'starters-title';
				startersTitle.className = 'primary-text';
				startersTitle.innerText = 'Starters';
				startersContainer.appendChild(startersTitle);
			})();

			const renderFriedPickles = (() => {
				let friedPicklesContainer = document.createElement('div');
				friedPicklesContainer.id = 'fried-pickles-container';

				friedPicklesContainer.innerHTML = `
				<div id='fried-pickles-title' class='secondary-text'>Fried Pickles</div>
				<div class='secondary-text'>$4.00</div>
				`;
				startersContainer.appendChild(friedPicklesContainer);
			})();
		})();
	};

	return {
		renderMenuPage,
	};
})();

export { menuPageController };
