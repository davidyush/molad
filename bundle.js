/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var moonMonth = exports.moonMonth = '29.12.793';
var sunYear = exports.sunYear = '365.6.0';
var moonSimpleYear = exports.moonSimpleYear = '354.8.876';
var moonMeubarYear = exports.moonMeubarYear = '383.21.589';

var restOfMonth = exports.restOfMonth = '1.12.793';
var restOfMachzor = exports.restOfMachzor = '2.16.595';
var restOfSimpleYear = exports.restOfSimpleYear = '4.8.876';
var restOfMeubarYear = exports.restOfMeubarYear = '5.21.589';

var firstMolad = exports.firstMolad = '2.5.204';

var meubarYears = exports.meubarYears = [3, 6, 8, 11, 14, 17, 19];

var monthsOrdinary = exports.monthsOrdinary = ['tishrei', 'cheshvan', 'kislev', 'tevet', 'shevat', 'adar', 'nisan', 'iyar', 'sivan', 'tammuz', 'av', 'elul'];

var monthsMeubar = exports.monthsMeubar = ['tishrei', 'cheshvan', 'kislev', 'tevet', 'shevat', 'adar', 'adar2', 'nisan', 'iyar', 'sivan', 'tammuz', 'av', 'elul'];

//--- rosh ashona constans

//days rosh-ahona cannot fall
var adu = exports.adu = [1, 4, 6];

var exclude39204 = exports.exclude39204 = '3.9.204';
var exclude215489 = exports.exclude215489 = '2.15.589';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMachzorAndYear = getMachzorAndYear;
exports.isMeubarYear = isMeubarYear;
exports.getRestOfAllMachzors = getRestOfAllMachzors;
exports.defineDayAfterRests = defineDayAfterRests;
exports.getRestOfMonths = getRestOfMonths;
exports.getRestOfYears = getRestOfYears;
exports.defineMolad = defineMolad;
exports.prettyPrint = prettyPrint;

var _constans = __webpack_require__(0);

var _math_helpers = __webpack_require__(2);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getMachzorAndYear(year) {
  var machzorOrder = Math.floor(year / 19);
  if (year % 19 === 0) {
    machzorOrder--;
  }

  var yearOrder = year % 19 || 19;

  return {
    machzorOrder: machzorOrder,
    yearOrder: yearOrder
  };
}

function isMeubarYear(year) {
  var currentYearOfMachzor = getMachzorAndYear(year).yearOrder;
  for (var i = 0; i < _constans.meubarYears.length; i++) {
    if (currentYearOfMachzor === _constans.meubarYears[i]) {
      return true;
    }
  }
  return false;
}

function getRestOfAllMachzors(machzorOrder) {
  return (0, _math_helpers.multyTime)(_constans.restOfMachzor, machzorOrder);
}

function defineDayAfterRests(time) {
  var currentTime = (0, _math_helpers.fromStringToArr)(time);
  currentTime[0] = currentTime[0] % 7 || 7;
  return (0, _math_helpers.fromArrToString)(currentTime);
}

function getRestOfMonths(monthName, months) {
  var result = void 0;
  months.forEach(function (month, index) {
    if (monthName === month) {
      result = index;
    }
  });
  return (0, _math_helpers.multyTime)(_constans.restOfMonth, result);
}

function getRestOfYears(yearOrder) {
  var simpleYears = 0;
  var meubarYears = 0;
  for (var i = 1; i < yearOrder; i++) {
    if (isMeubarYear(i)) {
      meubarYears++;
    } else {
      simpleYears++;
    }
  }

  return (0, _math_helpers.plusTime)((0, _math_helpers.multyTime)(_constans.restOfSimpleYear, simpleYears), (0, _math_helpers.multyTime)(_constans.restOfMeubarYear, meubarYears));
}

function defineMolad(year, month) {
  var currentYear = getMachzorAndYear(year);
  var restOfMachzorsBefore = getRestOfAllMachzors(currentYear.machzorOrder);
  var restOfYearsBefore = getRestOfYears(currentYear.yearOrder);

  var currentMonths = isMeubarYear(currentYear.yearOrder) ? [].concat(_toConsumableArray(_constans.monthsMeubar)) : [].concat(_toConsumableArray(_constans.monthsOrdinary));

  var restOfMonthsBefore = getRestOfMonths(month, currentMonths);

  return defineDayAfterRests((0, _math_helpers.plusTime)(restOfMachzorsBefore, restOfYearsBefore, restOfMonthsBefore, _constans.firstMolad));
}

function makeCurrentHourString(n) {
  if (n <= 6) return n + 6 + ' at night';else if (n >= 7 && n <= 12) return (n % 6 || 6) + ' at the morning';else if (n >= 13 && n < 18) return n % 12 + 6 + ' at the morning';else if (n === 18) return 12 + ' at afternoon';else if (n > 18 && n < 22) return n % 18 + ' at afternoon';else if (n >= 22) return n % 18 + ' at the evening';
}

function prettyPrint(molad) {
  var arrMolad = molad.split('.').map(function (num) {
    return Number(num);
  });
  arrMolad[3] = arrMolad[2] % 18 || 18;
  arrMolad[2] = Math.floor(arrMolad[2] / 18);
  return arrMolad[0] + ' day, ' + makeCurrentHourString(arrMolad[1]) + ' hours, ' + arrMolad[2] + ' minutes, ' + arrMolad[3] + ' parts';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.completePositiveTime = completePositiveTime;
exports.shouldComplete = shouldComplete;
exports.fromStringToArr = fromStringToArr;
exports.fromArrToString = fromArrToString;
exports.multyTime = multyTime;
exports.plusTime = plusTime;
exports.minusTime = minusTime;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function completePositiveTime(time) {
  var currentTime = [].concat(_toConsumableArray(time));

  if (shouldComplete(currentTime)) {
    currentTime.forEach(function (num, index) {
      if (index === 1) {
        currentTime[0] += Math.floor(num / 24);
        currentTime[1] = num % 24;
      } else if (index === 2) {
        currentTime[1] += Math.floor(num / 1080);
        currentTime[2] = num % 1080;
      }
    });
  }

  return shouldComplete(currentTime) ? completePositiveTime(currentTime) : fromArrToString(currentTime);
}

function shouldComplete(timeArr) {
  if (timeArr[1] > 24 || timeArr[2] > 1080) {
    return true;
  }
  return false;
}

function fromStringToArr(string) {
  return string.split('.').map(function (elem) {
    return Number(elem);
  });
}

function fromArrToString(arr) {
  return arr.join('.');
}

function multyTime(time, number) {
  var result = [];
  fromStringToArr(time).forEach(function (num) {
    return result.push(num * number);
  });
  return completePositiveTime(result);
}

function plusTime() {
  var nums = Array.prototype.slice.call(arguments);
  nums = nums.map(function (num) {
    return fromStringToArr(num);
  });
  var sum = nums.reduce(function (first, second) {
    return first.map(function (num, index) {
      return num + second[index];
    });
  });
  return completePositiveTime(sum);
}

function minusTime(timeOne, timeTwo) {
  var result = [];
  var currentFirst = fromStringToArr(timeOne);
  var currentSecond = fromStringToArr(timeTwo);
  currentFirst.forEach(function (el, index) {
    result.push(el - currentSecond[index]);
  });
  return completePositiveTime(result);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAduDay = isAduDay;
exports.isHalfDay = isHalfDay;
exports.is39204 = is39204;
exports.is215589 = is215589;
exports.defineRoshAshona = defineRoshAshona;

var _constans = __webpack_require__(0);

var _math_helpers = __webpack_require__(2);

var _molad = __webpack_require__(1);

/*
every function should get as an argument molad of tishrei
and acording to 4 rules we can get the day rosh-ahona should fall
*/

function isAduDay(moladDay) {
  return _constans.adu.some(function (day) {
    return day === moladDay;
  });
}

function isHalfDay(moladHour) {
  return moladHour >= 18;
}

//if current year is ordinary and molad more then 3.9.204
function is39204(molad, year) {
  var isMeubar = (0, _molad.isMeubarYear)(year);
  var moladArr = (0, _math_helpers.fromStringToArr)(molad);
  if (!isMeubar && moladArr[0] === 3 && moladArr[1] === 9 && moladArr[2] >= 204) {
    return true;
  }
  if (!isMeubar && moladArr[0] === 3 && moladArr[1] > 9) {
    return true;
  }
  return false;
}

//if previous year is meuberet and molad more then 2.15.589
function is215589(molad, year) {
  var isMeubar = (0, _molad.isMeubarYear)(year - 1);
  var moladArr = (0, _math_helpers.fromStringToArr)(molad);
  if (isMeubar && moladArr[0] === 2 && moladArr[1] === 15 && moladArr[2] >= 589) {
    return true;
  }
  if (isMeubar && moladArr[0] === 2 && moladArr[1] > 15) {
    return true;
  }
  return false;
}

//moladTishrey sholud be a result of defineMolad fn
function defineRoshAshona(moladTishrei, year) {
  var currentYear = year - 1;
  var moladTishreiArr = (0, _math_helpers.fromStringToArr)(moladTishrei);
  var isMeubar = (0, _molad.isMeubarYear)(currentYear);

  if (isMeubar && is215589(moladTishrei, currentYear)) {
    console.log('here');
    moladTishreiArr[0] = 3;
    return (0, _math_helpers.fromArrToString)(moladTishreiArr);
  } else if (!isMeubar && is39204(moladTishrei, currentYear)) {
    moladTishreiArr[0] = 5;
    return (0, _math_helpers.fromArrToString)(moladTishreiArr);
  }

  if (isAduDay(moladTishreiArr[0])) {
    moladTishreiArr[0] += 1;
  }
  if (isHalfDay(moladTishreiArr[1])) {
    moladTishreiArr[0] += 1;
  }

  if (isAduDay(moladTishreiArr[0] % 7)) {
    moladTishreiArr[0] += 1;
  }

  if (moladTishreiArr[0] > 7) {
    moladTishreiArr[0] = moladTishreiArr[0] % 7;
  }

  return (0, _math_helpers.fromArrToString)(moladTishreiArr);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _molad = __webpack_require__(1);

var _constans = __webpack_require__(0);

var _roshAshona = __webpack_require__(3);

var molad = (0, _molad.defineMolad)(5784, 'tishrei');
var rosh = (0, _roshAshona.defineRoshAshona)(molad, 5784);
console.log(molad, rosh);

function getInfo(year) {
  var isMeubar = (0, _molad.isMeubarYear)(year);
  var currentMonths = [];
  var result = [];

  if (!isMeubar) {
    currentMonths = _constans.monthsOrdinary;
  } else {
    currentMonths = _constans.monthsMeubar;
  }

  currentMonths.forEach(function (month) {
    var molad = (0, _molad.defineMolad)(year, month);
    result.push({
      month: month,
      molad: (0, _molad.prettyPrint)(molad)
    });
  });

  return result;
}

var tb = document.getElementById('tbody');
var table = document.getElementById('main-table');
var year = document.getElementById('year');

// if(tbody.innerHTML.length === 0) {
//   table.style.display = 'none';
// }


year.addEventListener('change', function (event) {
  event.preventDefault();
  tb.innerHTML = '';
  var infoMolad = getInfo(event.target.value);

  // if(infoMolad !== undefined) {
  //   table.style.display = 'block';
  // }

  infoMolad.forEach(function (current) {
    var tr = createTr(current);
    tb.appendChild(tr);
  });
});

function createTr(currentMolad) {
  var tr = document.createElement('tr');
  var month = document.createElement('td');
  var molad = document.createElement('td');
  month.innerHTML = currentMolad.month;
  molad.innerHTML = currentMolad.molad;
  tr.appendChild(month);
  tr.appendChild(molad);
  return tr;
}

/***/ })
/******/ ]);