    // Обработчик клика для переключения выпадающего меню
    const toggleButton = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-content');
	const liButton = document.querySelector('.f_list_item');
    
    toggleButton.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Закрываем меню при клике на элемент списка
    dropdownMenu.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            dropdownMenu.style.display = 'none';  // Убираем видимость меню после клика
        });
    });