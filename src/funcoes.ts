import {
   $carros_selecionados,
   $carros_selecionados_desvio_padrao_km,
   $carros_selecionados_media_de_anos,
   $carros_selecionados_valor_total,
   $carro_em_promocao,
   $select_ano_maximo,
   $select_ano_minimo,
   $select_combustiveis,
   $select_marca,
} from './document.js';
import { carro, listaDeCarros } from './listaDeCarros.js';

export function mascararPreco(preco: number) {
   const mascaraPreco = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
   }).format(preco);

   return mascaraPreco;
}

export function promocao() {
   const carroMaisBarato = listaDeCarros.reduce((a, b) => (a.preco < b.preco ? a : b));

   $carro_em_promocao.innerHTML = `
         <p>Marca: ${carroMaisBarato.marca}</p>
         <p>Modelo: ${carroMaisBarato.modelo}</p>
         <p><s>Preço: ${mascararPreco(carroMaisBarato.preco)}</s></p>
         <p><u><b>Preço: ${mascararPreco(carroMaisBarato.preco * 0.75)}</b></u></p>
      `;
}

export function preencherSelectMarcas() {
   const marcas = Array.from(new Set(listaDeCarros.map(carro => carro.marca))).sort((a, b) => a.localeCompare(b));
   const marcasRepetidas = listaDeCarros.map(carro => carro.marca);

   marcas.forEach(marca => {
      const $nova_option = document.createElement('option');
      $nova_option.value = marca;
      $nova_option.text = `${marca} (${marcasRepetidas.filter(marcRep => marcRep === marca).length})`;

      $select_marca.appendChild($nova_option);
   });
}

export function preencherSelectsDeAno(anos: number[]) {
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

export function preencherSelectCombustiveis() {
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

export function preencherInfoDosCarrosSelecionados(listaFinal: carro[], listaDeCardsSelecionados: carro[]) {
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

   $carros_selecionados.innerHTML = `<u><b>Carros selecionados: ${array.length}</b></u>`;
   $carros_selecionados_valor_total.innerHTML = `Valor total: ${mascararPreco(somaDosPrecos)}`;
   $carros_selecionados_media_de_anos.innerHTML = `Média dos anos: ${Math.floor(mediaDosAnos)}`;
   $carros_selecionados_desvio_padrao_km.innerHTML = `Desvio padrão da quilometragem: ${mascaraKM} KM`;
}

function formatarHora(t: number) {
   return t < 10 ? '0' + t : t;
}
export function contagemRegressiva(horaDepois: Date) {
   const data = new Date();
   const distancia = horaDepois.getTime() - data.getTime();

   const horas = formatarHora(Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
   const minutos = formatarHora(Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60)));
   const segundos = formatarHora(Math.floor((distancia % (1000 * 60)) / 1000));

   return `${horas}:${minutos}:${segundos}`;
}
