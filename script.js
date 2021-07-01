function toggleMenu() {
	const menu = document.getElementById('menu');

	menu.addEventListener('click', function() {
		for (let i = 0; i < 4; i++) {
			menuItem = document.querySelectorAll('li')[i + 1];
			menuItem.classList.toggle('hidden');
		}
	});
}
