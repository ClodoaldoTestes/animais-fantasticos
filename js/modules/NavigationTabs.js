export default class NavigationTabs{
	constructor(menu,content){
		this.tabsMenu = document.querySelectorAll(menu);
		this.tabsContent = document.querySelectorAll(content);
	}

	activeTab(index){
		this.tabsContent.forEach(content => content.classList.remove('ativo'));
		this.tabsContent[index].classList.add('ativo');
	}

	addEvent(){
		this.tabsMenu.forEach((tab,index) => {
			tab.addEventListener('click', () => this.activeTab(index));
		});
	}

	init(){
		if(this.tabsMenu.length && this.tabsContent.length){
			this.activeTab(0);
			this.addEvent();
		}
	}
}
