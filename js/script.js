import initNavigationTabs from './modules/initNavigationTabs.js';
import initAccordionList from './modules/initAccordionList.js';
import scrollLink from './modules/scrollLink.js';
import initModal from './modules/initModal.js';
import dropdownMenu from './modules/dropdownMenu.js';
import initMobileMenu from './modules/initMobileMenu.js';
import initFetchAnimais from './modules/initFetchAnimais.js';
import initFetchBitcoin from './modules/initFetchBitcoin.js';

window.addEventListener('load', () => {
	initNavigationTabs();
	initAccordionList();
	scrollLink();
	initModal();
	dropdownMenu();
	initMobileMenu();
	initFetchAnimais();
	initFetchBitcoin();
});

console.log('testando o webpack');