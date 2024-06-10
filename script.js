function calcular() {
    const homens = parseInt(document.getElementById('homens').value);
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const criancas = parseInt(document.getElementById('criancas').value);

    const carneBovina = (homens * 0.5) + (mulheres * 0.3) + (criancas * 0.2);
    const frango = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.1);
    const linguica = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.2);
    const refrigerante = (homens * 0.3) + (mulheres * 0.4) + (criancas * 0.2);
    const cerveja = (homens * 0.8) + (mulheres * 0.5);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <li><i class="fas fa-drumstick-bite"></i> ${carneBovina.toFixed(1)}kg de carne bovina</li>
        <li><i class="fas fa-drumstick-bite"></i> ${frango.toFixed(1)}kg de frango</li>
        <li><i class="fas fa-hotdog"></i> ${linguica.toFixed(1)}kg de linguiça</li>
        <li><i class="fas fa-wine-bottle"></i> ${refrigerante.toFixed(1)}l de refrigerante</li>
        <li><i class="fas fa-beer"></i> ${cerveja.toFixed(1)}l de cerveja</li>
    `;
}
