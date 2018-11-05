export default class MobileMenu{

	constructor(toggle,menu){
		this.menuButton = document.querySelector(toggle);
		this.menuList = document.querySelector(menu);
		this.addEvent = this.addEvent.bind(this);
	}

	addEvent(event){
		event.preventDefault();
		this.menuButton.classList.toggle("ativo");
		this.menuList.classList.add("ativo");

		if(!this.menuButton.classList.contains("ativo")){
			this.menuList.classList.remove("ativo");
		}
	}

	init(){
		if(this.menuButton && this.menuList){
			this.menuButton.addEventListener('click', this.addEvent);
		}
	}

}
