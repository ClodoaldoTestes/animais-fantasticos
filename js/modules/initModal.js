function initModal(){
	const abrirModal = document.querySelector('.abrir-modal');
	const fecharModal = document.querySelector('.fechar-modal');
	const modalContainer = document.querySelector('.modal-container');

	abrirModal.addEventListener('click', (e) => {
		e.preventDefault();
		modalContainer.classList.add('ativo');
	});

	fecharModal.addEventListener('click', (e) => {
		e.preventDefault();
		modalContainer.classList.remove('ativo');
	});

	modalContainer.addEventListener('click', (e) => {
		if(e.target == modalContainer){
			modalContainer.classList.remove('ativo');
		}
	});

}

export default initModal;