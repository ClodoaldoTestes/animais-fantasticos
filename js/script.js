import ScrollLink from './modules/scrollLink.js';
import initNavigationTabs from './modules/initNavigationTabs.js';
import initAccordionList from './modules/initAccordionList.js';
import initModal from './modules/initModal.js';
import dropdownMenu from './modules/dropdownMenu.js';
import initMobileMenu from './modules/initMobileMenu.js';
import initFetchAnimais from './modules/initFetchAnimais.js';
import initFetchBitcoin from './modules/initFetchBitcoin.js';

const scrollLink = new ScrollLink('.menu a[href^="#"]');
scrollLink.init();

initNavigationTabs();
initAccordionList();
initModal();
dropdownMenu();
initMobileMenu();
initFetchAnimais();
initFetchBitcoin();
