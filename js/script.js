import ScrollLink from './modules/ScrollLink.js';
import NavigationTabs from './modules/NavigationTabs.js';
import Modal from './modules/Modal.js';
import MobileMenu from './modules/MobileMenu.js';
import AccordionList from './modules/AccordionList.js';
import dropdownMenu from './modules/dropdownMenu.js';
import initFetchAnimais from './modules/initFetchAnimais.js';
import initFetchBitcoin from './modules/initFetchBitcoin.js';

const scrollLink = new ScrollLink('.menu a[href^="#"]');
scrollLink.init();

const navigationTabs = new NavigationTabs('.animais-lista li', '.animais-descricao section');
navigationTabs.init();

const modal = new Modal('.abrir-modal', '.fechar-modal', '.modal-container');
modal.init();

const mobileMenu = new MobileMenu('.btn-toggle', '#menu');
mobileMenu.init();

const accordionList = new AccordionList('.faq-lista dt');
accordionList.init();

dropdownMenu();
initFetchAnimais();
initFetchBitcoin();


