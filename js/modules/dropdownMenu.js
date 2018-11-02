const events = ['touchstart', 'click'];
const html = document.documentElement;

function outsideClick(element, events, callback){
	const outside = 'data-outside';
	if(!element.hasAttribute(outside)){
		events.forEach(userEvent => {
			html.addEventListener(userEvent,handleOutsideClick);
		});
		element.setAttribute(outside, '');
	}

	function handleOutsideClick(e){
		if(!element.contains(e.target)){
			element.removeAttribute(outside);
			events.forEach(userEvent => {
				html.removeEventListener(userEvent, handleOutsideClick);
			});
			callback();
		}
	}
}

function handleClick(e){
	e.preventDefault();
	let target = e.currentTarget;
	target.classList.add('ativo');
	outsideClick(target, events, () => target.classList.remove('ativo'));
}

function dropdownMenu(){
	const dropdown = document.querySelector('.dropdown-container');
	events.forEach(userEvent => {
		dropdown.addEventListener(userEvent, handleClick);
	});
}

export default dropdownMenu;