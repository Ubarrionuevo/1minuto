document.addEventListener('DOMContentLoaded', function() {
    const waitlistForm = document.getElementById('waitlistForm');
    const successMessage = document.getElementById('successMessage');

    waitlistForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        fetch(waitlistForm.action, {
            method: 'POST',
            body: new FormData(waitlistForm),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            waitlistForm.style.display = 'none';
            successMessage.style.display = 'block';
            
            setTimeout(() => {
                $('#waitlistModal').modal('hide');
                waitlistForm.reset();
                waitlistForm.style.display = 'block';
                successMessage.style.display = 'none';
            }, 3000);
        })
        .catch(error => {
            alert('Hubo un error al enviar tu información. Por favor, intenta nuevamente.');
        });
    });
});
