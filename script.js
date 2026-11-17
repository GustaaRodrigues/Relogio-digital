function atualizarHora() {
    let data = new Date();
    
    let hora = String(data.getHours()).padStart(2, '0');
    let minutos = String(data.getMinutes()).padStart(2, '0');
    let segundos = String(data.getSeconds()).padStart(2, '0');

    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();

    document.getElementById('hora').textContent = `${hora}:${minutos}:${segundos}`;
    document.getElementById('data').textContent = `${dia}/${mes}/${ano}`;

    setTimeout(atualizarHora, 1000);
}

atualizarHora();
