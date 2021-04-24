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
			drinksContainer.className = 'primary-container';
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
				belgianAleContainer.className = 'secondary-text menu-item-container';
				belgianAleContainer.innerHTML = `
					<div class='menu-item-title'>Belgian Ale | 8.00%</div>
					<div class='price'>$7.50</div>
				`;
				document
					.querySelector('#drinks-container')
					.appendChild(belgianAleContainer);
			})();

			const renderIndiaPaleAle = (() => {
				let indiaPaleAleContainer = document.createElement('div');
				indiaPaleAleContainer.id = 'india-pale-ale-container';
				indiaPaleAleContainer.className = 'secondary-text menu-item-container';
				indiaPaleAleContainer.innerHTML = `
					<div class='menu-item-title'>India Pale Ale | 6.5%</div>
					<div class='price'>$6.00</div>
				`;
				document
					.querySelector('#drinks-container')
					.appendChild(indiaPaleAleContainer);
			})();

			const renderPilsner = (() => {
				let pilsnerContainer = document.createElement('div');
				pilsnerContainer.id = 'pilsner-container';
				pilsnerContainer.className = 'secondary-text menu-item-container';
				pilsnerContainer.innerHTML = `
					<div class='menu-item-title'>Pilsner | 5.0%</div>
					<div class='price'>$5.50</div>
				`;
				document
					.querySelector('#drinks-container')
					.appendChild(pilsnerContainer);
			})();
		})();

		const renderStartersContainer = (() => {
			let startersContainer = document.createElement('div');
			startersContainer.id = 'starters-container';
			startersContainer.className = 'primary-container';
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
				friedPicklesContainer.className = 'secondary-text menu-item-container';
				friedPicklesContainer.innerHTML = `
					<div class='menu-item-title'>Fried Pickles</div>
					<div class='price'>$4.00</div>
				`;
				startersContainer.appendChild(friedPicklesContainer);
			})();

			const renderJalapenoPoppers = (() => {
				let jalapenoPoppersContainer = document.createElement('div');
				jalapenoPoppersContainer.id = 'jalapeno-poppers-container';
				jalapenoPoppersContainer.className =
					'secondary-text menu-item-container';
				jalapenoPoppersContainer.innerHTML = `
					<div class='menu-item-title'>Jalapeno Poppers</div>
					<div class='price'>$6.00</div>
				`;
				startersContainer.appendChild(jalapenoPoppersContainer);
			})();

			const renderBloomingOnion = (() => {
				let bloomingOnionContainer = document.createElement('div');
				bloomingOnionContainer.id = 'blooming-onion-container';
				bloomingOnionContainer.className = 'secondary-text menu-item-container';
				bloomingOnionContainer.innerHTML = `
					<div class='menu-item-title'>Blooming Onion</div>
					<div class='price'>$8.00</div>
				`;
				startersContainer.appendChild(bloomingOnionContainer);
			})();
		})();

		const renderSandwichesContainer = (() => {
			let sandwichesContainer = document.createElement('div');
			sandwichesContainer.id = 'sandwiches-container';
			sandwichesContainer.className = 'primary-container';
			pageBody.appendChild(sandwichesContainer);

			const renderSandwichesTitle = (() => {
				let sandwichesTitle = document.createElement('div');
				sandwichesTitle.id = 'sandwiches-title';
				sandwichesTitle.className = 'primary-text';
				sandwichesTitle.innerText = 'Sandwiches';
				sandwichesContainer.appendChild(sandwichesTitle);
			})();

			const renderPastrami = (() => {
				let pastramiContainer = document.createElement('div');
				pastramiContainer.id = 'pastrami-container';
				pastramiContainer.className = 'secondary-text menu-item-container';
				pastramiContainer.innerHTML = `
					<div class='menu-item-title'>Pastrami</div>
					<div class='price'>$10.00</div>
				`;
				sandwichesContainer.appendChild(pastramiContainer);
			})();

			const renderChickenPesto = (() => {
				let chickenPestoContainer = document.createElement('div');
				chickenPestoContainer.id = 'chicken-pesto-container';
				chickenPestoContainer.className = 'secondary-text menu-item-container';
				chickenPestoContainer.innerHTML = `
					<div class='menu-item-title'>Chicken Pesto</div>
					<div class='price'>$11.00</div>
				`;
				sandwichesContainer.appendChild(chickenPestoContainer);
			})();

			const renderCheeseburger = (() => {
				let cheeseburgerContainer = document.createElement('div');
				cheeseburgerContainer.id = 'cheeseburger-container';
				cheeseburgerContainer.className = 'secondary-text menu-item-container';
				cheeseburgerContainer.innerHTML = `
					<div class='menu-item-title'>Cheeseburger</div>
					<div class='price'>$12.00</div>
				`;
				sandwichesContainer.appendChild(cheeseburgerContainer);
			})();
		})();
	};

	return {
		renderMenuPage,
	};
})();

export { menuPageController };
