function scrollLink(){
	const links = document.querySelectorAll('.menu a[href^="#"]');
	links.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			let href = e.currentTarget.getAttribute('href');
			let section = document.querySelector(href);
			window.scrollTo({
				top: section.offsetTop,
				behavior: 'smooth'
			})
		})
	})
}

export default scrollLink;