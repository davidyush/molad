import { defineMolad, isMeubarYear, prettyPrint } from './molad'
import { monthsOrdinary, monthsMeubar } from './constans'
import { defineRoshAshona } from './roshAshona'

const molad = defineMolad(5784, 'tishrei');
const rosh = defineRoshAshona(molad, 5784);
console.log(molad,rosh);

function getInfo(year) {
  const isMeubar = isMeubarYear(year);
  let currentMonths = [];
  let result = [];

  if(!isMeubar) {
    currentMonths = monthsOrdinary;
  } else {
    currentMonths = monthsMeubar;
  }

  currentMonths.forEach((month) => {
    let molad = defineMolad(year, month);
    result.push({
      month: month,
      molad: prettyPrint(molad)
    });
  });

  return result;
}

const tb = document.getElementById('tbody');
const table = document.getElementById('main-table');
const year = document.getElementById('year');

// if(tbody.innerHTML.length === 0) {
//   table.style.display = 'none';
// }


year.addEventListener('change', (event) => {
  event.preventDefault();
  tb.innerHTML = '';
  let infoMolad = getInfo(event.target.value);

  // if(infoMolad !== undefined) {
  //   table.style.display = 'block';
  // }

  infoMolad.forEach(current => {
    let tr = createTr(current);
    tb.appendChild(tr);
  });

});

function createTr(currentMolad) {
  let tr = document.createElement('tr');
  let month = document.createElement('td');
  let molad = document.createElement('td');
  month.innerHTML = currentMolad.month;
  molad.innerHTML = currentMolad.molad;
  tr.appendChild(month);
  tr.appendChild(molad);
  return tr;
}
