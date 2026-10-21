function atualizarHora() {
    // 1. Instância única da data atual
    let data = new Date();

    // 2. Formatação do Horário
    let hora = String(data.getHours()).padStart(2, '0');
    let minutos = String(data.getMinutes()).padStart(2, '0');
    let segundos = String(data.getSeconds()).padStart(2, '0');

    // 3. Formatação da Data (getMonth() soma +1 pois os meses vão de 0 a 11)
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();

    // 4. Atualização dos elementos no HTML
    document.getElementById('hora').textContent = `${hora}:${minutos}:${segundos}`;
    document.getElementById('data').textContent = `${dia}/${mes}/${ano}`;

    // 5. Reagenda a execução para o próximo segundo
    setTimeout(atualizarHora, 1000);
}

// Inicializa o relógio
atualizarHora();