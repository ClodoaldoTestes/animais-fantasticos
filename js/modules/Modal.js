export default class Modal{

	constructor(botaoAbrir, botaoFechar, modalContainer){
		this.botaoAbrir = document.querySelector(botaoAbrir);
		this.botaoFechar = document.querySelector(botaoFechar);
		this.modalContainer = document.querySelector(modalContainer);

		this.abrirModal = this.abrirModal.bind(this);
		this.fecharModal = this.fecharModal.bind(this);
		this.clickFora = this.clickFora.bind(this);
	}

	abrirModal(event){
		event.preventDefault();
		this.modalContainer.classList.add('ativo');
	}

	fecharModal(event){
		event.preventDefault();
		this.modalContainer.classList.remove('ativo');
	}

	clickFora(event){
		if(event.target == this.modalContainer){
			this.modalContainer.classList.remove('ativo');
		}
	}

	init(){
		if(this.botaoAbrir && this.botaoFechar && this.modalContainer){
			this.botaoAbrir.addEventListener('click', this.abrirModal);
			this.botaoFechar.addEventListener('click', this.fecharModal);
			this.modalContainer.addEventListener('click', this.clickFora);
		}
	}

}

