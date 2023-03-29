import {
   $button_ano,
   $button_media,
   $carros_selecionados,
   $checkbox_carros_novos,
   $input,
   $input_km_maximo,
   $input_km_minimo,
   $input_preco_maximo,
   $input_preco_minimo,
   $main_div,
   $relogio,
   $resultados_da_pesquisa,
   $select_ano_maximo,
   $select_ano_minimo,
   $select_combustiveis,
   $select_marca,
   $select_ordenar_lista,
} from './document.js';
import {
   contagemRegressiva,
   mascararPreco,
   preencherInfoDosCarrosSelecionados,
   preencherSelectCombustiveis,
   preencherSelectMarcas,
   preencherSelectsDeAno,
   promocao,
} from './funcoes.js';
import { carro, listaDeCarros } from './listaDeCarros.js';

const anos = Array.from(new Set(listaDeCarros.map(carro => carro.ano))).sort((a, b) => a - b);
let listaFinal: carro[] = [];
let listaDeCardsSelecionados: carro[] = [];

let horaDepois = new Date();
horaDepois.setHours(horaDepois.getHours() + 3);

$relogio.textContent = contagemRegressiva(horaDepois);
setInterval(() => {
   $relogio.textContent = contagemRegressiva(horaDepois);
}, 1000);

promocao();
preencherSelectMarcas();
preencherSelectsDeAno(anos);
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
   }

   $nova_div.addEventListener('click', () => {
      if ($nova_div.classList.contains('cardSelecionado')) {
         $nova_div.classList.remove('cardSelecionado');

         const array = listaDeCardsSelecionados.filter(item => item !== carro);
         listaDeCardsSelecionados = array;

         preencherInfoDosCarrosSelecionados(listaFinal, listaDeCardsSelecionados);
      } else {
         $nova_div.classList.add('cardSelecionado');
         listaDeCardsSelecionados.push(carro);

         preencherInfoDosCarrosSelecionados(listaFinal, listaDeCardsSelecionados);
      }
   });

   $main_div.appendChild($nova_div);
   $resultados_da_pesquisa.innerHTML = `<u><b>Resultados da pesquisa: ${listaFinal.length}</b></u>`;
   $carros_selecionados.innerHTML = `<u><b>Carros selecionados: ${listaDeCardsSelecionados.length}</b></u>`;
   preencherInfoDosCarrosSelecionados(listaFinal, listaDeCardsSelecionados);
}

function limparTelaELista() {
   $main_div.innerHTML = '';
   listaFinal = [];
}
function criarCardsEDarPush(carro: carro) {
   listaFinal.push(carro);
   criarCards(carro);
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

// ---------------------------------------------------------------------------------------------------
// ----------------------------------------- EVENT LISTENERS -----------------------------------------
// ---------------------------------------------------------------------------------------------------

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

         listaFinal.sort((a, b) => a.marca.localeCompare(b.marca));
         listaFinal.forEach(carro => criarCards(carro));
         break;
      case 'modelo':
         $main_div.innerHTML = '';

         listaFinal.sort((a, b) => a.modelo.localeCompare(b.modelo));
         listaFinal.forEach(carro => criarCards(carro));
         break;
      case 'preço':
         $main_div.innerHTML = '';

         listaFinal.sort((a, b) => a.preco - b.preco);
         listaFinal.forEach(carro => criarCards(carro));
         break;
      case 'ano':
         $main_div.innerHTML = '';

         listaFinal.sort((a, b) => a.ano - b.ano);
         listaFinal.forEach(carro => criarCards(carro));
         break;
      case 'km':
         $main_div.innerHTML = '';

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
