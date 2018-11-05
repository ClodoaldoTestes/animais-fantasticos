export default class AccordionList{
	constructor(accordion){
		this.accordionList = document.querySelectorAll(accordion);
		this.addEvent = this.addEvent.bind(this);
	}
	
	addEvent(event){
		let target = event.currentTarget;
		target.classList.toggle('ativo');
		target.nextElementSibling.classList.toggle('ativo');
	}

	init(){
		this.accordionList.forEach(item => {
			item.addEventListener('click', this.addEvent);
		});
	}
}
