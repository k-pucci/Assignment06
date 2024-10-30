// Wait for window load
window.addEventListener('load', () => {
    // Helper function for element selection
    const $ = (id) => document.getElementById(id);

    // Get form element
    const form = $('empForm');
    
    // Handle form submission
    form.addEventListener('submit', e => {
        e.preventDefault();
        console.log(`ID: ${$('id').value}
Name: ${$('name').value}
Extension: ${$('ext').value}
Email: ${$('email').value}
Department: ${$('department').value}`);
    });
});
