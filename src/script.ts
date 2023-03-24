(() => {
   type carro = {
      marca: string;
      modelo: string;
      ano: number;
      preco: number;
      km: number;
      combustivel: string;
      usado: boolean;
      imagem: string;
   };

   const listaDeCarros: carro[] = [
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

   const $main_div: HTMLDivElement = document.querySelector('#main_div') as HTMLDivElement;
   const $input: HTMLInputElement = document.querySelector('#input') as HTMLInputElement;
   const $select_marca: HTMLSelectElement = document.querySelector('#select_marca') as HTMLSelectElement;
   const $select_ano_minimo: HTMLSelectElement = document.querySelector('#select_ano_minimo') as HTMLSelectElement;
   const $select_ano_maximo: HTMLSelectElement = document.querySelector('#select_ano_maximo') as HTMLSelectElement;
   const $input_preco_minimo: HTMLInputElement = document.querySelector('#input_preco_minimo') as HTMLInputElement;
   const $input_preco_maximo: HTMLInputElement = document.querySelector('#input_preco_maximo') as HTMLInputElement;
   const $input_km_minimo: HTMLInputElement = document.querySelector('#input_km_minimo') as HTMLInputElement;
   const $input_km_maximo: HTMLInputElement = document.querySelector('#input_km_maximo') as HTMLInputElement;
   const $select_combustiveis: HTMLSelectElement = document.querySelector('#select_combustiveis') as HTMLSelectElement;
   const $checkbox_carros_novos: HTMLInputElement = document.querySelector(
      '#checkbox_carros_novos'
   ) as HTMLInputElement;
   const $resultados_da_pesquisa: HTMLParagraphElement = document.querySelector(
      '#resultados_da_pesquisa'
   ) as HTMLParagraphElement;
   const $select_ordenar_lista: HTMLSelectElement = document.querySelector(
      '#select_ordenar_lista'
   ) as HTMLSelectElement;
   const $button_media: HTMLButtonElement = document.querySelector('#button_media') as HTMLButtonElement;
   const $button_ano: HTMLButtonElement = document.querySelector('#button_ano') as HTMLButtonElement;
   const $carros_selecionados: HTMLParagraphElement = document.querySelector(
      '#carros_selecionados'
   ) as HTMLParagraphElement;
   const $carros_selecionados_valor_total: HTMLParagraphElement = document.querySelector(
      '#carros_selecionados_valor_total'
   ) as HTMLParagraphElement;
   const $carros_selecionados_media_de_anos: HTMLParagraphElement = document.querySelector(
      '#carros_selecionados_media_de_anos'
   ) as HTMLParagraphElement;
   const $carros_selecionados_desvio_padrao_km: HTMLParagraphElement = document.querySelector(
      '#carros_selecionados_desvio_padrao_km'
   ) as HTMLParagraphElement;
   const $relogio: HTMLParagraphElement = document.querySelector('#relogio') as HTMLParagraphElement;
   const $carro_em_promocao: HTMLDivElement = document.querySelector('#carro_em_promocao') as HTMLDivElement;

   const anos = Array.from(new Set(listaDeCarros.map(carro => carro.ano))).sort((a, b) => a - b);
   let listaFinal: carro[] = [];
   let listaDeCardsSelecionados: carro[] = [];
   let qtdCarrosSelecionados = 0;

   let horaDepois = new Date();
   horaDepois.setHours(horaDepois.getHours() + 3);

   function contagemRegressiva() {
      const data = new Date();
      const distancia = horaDepois.getTime() - data.getTime();

      const horas = formatarHora(Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const minutos = formatarHora(Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60)));
      const segundos = formatarHora(Math.floor((distancia % (1000 * 60)) / 1000));

      return `${horas}:${minutos}:${segundos}`;
   }
   function formatarHora(t: number) {
      return t < 10 ? '0' + t : t;
   }
   $relogio.textContent = contagemRegressiva();
   setInterval(() => {
      $relogio.textContent = contagemRegressiva();
   }, 1000);

   function mascararPreco(preco: number) {
      const mascaraPreco = new Intl.NumberFormat('pt-BR', {
         style: 'currency',
         currency: 'BRL',
      }).format(preco);

      return mascaraPreco;
   }

   function promocao() {
      const carroMaisBarato = listaDeCarros.reduce((a, b) => (a.preco < b.preco ? a : b));

      $carro_em_promocao.innerHTML = `
         <p>Marca: ${carroMaisBarato.marca}</p>
         <p>Modelo: ${carroMaisBarato.modelo}</p>
         <p><s>Preço: ${mascararPreco(carroMaisBarato.preco)}</s></p>
         <p><u><b>Preço: ${mascararPreco(carroMaisBarato.preco * 0.75)}</b></u></p>
      `;
   }
   promocao();

   function preencherSelectMarcas() {
      const marcas = Array.from(new Set(listaDeCarros.map(carro => carro.marca))).sort((a, b) => a.localeCompare(b));
      const marcasRepetidas = listaDeCarros.map(carro => carro.marca);

      marcas.forEach(marca => {
         const $nova_option = document.createElement('option');
         $nova_option.value = marca;
         $nova_option.text = `${marca} (${marcasRepetidas.filter(marcRep => marcRep === marca).length})`;

         $select_marca.appendChild($nova_option);
      });
   }
   preencherSelectMarcas();

   function preencherSelectsDeAno() {
      const diferencaDosAnos = anos[anos.length - 1] - anos[0] + 1;
      let i: number;
      for (i = 0; i < diferencaDosAnos; i++) {
         const $nova_option = document.createElement('option');
         const $nova_option2 = document.createElement('option');
         $nova_option.value = `${anos[0] + i}`;
         $nova_option.text = `${anos[0] + i}`;
         $nova_option2.value = `${anos[0] + i}`;
         $nova_option2.text = `${anos[0] + i}`;

         $select_ano_minimo.appendChild($nova_option);
         $select_ano_maximo.appendChild($nova_option2);
      }

      $select_ano_minimo.value = `${anos[0]}`;
      $select_ano_maximo.value = `${anos[anos.length - 1]}`;
   }
   preencherSelectsDeAno();

   function preencherSelectCombustiveis() {
      let combustiveisComRepeticoes: { combustivel: string; combustRepet: number }[] = [];
      const combustiveisDuplicados: string[] = listaDeCarros.map(carro => carro.combustivel);
      const combustiveis = Array.from(new Set(listaDeCarros.map(carro => carro.combustivel))).sort((a, b) =>
         a.localeCompare(b)
      );

      combustiveis.forEach(combustivel => {
         const combustRepet = combustiveisDuplicados.filter(combRep => combRep === combustivel).length;
         combustiveisComRepeticoes.push({ combustivel, combustRepet });
      });

      combustiveisComRepeticoes.forEach(obj => {
         const $nova_option = document.createElement('option');
         $nova_option.value = obj.combustivel;
         $nova_option.text = `${obj.combustivel} (${obj.combustRepet})`;

         $select_combustiveis.appendChild($nova_option);
      });
   }
   preencherSelectCombustiveis();

   function criarCards(carro: carro) {
      const carroSelecionado = listaDeCardsSelecionados.find(item => item === carro);
      const $nova_div = document.createElement('div');
      const mascaraKM = new Intl.NumberFormat('pt-BR').format(carro.km);

      $nova_div.classList.add('card');
      $nova_div.innerHTML = `
            <img src="${carro.imagem}">
            <p>Marca: <b>${carro.marca}</b></p>
            <p>Modelo: <u><b>${carro.modelo}</b></u></p>
            <p>Preço: <u><b>${mascararPreco(carro.preco)}</b></u></p>
            <p>Ano: ${carro.ano}</p>
            <p>Quilometragem: ${mascaraKM} KM</p>
            <p>Tipo de combustível: ${carro.combustivel}</p>
      `;

      if (carroSelecionado) {
         $nova_div.classList.add('cardSelecionado');
         qtdCarrosSelecionados += 1;
      }

      $nova_div.addEventListener('click', () => {
         if ($nova_div.classList.contains('cardSelecionado')) {
            $nova_div.classList.remove('cardSelecionado');

            const array = listaDeCardsSelecionados.filter(item => item !== carro);
            listaDeCardsSelecionados = array;
            qtdCarrosSelecionados -= 1;

            preencherInfoDosCarrosSelecionados();
         } else {
            $nova_div.classList.add('cardSelecionado');
            qtdCarrosSelecionados += 1;
            listaDeCardsSelecionados.push(carro);

            preencherInfoDosCarrosSelecionados();
         }
      });

      $main_div.appendChild($nova_div);
      $resultados_da_pesquisa.innerHTML = `<u><b>Resultados da pesquisa: ${listaFinal.length}</b></u>`;
      $carros_selecionados.innerHTML = `<u><b>Carros selecionados: ${qtdCarrosSelecionados}</b></u>`;
      preencherInfoDosCarrosSelecionados();
   }

   function limparTelaELista() {
      $main_div.innerHTML = '';
      listaFinal = [];
      qtdCarrosSelecionados = 0;
   }
   function criarCardsEDarPush(carro: carro) {
      listaFinal.push(carro);
      criarCards(carro);
   }
   function preencherInfoDosCarrosSelecionados() {
      let somaDosPrecos = 0;
      let mediaDosAnos = 0;
      let desvioPadraoKm = 0;

      const array = listaFinal.filter(item => listaDeCardsSelecionados.includes(item));

      if (array.length > 0) {
         somaDosPrecos = array.map(item => item.preco).reduce((a, b) => a + b);

         mediaDosAnos = array.map(item => item.ano).reduce((a, b) => a + b);
         mediaDosAnos = mediaDosAnos / array.length;

         desvioPadraoKm = array.map(item => item.km).reduce((a, b) => a + b);
         desvioPadraoKm = desvioPadraoKm / array.length;
         const distanciaDoMenor = (desvioPadraoKm - array[0].ano) ^ 2;
         const distanciaDoMaior = (array[array.length - 1].ano - desvioPadraoKm) ^ 2;
         desvioPadraoKm = (desvioPadraoKm + distanciaDoMenor + distanciaDoMaior) / array.length;
      }

      const mascaraKM = new Intl.NumberFormat('pt-BR').format(desvioPadraoKm);

      $carros_selecionados.innerHTML = `<u><b>Carros selecionados: ${qtdCarrosSelecionados}</b></u>`;
      $carros_selecionados_valor_total.innerHTML = `Valor total: ${mascararPreco(somaDosPrecos)}`;
      $carros_selecionados_media_de_anos.innerHTML = `Média dos anos: ${Math.floor(mediaDosAnos)}`;
      $carros_selecionados_desvio_padrao_km.innerHTML = `Desvio padrão da quilometragem: ${mascaraKM} KM`;
   }
   function validarFiltros(carro: carro, textoDigitado: string) {
      if (
         (carro.marca.toLowerCase().includes(textoDigitado) || carro.modelo.toLowerCase().includes(textoDigitado)) &&
         carro.ano >= Number($select_ano_minimo.value) &&
         carro.ano <= Number($select_ano_maximo.value) &&
         carro.preco >= Number($input_preco_minimo.value) &&
         carro.preco <= Number($input_preco_maximo.value) &&
         carro.km >= Number($input_km_minimo.value) &&
         carro.km <= Number($input_km_maximo.value)
      ) {
         criarCardsEDarPush(carro);
      }
   }

   listaDeCarros.forEach(carro => {
      criarCardsEDarPush(carro);
   });

   // ------------------------------------ EVENT LISTENERS ------------------------------------------

   $input.addEventListener('input', function filtrarCards() {
      const textoDigitado = $input.value
         .normalize('NFD')
         .replace(/[\u0300-\u036f]/g, '')
         .toLowerCase();

      limparTelaELista();

      listaDeCarros.forEach(carro => {
         if (
            (carro.marca.toLowerCase().includes(textoDigitado) || carro.modelo.toLowerCase().includes(textoDigitado)) &&
            carro.ano >= Number($select_ano_minimo.value) &&
            carro.ano <= Number($select_ano_maximo.value)
         ) {
            criarCardsEDarPush(carro);
         }
      });
   });

   $select_marca.addEventListener('change', () => {
      limparTelaELista();

      listaDeCarros.forEach(carro => {
         if (carro.marca.includes($select_marca.value)) {
            criarCardsEDarPush(carro);
         }
      });
   });

   $select_ano_minimo.addEventListener('change', () => {
      const textoDigitado = $input.value
         .normalize('NFD')
         .replace(/[\u0300-\u036f]/g, '')
         .toLowerCase();

      limparTelaELista();
      const anoMaximo = $select_ano_maximo.value;
      $select_ano_maximo.innerHTML = '<option value="">Selecione</option>';

      let i: number;
      for (i = Number($select_ano_minimo.value) + 1; i <= anos[anos.length - 1]; i++) {
         const $nova_option = document.createElement('option');

         $nova_option.value = String(i);
         $nova_option.text = String(i);

         $select_ano_maximo.appendChild($nova_option);
      }

      if ($select_ano_minimo.value === anoMaximo) {
         const $nova_option = document.createElement('option');

         $nova_option.value = $select_ano_minimo.value;
         $nova_option.text = $select_ano_minimo.value;

         $select_ano_maximo.appendChild($nova_option);
      }

      $select_ano_maximo.value = anoMaximo;

      listaDeCarros.forEach(carro => {
         if (
            (carro.marca.toLowerCase().includes(textoDigitado) || carro.modelo.toLowerCase().includes(textoDigitado)) &&
            carro.ano >= Number($select_ano_minimo.value) &&
            carro.ano <= Number($select_ano_maximo.value)
         ) {
            criarCardsEDarPush(carro);
         }
      });
   });

   $select_ano_maximo.addEventListener('change', () => {
      const textoDigitado = $input.value
         .normalize('NFD')
         .replace(/[\u0300-\u036f]/g, '')
         .toLowerCase();

      limparTelaELista();
      const anoMinimo = $select_ano_minimo.value;
      $select_ano_minimo.innerHTML = '<option value="">Selecione</option>';

      let i: number;
      for (i = anos[0]; i <= Number($select_ano_maximo.value) - 1; i++) {
         const $nova_option = document.createElement('option');

         $nova_option.value = String(i);
         $nova_option.text = String(i);

         $select_ano_minimo.appendChild($nova_option);
      }

      $select_ano_minimo.value = anoMinimo;

      listaDeCarros.forEach(carro => {
         if (
            (carro.marca.toLowerCase().includes(textoDigitado) || carro.modelo.toLowerCase().includes(textoDigitado)) &&
            carro.ano >= Number($select_ano_minimo.value) &&
            carro.ano <= Number($select_ano_maximo.value)
         ) {
            criarCardsEDarPush(carro);
         }
      });
   });

   $input_preco_minimo.addEventListener('input', () => {
      const textoDigitado = $input.value
         .normalize('NFD')
         .replace(/[\u0300-\u036f]/g, '')
         .toLowerCase();

      limparTelaELista();

      listaDeCarros.forEach(carro => {
         validarFiltros(carro, textoDigitado);
      });
   });

   $input_preco_maximo.addEventListener('input', () => {
      const textoDigitado = $input.value
         .normalize('NFD')
         .replace(/[\u0300-\u036f]/g, '')
         .toLowerCase();

      limparTelaELista();

      listaDeCarros.forEach(carro => {
         validarFiltros(carro, textoDigitado);
      });
   });

   $input_km_minimo.addEventListener('input', () => {
      const textoDigitado = $input.value
         .normalize('NFD')
         .replace(/[\u0300-\u036f]/g, '')
         .toLowerCase();

      limparTelaELista();

      listaDeCarros.forEach(carro => {
         validarFiltros(carro, textoDigitado);
      });
   });

   $input_km_maximo.addEventListener('input', () => {
      const textoDigitado = $input.value
         .normalize('NFD')
         .replace(/[\u0300-\u036f]/g, '')
         .toLowerCase();

      limparTelaELista();

      listaDeCarros.forEach(carro => {
         validarFiltros(carro, textoDigitado);
      });
   });

   $select_combustiveis.addEventListener('change', () => {
      limparTelaELista();

      listaDeCarros.forEach(carro => {
         if (carro.combustivel.includes($select_combustiveis.value)) {
            criarCardsEDarPush(carro);
         }
      });
   });

   $checkbox_carros_novos.addEventListener('change', () => {
      if ($checkbox_carros_novos.checked) {
         limparTelaELista();

         listaDeCarros.forEach(carro => {
            if (!carro.usado) {
               criarCardsEDarPush(carro);
            }
         });
      } else {
         limparTelaELista();

         listaDeCarros.forEach(carro => {
            criarCardsEDarPush(carro);
         });
      }
   });

   $select_ordenar_lista.addEventListener('change', () => {
      switch ($select_ordenar_lista.value) {
         case 'marca':
            $main_div.innerHTML = '';
            qtdCarrosSelecionados = 0;

            listaFinal.sort((a, b) => a.marca.localeCompare(b.marca));
            listaFinal.forEach(carro => criarCards(carro));
            break;
         case 'modelo':
            $main_div.innerHTML = '';
            qtdCarrosSelecionados = 0;

            listaFinal.sort((a, b) => a.modelo.localeCompare(b.modelo));
            listaFinal.forEach(carro => criarCards(carro));
            break;
         case 'preço':
            $main_div.innerHTML = '';
            qtdCarrosSelecionados = 0;

            listaFinal.sort((a, b) => a.preco - b.preco);
            listaFinal.forEach(carro => criarCards(carro));
            break;
         case 'ano':
            $main_div.innerHTML = '';
            qtdCarrosSelecionados = 0;

            listaFinal.sort((a, b) => a.ano - b.ano);
            listaFinal.forEach(carro => criarCards(carro));
            break;
         case 'km':
            $main_div.innerHTML = '';
            qtdCarrosSelecionados = 0;

            listaFinal.sort((a, b) => a.km - b.km);
            listaFinal.forEach(carro => criarCards(carro));
            break;
      }
   });

   $button_media.addEventListener('click', () => {
      let media = 0;
      listaFinal.forEach(carro => (media += carro.preco));
      media = media / listaFinal.length;

      alert(`Média dos preços:  ${mascararPreco(media)}`);
   });

   $button_ano.addEventListener('click', () => {
      const anosRepetidos = listaFinal.map(carro => carro.ano);
      const arrayDeObj: { ano: number; reps: number }[] = [];
      let listaAuxiliar1: { ano: number; reps: number }[] = [];
      let listaAuxiliar2: number[] = [];

      anos.forEach(ano => {
         arrayDeObj.push({ ano: ano, reps: anosRepetidos.filter(anoRep => anoRep === ano).length });
      });

      arrayDeObj.sort((a, b) => b.reps - a.reps);
      listaAuxiliar1 = arrayDeObj.filter(item => item.reps === arrayDeObj[0].reps);
      listaAuxiliar2 = listaAuxiliar1.map(item => item.ano);

      alert(`Ano(s) com mais carros: ${listaAuxiliar2} (${arrayDeObj[0].reps})`);
   });
})();
