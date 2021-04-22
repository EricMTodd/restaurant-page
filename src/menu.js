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
					<div id='belgian-ale-title' class='secondary-text'>Belgian Ale | 8.00%</div>
					<div class='secondary-text price'>$7.50</div>
				`;
				document
					.querySelector('#drinks-container')
					.appendChild(belgianAleContainer);
			})();

			const renderIndiaPaleAle = (() => {
				let indiaPaleAleContainer = document.createElement('div');
				indiaPaleAleContainer.id = 'india-pale-ale-container';
				indiaPaleAleContainer.innerHTML = `
					<div id='india-pale-ale-title' class='secondary-text'>India Pale Ale | 6.5%</div>
					<div class='secondary-text price'>$6.00</div>
				`;
				document
					.querySelector('#drinks-container')
					.appendChild(indiaPaleAleContainer);
			})();

			const renderPilsner = (() => {
				let pilsnerContainer = document.createElement('div');
				pilsnerContainer.id = 'pilsner-container';
				pilsnerContainer.innerHTML = `
					<div id='pilsner-title' class='secondary-text'>Pilsner | 5.0%</div>
					<div class='secondary-text price'>$5.50</div>
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
					<div class='secondary-text price'>$4.00</div>
				`;
				startersContainer.appendChild(friedPicklesContainer);
			})();

			const renderJalapenoPoppers = (() => {
				let jalapenoPoppersContainer = document.createElement('div');
				jalapenoPoppersContainer.id = 'jalapeno-poppers-container';
				jalapenoPoppersContainer.innerHTML = `
					<div id='jalapeno-poppers-title' class='secondary-text'>Jalapeno Poppers</div>
					<div class='secondary-text price'>$6.00</div>
				`;
				startersContainer.appendChild(jalapenoPoppersContainer);
			})();

			const renderBloomingOnion = (() => {
				let bloomingOnionContainer = document.createElement('div');
				bloomingOnionContainer.id = 'blooming-onion-container';
				bloomingOnionContainer.innerHTML = `
					<div id='blooming-onion-title' class='secondary-text'>Blooming Onion</div>
					<div class='secondary-text price'>$8.00</div>
				`;
				startersContainer.appendChild(bloomingOnionContainer);
			})();
		})();
	};

	return {
		renderMenuPage,
	};
})();

export { menuPageController };
