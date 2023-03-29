# Contexto: iremos construir uma página para busca de carros usados.

Dados iniciais:

```
[
  {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2021,
    preco: 154999,
    km: 61000,
    combustivel: 'Flex',
    usado: true,
    imagem:
      'https://images.usadosbr.com/manipulatedImages/media/gallery/1a/59/21/toyota-corolla-2-0-gr-s-direct-shift-2022-goiania-go-812b3a04-6q-image-256x192-crop.webp',
  },
  {
    marca: 'Toyota',
    modelo: 'Hilux SW4',
    ano: 2010,
    preco: 140000,
    km: 194000,
    combustivel: 'Diesel',
    usado: true,
    imagem:
      'https://images.usadosbr.com/manipulatedImages/media/gallery/ce/72/f3/toyota-hilux-sw4-3-0-srv-turbo-1-2011-neropolis-go-eb50d8b1-xy-image-256x192-crop.webp',
  },
  {
    marca: 'Toyota',
    modelo: 'Hilux SW4',
    ano: 2019,
    preco: 289900,
    km: 57200,
    combustivel: 'Diesel',
    usado: true,
    imagem:
      'https://images.usadosbr.com/manipulatedImages/media/gallery/02/c1/1c/toyota-hilux-sw4-2-8-srx-turbo-2019-goiania-go-40443e4a-Qc-image-256x192-crop.webp',
  },
  {
    marca: 'Honda',
    modelo: 'Civic',
    ano: 2020,
    preco: 289900,
    km: 61000,
    combustivel: 'Gasolina',
    usado: true,
    imagem:
      'https://images.usadosbr.com/manipulatedImages/media/gallery/70/90/ac/honda-civic-1-5-touring-turbo-2020-aparecida-de-goiania-go-504bfdd0-uf-image-256x192-crop.webp',
  },
  {
    marca: 'Ford',
    modelo: 'Ranger',
    ano: 2018,
    preco: 160000,
    km: 0,
    combustivel: 'Diesel',
    usado: false,
    imagem:
      'https://images.usadosbr.com/manipulatedImages/media/gallery/9b/6c/d3/ford-ranger-2-2-xls-2018-goiania-go-6401d134-uf-image-256x192-crop.webp',
  },
  {
    marca: 'Chevrolet',
    modelo: 'Trailblazer',
    ano: 2019,
    preco: 194900,
    km: 99000,
    combustivel: 'Diesel',
    usado: true,
    imagem:
      'https://images.usadosbr.com/manipulatedImages/media/gallery/0c/06/9b/chevrolet-trailblazer-2-8-ltz-turbo-2019-goiania-go-5fc8259b-i6-image-256x192-crop.webp',
  },
  {
    marca: 'Renault',
    modelo: 'Zoe',
    ano: 2018,
    preco: 129990,
    km: 15000,
    combustivel: 'Elétrico',
    usado: true,
    imagem:
      'https://images.usadosbr.com/manipulatedImages/media/gallery/52/f5/ad/renault-zoe-z-e-50-intense-2019-sao-paulo-sp-0f8d0d20-4g--0-image-256x192-crop.webp',
  },
  {
    marca: 'Chery',
    modelo: 'Icar',
    ano: 2018,
    preco: 139990,
    km: 0,
    combustivel: 'Elétrico',
    usado: false,
    imagem:
      'https://images.usadosbr.com/manipulatedImages/media/gallery/8e/b1/1c/chery-icar-45-kw-eletrico-2023-ribeirao-preto-sp-21bc10ad-Zp--0-image-256x192-crop.webp',
  },
  {
    marca: 'Chery',
    modelo: 'Icar',
    ano: 2018,
    preco: 139990,
    km: 10000,
    combustivel: 'Elétrico',
    usado: true,
    imagem:
      'https://images.usadosbr.com/manipulatedImages/media/gallery/4c/8d/e2/chery-icar-45-kw-eletrico-2023-santos-sp-06e20d36-eh--0-image-256x192-crop.webp',
  },
  {
    marca: 'Chevrolet',
    modelo: 'Caravan',
    ano: 1984,
    preco: 38500,
    km: 86500,
    combustivel: 'Álcool',
    usado: true,
    imagem:
      'https://images.usadosbr.com/manipulatedImages/media/gallery/2d/a7/c9/chevrolet-caravan-4-1-comodoro-1984-goiania-go-e5522675-mO-image-256x192-crop.webp',
  },
  {
    marca: 'Volkswagen',
    modelo: 'Voyage',
    ano: 1984,
    preco: 35000,
    km: 29000,
    combustivel: 'Álcool',
    usado: true,
    imagem:
      'https://images.usadosbr.com/manipulatedImages/media/gallery/b1/13/60/volkswagen-voyage-1-6-ls-1983-americana-sp-d1c54c8f-M3-image-256x192-crop.webp',
  },
  {
    marca: 'Volkswagen',
    modelo: 'Gol',
    ano: 1994,
    preco: 150000,
    km: 1000,
    combustivel: 'Álcool',
    usado: false,
    imagem:
      'https://images.usadosbr.com/manipulatedImages/media/gallery/80/08/fb/volkswagen-gol-1-8-gts-1994-goiania-go-eb15f601-Lz--0-image-256x192-crop.webp',
  },
];
```

1. Crie um design para apresentar os dados de um carro como um card e uma função para imprimir em tela este card a partir dos dados do carro. Informações a serem exibidas: imagem, marca, modelo, preço, ano, quilometragem, tipo de combustível.
   Utilize tags com valor semântico, com uma ênfase maior no preço e no modelo, uma ênfase menor na marca e sem ênfase no restante.

2. Crie uma função para imprimir todos os cards em tela e os exiba utilizando display flex

3 . Exiba os cards dos carros utilizando display grid

4. Faça a quantidade de cards por linha na tela ser responsiva (ex.: 2 cards por linha em telas mobile, 3 cards por linha em telas tipo tablet, 4 cards por linha em desktop e 6 cards por linha em telas maiores)

5. Adicione máscara de real aos preços dos carros (ex.: R$ 150.000,00).

6. Adicione máscara de número à quilometragem (ex.: 50.000 KM)

7. Adicione um input de texto para filtrar os carros por modelo ou marca. Os cards que não satisfazerem os filtros devem sumir de tela.
   dica:

   > 'acentuação'.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
   > 'acentuacao'

8. A partir da lista de carros, monte um array com as marcas distintas de carro presentes na lista em ordem alfabética

9. Monte um filtro do tipo select com a lista de marcas

10.   Adicione a quantidade total de carros de uma marca em sua label no select (ex .: Chery (2))

11.   Crie inputs de number para o ano mínimo e ano máximo para o filtro de ano

12.   Refatore os inputs de number do filtro de ano para serem um select de 1900 até 2023

13.   Refatore os filtros de ano para que suas opções comecem com o menor ano presente na lista de carros inicial até o maior ano presente na lista de carros inicial

14.   Faça com que, ao selecionar um ano mínimo, as opções de anos menores do que a selecionada não apareçam no select de ano máximo e vice-versa

15.   Crie inputs de number para o preço mínimo e preço máximo

16.   Crie inputs de number para a quilometragem mínima e quilometragem máxima

17.   Monte um array de objetos com os tipos de combustível disponíveis em ordem alfabética e a sua quantidade total dentro da lista de carros

18.   Monte um filtro do tipo select com a lista de tipos de combustível

19.   Crie um input do tipo checkbox para filtrar apenas por carros novos, ou seja, por carros não usados

20.   Exiba um contador de quantos carros correspondem aos filtros selecionados

21.   Crie uma ordenação dinâmica para a lista, com um select para a categoria e um input do tipo checkbox para crescente ou decrescente
      Categorias: marca, modelo, preço, ano, quilometragem

22.   Adicione um botão para calcular a média de preço dos carros em tela

23.   Adicione um botão que apresente o ano com mais carros em tela

24.   Faça com que os cards pareçam clicáveis ao passar com o mouse por cima deles

25.   Adicione algum efeito permanente em cards que forem clicados, de forma a identificar os cards que foram selecionados

26.   Faça com que cards selecionados voltem ao estado inicial caso sejam clicados novamente

27.   Apresente a contagem de carros selecionados (obs.: carros não visíveis por conta de algum filtro não podem aparecer na contagem de carros selecionados)

28.   Apresente o valor total dos carros selecionados

29.   Apresente a mediana dos anos dos carros selecionados

30.   Apresente o desvio padrão da quilometragem dos carros selecionados

31.   Exiba um banner no canto inferior da tela com um contador regressivo de 3 horas de duração que atualize a cada segundo, simulando um banner de ofertas com o carro com menor preço da lista de carros com 25% de desconto, exibindo o preço original com tracejado e o preço com desconto com ênfase, ambos com máscara de preço, além do modelo e marca.
