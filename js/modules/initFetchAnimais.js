function initFetchAnimais(){
	async function fetchAnimais(url){
		try{	
			const response = await fetch(url);
			const animais = await response.json();
			const numerosGrid = document.querySelector('.numeros-grid');

			animais.forEach(animal => {
				const divAnimal = createAnimal(animal);
				numerosGrid.appendChild(divAnimal);
			});
		}

		catch{
			console.log(Error('não foi possível buscar os animais'))
		}
	}

	function createAnimal(animal){
		const div = document.createElement('div');
		div.classList.add('numero-animal');

		div.innerHTML = `
			<h3>${animal.nome}</h3>
      <span>${animal.total}</span>
		`

		return div;
	}

	fetchAnimais('./animais.json');
}

export default initFetchAnimais;