document.getElementById('formulario').addEventListener('submit', function(e) {
    
    e.preventDefault();

    let formulario = new FormData(document.getElementById('formulario'));

    fetch('registro.php', {
        method: 'POST',
        body: formulario
    })
    .then(res => res.json())
    .then(data => {
        if(data == 'true') {
            document.getElementById('int_idPc').value = '';
            document.getElementById('int_ram').value = '';
            document.getElementById('txt_disco').value = '';
            document.getElementById('int_pres').value = '';
            document.getElementById('int_puntos').value = '';
            alert('El usuario se insertó correctamente.');
        } else {
            console.log(data);
        }
    });

});