const principal = document.getElementById('principal');
const btnEspecies = document.getElementById('btn-especies');

btnEspecies.addEventListener('click', function() {
    principal.innerHTML = `
        <h1>espécies</h1>

        <table>
            <tr>
                <th>Coragyps atratus</th>
                <td>Urubu-de-cabeça-preta</td>
                <td onclick="listen(this)">Ver informações da ave</td>
            </tr>
            <tr>
                <th>Sarcoramphus papa</th>
                <td>Urubu-rei</td>
                <td onclick="listenB(this)">Ver informações da ave</td>
            </tr>
            <tr>
                <th>Cathartes aura</th>
                <td>Urubu-de-cabeça-vermelha</td>
                <td>Ver informações da ave</td>
            </tr>
            <tr>
                <th>Cathartes burrovianus</th>
                <td>urubu-de-cabeça-amarela</td>
                <td>Ver informações da ave</td>
            </tr>
        </table>
    `;
});

let btnCoragyps;

function listen(elemento){
    btnCoragyps = elemento;
    btnCoragyps.addEventListener('click', function(){
       principal.innerHTML = `
            <h1>Urubu-de-cabeça-preta</h1>

            <figure class="figCaracteristica">
                <img class="imagem" src="imagens/Urubu-de-Cabeça-Preta.jpg">
            </figure>
            
            <h1>Características</h1>

            <p>
                Dentre os urubus, é o de menor envergadura. Apesar de seu tamanho, é o mais agressivo dos urubus menores, disputando avidamente uma carcaça com as outras espécies. Não possui o olfato apurado do gênero Cathartes, localizando a carniça pela visão direta ou observando os outros urubus pousando para comer. Costuma deslocar-se a grande altura, usando as correntes de ar quente para diminuir o custo energético do voo. Sua visão é excepcional, tendo boa acuidade para objetos a grande distância. Para diferenciá-lo dos outros urubus, em voo, destaca-se o formato mais curto e arredondado das asas, com a ponta mantida um pouco à frente da cabeça. Quase no final de cada asa, forma-se uma área mais clara, quase um círculo. Exceto por essa área mais clara, adultos e jovens são totalmente negros, inclusive a pele nua da cabeça e o pescoço. Além do planeio passivo, batem ativamente as asas, produzindo um ruído forte e característico. Outro som único é produzido pelas asas, soando como se fosse um avião a jato. Deixam-se cair de grande altura, em voo picado, para frear nas proximidades do solo ou da vegetação, abrindo as asas. O ar passando rapidamente pelas penas das asas produz o som.
                O urubu-preto possui de comprimento 56-76 centímetros e de envergadura cerca de 143 centímetros, com peso de 1,180 kg para macho e 1,940 para fêmea.
            </p>

            <h1>Alimentação</h1>

            <p>
                Alimenta-se principalmente de carcaças de animais mortos em diferentes estágios de decomposição.No ambiente urbano busca restos de comida em lixos, lixões e partes de animais domésticos abatidos. Também pode procurar mamíferos herbívoros (gado, cavalo, animais domésticos) para retirar carrapatos ou partículas orgânicas de suas pelagens, como relatado por Sazima (2010).
            </p>

            <figure class="figura"> 
                <img class="imagem2" src="imagens/coragyps-alimento.jpg">

                <figcaption>O urubu-de-cabeça-preta se alimentando</figcaption>
            </figure>
            

            <figure class="figura">
                <img class="imagem2" src="imagens/coragyps-alimento3.jpg">

                <figcaption>Bando se alimentando</figcaption>
            </figure>

            <h1>Reprodução</h1>

            <p>
                Nidifica em ocos de árvores mortas, entre pedras e outros locais abrigados, geralmente com incidência de árvores. Em ambiente urbano, pode utilizar sacadas de prédios e plataformas para nidificar. Coloca até dois ovos, que são incubados por aproximadamente 32 a 39 dias.
            </p>

            <figure class="figura">
                <img class="imagem2" src="imagens/coragyps-ninho.jpg">

                <figcaption>Filhote no ninho</figcaption>
            </figure>

            <figure class="figura">
                <img class="imagem2" src="imagens/coragyps-ninho2.jpg">

                <figcaption>O urubu-de-cabeça-preta não constrói ninho</figcaption>
            </figure>

            <h1>Habitos</h1>

            <p>
                Acostuma-se com a presença humana e, em alguns locais, circula até junto de galinhas e outras aves domésticas.
                Ocorre em uma variedade de habitats, desde campos naturais, borda de matas, até áreas rurais e centros urbanos, ausente apenas em áreas densamente florestadas. É um excelente planador, facilmente observado planando alto em círculos nos centros das cidades, fazendas e áreas antropizadas, ou pousado na borda de edifícios, antenas de telefonia e postes de eletricidade.
            </p>

            <figure class="figura">
                <img src="imagens/coragyps-habitos2.jpg" class="imagem2">

                <figCaption>Grupo tomando sol</figCaption>
            </figure>

            <figure class="figura">
                <img src="imagens/coragyps-alimento2.jpg" class="imagem2">

                <figcaption>Animal voando</figcaption>
            </figure>
       `
    })
}

let btnSarcoramphus;

function listenB(elemento) {
    btnSarcoramphus = elemento;
    btnSarcoramphus.addEventListener('click', function(){
        principal.innerHTML = `
            <h1>Urubu rei</h1>

            <figure class="figCaracteristica">
                <img class="imagem" src="imagens/urubu-rei.jpg">
            </figure>
            
            <h1>Características</h1>

            <p>
                Possui uma envergadura que varia de 170 a 198 cm e peso que oscila de 3 a 5 kg, medindo cerca de 85 cm de comprimento. 
                Tem cabeça e pescoço nus, pintados de vermelho, amarelo e alaranjado, a parte superior do corpo amarelo-clara, esbranquiçada, asas e cauda pretas, o lado inferior branco, com plumagem branca e negra.
            </p>

            <h1>Alimentação</h1>

            <p>
                Necrófago, alimenta-se de animais mortos, principalmente de mamíferos de médio e grande porte (antas, capivaras), mas também pode aparecer em carcaças de grandes peixes, jacarés, serpentes e aves. Em áreas antropizadas e nas proximidades de fazendas, pode aparecer nos cadáveres de gado e outros animais de criação.
                Frequenta carniças com os outros urubus, onde devido a seu tamanho, deixa as outras espécies afastadas, parecendo ser o rei entre elas.
            </p>

            <figure class="figura"> 
                <img class="imagem2" src="imagens/sarcoramphus-alimento.jpg">

                <figcaption>Urubu se alimentando</figcaption>
            </figure>
            

            <figure class="figura">
                <img class="imagem2" src="imagens/sarcoramphus-alimento4.webp">

                <figcaption>Bando se alimentando</figcaption>
            </figure>

            <h1>Reprodução</h1>

            <p>
                nidifica em ocos de árvores ou em fendas e plataformas em paredões rochosos. Coloca um único ovo, com período de incubação que vai de 53 a 58 dias, com o casal revezando-se ou somente a fêmea incubando.
                O jovem fica dependente dos pais por vários meses, demorando mais de 130 dias para sair do ninho e alçar os primeiros voos.
            </p>

            <figure class="figura">
                <img class="imagem2" src="imagens/sarcoramphus-filhote.jpg">

                <figcaption></figcaption>
            </figure>

            <figure class="figura">
                <img class="imagem2" src="imagens/sarcoramphus-jovem.jpg">

                <figcaption></figcaption>
            </figure>

            <h1>Habitos</h1>

            <p>
                Habita florestas com clareiras, florestas subjacentes a paredões rochosos ou áreas montanhosas e formações florestais do Cerrado e Caatinga. Pode ser observado voando alto, sozinho ou aos pares, raramente em grupos de vários indivíduos. Pousa nas árvores mais altas da mata ou em plataformas em paredões rochosos, onde costuma dormir.
            </p>

            <figure class="figura">
                <img src="imagens/sarcoramphus-habitos.jpg" class="imagem2">

                <figCaption></figCaption>
            </figure>

            <figure class="figura">
                <img src="imagens/sarcoramphus4.jpg" class="imagem2">

                <figcaption></figcaption>
            </figure>
        `;
    })
}   