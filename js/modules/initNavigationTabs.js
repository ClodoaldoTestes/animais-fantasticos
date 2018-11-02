function initNavigationTabs(){
	const tabsMenu = document.querySelectorAll('.animais-lista li');
	const tabsContent = document.querySelectorAll('.animais-descricao section');

	tabsContent[0].classList.add('ativo');

	tabsMenu.forEach((tab,index) => {
		tab.addEventListener('click', () => {
			tabsContent.forEach(content => content.classList.remove('ativo'));
			tabsContent[index].classList.add('ativo');
		});
	});
}

export default initNavigationTabs;