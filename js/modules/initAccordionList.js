function initAccordionList(){
	const accordionList = document.querySelectorAll('.faq-lista dt');
	accordionList[0].classList.add('ativo');
	accordionList[0].nextElementSibling.classList.add('ativo');

	accordionList.forEach(item => {
		item.addEventListener('click', (e) => {
			let target = e.currentTarget;
			target.classList.toggle('ativo');
			target.nextElementSibling.classList.toggle('ativo');
		});
	});
}

export default initAccordionList;