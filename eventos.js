document.addEventListener('DOMContentLoaded', function() {
    const div = document.querySelector('.button-container');
    const button = document.getElementById('Button');

  
    div.addEventListener('click', function() {
        alert('¡Hola! Soy el div');
    });

    button.addEventListener('click', function(event) {
        event.stopPropagation(); 
        alert('Has apretado el botón!');
    });
});
