import {
   $carros_selecionados,
   $carros_selecionados_desvio_padrao_km,
   $carros_selecionados_media_de_anos,
   $carros_selecionados_valor_total,
   $carro_em_promocao,
   $select_ano_max,
   $select_ano_min,
   $select_combustiveis,
   $select_marca,
} from './document.js';
import { Carro, listaDeCarros } from './listaDeCarros.js';

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

export function preencherSelectMarcas(listaFinal: Carro[]) {
   $select_marca.innerHTML = '<option value="">Marca</option>';

   const marcas = Array.from(new Set(listaDeCarros.map(carro => carro.marca))).sort((a, b) => a.localeCompare(b));
   const marcasRepetidas = listaFinal.map(carro => carro.marca);

   marcas.forEach(marca => {
      const $nova_option = document.createElement('option');
      $nova_option.value = marca;
      $nova_option.text = `${marca} (${marcasRepetidas.filter(marcRep => marcRep === marca).length})`;

      $select_marca.appendChild($nova_option);
   });
}

export function preencherSelectsDeAno(anos: number[]) {
   const diferencaDosAnos = anos[anos.length - 1] - anos[0] + 1;

   for (let i = 0; i < diferencaDosAnos; i++) {
      const $nova_option_ano_min = document.createElement('option');
      const $nova_option_ano_max = document.createElement('option');
      $nova_option_ano_min.value = `${anos[0] + i}`;
      $nova_option_ano_min.text = `${anos[0] + i}`;
      $nova_option_ano_max.value = `${anos[0] + i}`;
      $nova_option_ano_max.text = `${anos[0] + i}`;

      $select_ano_min.appendChild($nova_option_ano_min);
      $select_ano_max.appendChild($nova_option_ano_max);
   }

   $select_ano_min.value = `${anos[0]}`;
   $select_ano_max.value = `${anos[anos.length - 1]}`;
}

export function preencherSelectCombustiveis(listaFinal: Carro[]) {
   $select_combustiveis.innerHTML = '<option value="">Tipo de combustível</option>';

   let combustiveisComRepeticoes: { combustivel: string; combustRepet: number }[] = [];
   const combustiveisDuplicados: string[] = listaFinal.map(carro => carro.combustivel);
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

export function preencherInfoDosCarrosSelecionados(listaFinal: Carro[], listaDeCardsSelecionados: Carro[]) {
   let somaDosPrecos = 0;
   let mediaDosAnos = 0;
   let desvioPadraoKm = 0;

   const arraySelecionados = listaFinal.filter(item => listaDeCardsSelecionados.includes(item));

   if (arraySelecionados.length > 0) {
      somaDosPrecos = arraySelecionados.map(item => item.preco).reduce((a, b) => a + b);

      mediaDosAnos = arraySelecionados.map(item => item.ano).reduce((a, b) => a + b);
      mediaDosAnos = mediaDosAnos / arraySelecionados.length;

      let media = arraySelecionados.map(item => item.km).reduce((a, b) => a + b);
      media = media / arraySelecionados.length;
      const array = arraySelecionados.map(item => (item.km - media) ** 2);

      desvioPadraoKm = array.reduce((a, b) => a + b);
      desvioPadraoKm = Math.sqrt(desvioPadraoKm / array.length);
   }

   const mascaraKM = new Intl.NumberFormat('pt-BR').format(desvioPadraoKm);

   $carros_selecionados.innerHTML = `<u><b>Carros selecionados: ${arraySelecionados.length}</b></u>`;
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
