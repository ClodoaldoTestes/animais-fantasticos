import ScrollLink from './modules/ScrollLink.js';
import NavigationTabs from './modules/NavigationTabs.js';
import Modal from './modules/Modal.js';
import initAccordionList from './modules/initAccordionList.js';
import dropdownMenu from './modules/dropdownMenu.js';
import initMobileMenu from './modules/initMobileMenu.js';
import initFetchAnimais from './modules/initFetchAnimais.js';
import initFetchBitcoin from './modules/initFetchBitcoin.js';

const scrollLink = new ScrollLink('.menu a[href^="#"]');
scrollLink.init();

const navigationTabs = new NavigationTabs('.animais-lista li', '.animais-descricao section');
navigationTabs.init();

const modal = new Modal('.abrir-modal', '.fechar-modal', '.modal-container');
modal.init();

initAccordionList();
dropdownMenu();
initMobileMenu();
initFetchAnimais();
initFetchBitcoin();

