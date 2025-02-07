// Get references to the menu toggle button and the dropdown menu
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

// Add event listener to the menu toggle button
menuToggle.addEventListener('click', function() {
    // Toggle the 'show' class to show or hide the dropdown menu
    dropdownMenu.classList.toggle('show');
});


