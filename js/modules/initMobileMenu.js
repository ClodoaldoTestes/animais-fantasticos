function initMobileMenu(){
	const menuButton = document.querySelector(".btn-toggle");
	const menuList = document.querySelector("#menu");
	const events = ['click', 'touchstart'];

	events.forEach((userEvent) => {
		menuButton.addEventListener(userEvent, (e) => {
			e.preventDefault();
			menuButton.classList.toggle("ativo");
			menuList.classList.add("ativo");

			if(!menuButton.classList.contains("ativo")){
				menuList.classList.remove("ativo");
			}

		});
	})

}


export default initMobileMenu;