import {
   $button_ano,
   $button_media,
   $carros_selecionados,
   $checkbox_carros_novos,
   $input,
   $input_km_max,
   $input_km_min,
   $input_preco_max,
   $input_preco_min,
   $main_div,
   $relogio,
   $resultados_da_pesquisa,
   $select_ano_max,
   $select_ano_min,
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
import { Carro, listaDeCarros } from './listaDeCarros.js';

const anos = Array.from(new Set(listaDeCarros.map(carro => carro.ano))).sort((a, b) => a - b);
let listaFinal: Carro[] = [];
let listaDeCardsSelecionados: Carro[] = [];

let horaDepois = new Date();
horaDepois.setHours(horaDepois.getHours() + 3);

$relogio.textContent = contagemRegressiva(horaDepois);
setInterval(() => {
   $relogio.textContent = contagemRegressiva(horaDepois);
}, 1000);

promocao();
preencherSelectMarcas(listaDeCarros);
preencherSelectsDeAno(anos);
preencherSelectCombustiveis(listaDeCarros);

function preencherTela() {
   limparTelaELista();
   const marcalSelecionada = $select_marca.value;
   const combustivelSelecionado = $select_combustiveis.value;

   listaDeCarros.forEach(carro => {
      validarFiltros(carro);
   });

   preencherSelectMarcas(listaFinal);
   preencherSelectCombustiveis(listaFinal);

   $select_marca.value = marcalSelecionada;
   $select_combustiveis.value = combustivelSelecionado;
}

function criarCards(carro: Carro) {
   const carroSelecionado = listaDeCardsSelecionados.find(item => item === carro);
   const $nova_div = document.createElement('div');
   const mascaraKM = new Intl.NumberFormat('pt-BR').format(carro.km);

   $nova_div.classList.add('border-black');
   $nova_div.classList.add('border-2');
   $nova_div.classList.add('rounded');
   $nova_div.classList.add('bg-white');
   $nova_div.classList.add('p-1');
   $nova_div.classList.add('hover:cursor-pointer');
   $nova_div.classList.add('hover:bg-yellow-200');
   $nova_div.innerHTML = `
         <img src="${carro.imagem}" class="w-full max-h-48 rounded">
         <p>Marca: <b>${carro.marca}</b></p>
         <p>Modelo: <u><b>${carro.modelo}</b></u></p>
         <p>Preço: <u><b>${mascararPreco(carro.preco)}</b></u></p>
         <p>Ano: ${carro.ano}</p>
         <p>Quilometragem: ${mascaraKM} KM</p>
         <p>Tipo de combustível: ${carro.combustivel}</p>
      `;

   if (carroSelecionado) {
      $nova_div.classList.remove('bg-white');
      $nova_div.classList.add('bg-yellow-500');
      $nova_div.classList.remove('hover:bg-yellow-200');
   }

   $nova_div.addEventListener('click', () => {
      if ($nova_div.classList.contains('bg-yellow-500')) {
         $nova_div.classList.remove('bg-yellow-500');
         $nova_div.classList.add('hover:bg-yellow-200');
         $nova_div.classList.add('bg-white');

         const array = listaDeCardsSelecionados.filter(item => item !== carro);
         listaDeCardsSelecionados = array;

         preencherInfoDosCarrosSelecionados(listaFinal, listaDeCardsSelecionados);
      } else {
         $nova_div.classList.remove('bg-white');
         $nova_div.classList.add('bg-yellow-500');
         $nova_div.classList.remove('hover:bg-yellow-200');
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

function validarFiltros(carro: Carro) {
   let precoMax = Number($input_preco_max.value);
   let kmMax = Number($input_km_max.value);
   if (precoMax === 0) precoMax = 999999;
   if (kmMax === 0) kmMax = 999999;

   const textoDigitado = $input.value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();

   if ($checkbox_carros_novos.checked && carro.usado === true) return;

   if (
      (carro.marca.toLowerCase().includes(textoDigitado) || carro.modelo.toLowerCase().includes(textoDigitado)) &&
      carro.ano >= Number($select_ano_min.value) &&
      carro.ano <= Number($select_ano_max.value) &&
      carro.preco >= Number($input_preco_min.value) &&
      carro.preco <= precoMax &&
      carro.km >= Number($input_km_min.value) &&
      carro.km <= kmMax &&
      carro.marca.includes($select_marca.value) &&
      carro.combustivel.includes($select_combustiveis.value)
   ) {
      listaFinal.push(carro);
      criarCards(carro);
   }
}

listaDeCarros.forEach(carro => {
   listaFinal.push(carro);
   criarCards(carro);
});

// ---------------------------------------------------------------------------------------------------
// ----------------------------------------- EVENT LISTENERS -----------------------------------------
// ---------------------------------------------------------------------------------------------------

$input.addEventListener('input', function filtrarCards() {
   preencherTela();
});

$select_ano_min.addEventListener('change', () => {
   const anoMax = $select_ano_max.value;

   for (let i = Number($select_ano_min.value) + 1; i <= anos[anos.length - 1]; i++) {
      const $nova_option = document.createElement('option');
      $nova_option.value = String(i);
      $nova_option.text = String(i);
      $select_ano_max.appendChild($nova_option);
   }

   if ($select_ano_min.value === anoMax) {
      const $nova_option = document.createElement('option');
      $nova_option.value = $select_ano_min.value;
      $nova_option.text = $select_ano_min.value;
      $select_ano_max.appendChild($nova_option);
   }

   $select_ano_max.value = anoMax;

   preencherTela();
});

$select_ano_max.addEventListener('change', () => {
   const anoMin = $select_ano_min.value;

   let i: number;
   for (i = anos[0]; i <= Number($select_ano_max.value) - 1; i++) {
      const $nova_option = document.createElement('option');

      $nova_option.value = String(i);
      $nova_option.text = String(i);

      $select_ano_min.appendChild($nova_option);
   }

   $select_ano_min.value = anoMin;

   preencherTela();
});

$input_preco_min.addEventListener('input', () => {
   preencherTela();
});

$input_preco_max.addEventListener('input', () => {
   preencherTela();
});

$input_km_min.addEventListener('input', () => {
   preencherTela();
});

$input_km_max.addEventListener('input', () => {
   preencherTela();
});

$select_marca.addEventListener('change', () => {
   preencherTela();
});

$select_combustiveis.addEventListener('change', () => {
   preencherTela();
});

$checkbox_carros_novos.addEventListener('change', () => {
   preencherTela();
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
