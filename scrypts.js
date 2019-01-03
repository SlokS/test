
var number = [
//30
{
	date: 1546128000000,
	temperature: {
		night: -3,
		day: 2,
	},
	cloudiness: "Ясно",
	snow: false,
	rain: false
},
// 31
{
	date: 1546214400000,
	temperature: {
		night: 0,
		day: 1,
	},
	cloudiness: "Облачно",
	snow: false,
	rain: false
},
// 1
{
	date: 1546300800000,
	temperature: {
		night: -4,
		day: 7,
	},
	cloudiness: "Дождь",
	snow: false,
	rain: true
},
// 2
{
	date: 1546387200000,
	temperature: {
		night: -9,
		day: 3,
	},
	cloudiness: "Дождь со снегом",
	snow: true,
	rain: true
},
// 3
{
	date: 1546473600000,
	temperature: {
		night: 0,
		day: 31,
	},
	cloudiness: "Снег",
	snow: true,
	rain: false
},
// 4
{
	date: 1546560000000,
	temperature: {
		night: 2,
		day: 5,
	},
	cloudiness: "Облачно",
	snow: false,
	rain: false
},
//5
{
	date: 1546646400000,
	temperature: {
		night: -8,
		day: 1,
	},
	cloudiness: "Облачно",
	snow: false,
	rain: false
},
//6
{
	date: 1546732800000,
	temperature: {
		night: -2,
		day: 3,
	},
	cloudiness: "Дождь со снегом",
	snow: true,
	rain: true
},
//7
{
	date: 1546819200000,
	temperature: {
		night: -3,
		day: 2,
	},
	cloudiness: "Дождь",
	snow: false,
	rain: true
},
//8
{
	date: 1546905600000,
	temperature: {
		night: -1,
		day: 1,
	},
	cloudiness: "Снег",
	snow: true,
	rain: false
},
//9
{
	date: 1546992000000,
	temperature: {
		night: -3,
		day: 8,
	},
	cloudiness: "Дождь со снегом",
	snow: true,
	rain: true
},
//10
{
	date: 1547078400000,
	temperature: {
		night: 0,
		day: 0,
	},
	cloudiness: "Снег",
	snow: true,
	rain: false
},
//11
{
	date: 1547164800000,
	temperature: {
		night: -1,
		day: 4,
	},
	cloudiness: "Дождь",
	snow: false,
	rain: true
},
//12
{
	date: 1547251200000,
	temperature: {
		night: 0,
		day: 1,
	},
	cloudiness: "Облачно",
	snow: false,
	rain: false
},
//13
{
	date: 1547337600000,
	temperature: {
		night: 4,
		day: 10,
	},
	cloudiness: "Ясно",
	snow: false,
	rain: false
}];

// Название месяца
function showMonth(month) {
	switch(month){
		case 0:
		return "Января";
		break;
		case 1:
		return "Февраля";
		break;
		case 2:
		return "Марта";
		break;
		case 3:
		return "Апреля";
		break;
		case 4:
		return "Мая";
		break;
		case 5:
		return "Июня";
		break;
		case 6:
		return "Июля";
		break;
		case 7:
		return "Августа";
		break;
		case 8:
		return "Сентября";
		break;
		case 9:
		return "Октября";
		break;
		case 10:
		return "Ноября";
		break;
		case 11:
		return "Декабря";
		break;
		default:
        return "Unknown";
	}
}

// Назавние дня
function dayOfTheWeek(dayWeek){
	switch(dayWeek){
		case 0: 
		return "Воскресенье";
		break;
		case 1: 
		return "Понедельник";
		break;
		case 2: 
		return "Вторник";
		break;
		case 3: 
		return "Среда";
		break;
		case 4: 
		return "Четверг";
		break;
		case 5: 
		return "Пятница";
		break;
		case 6: 
		return "Суббота";
		break;
		default:
        return "Unknown";
	}
}

// Осадки
function snowAndRain(snow, rain){
	if (snow && rain) {
		return "дождь со снегом";
	} else if (snow) {
		return "снег";
	} else if (rain) {
		return "дождь";
	} else {
		return "без осадков";
	}
}

// Возвращает название класса, для картинки с погодой
function imageWeather(cloudiness){
	switch(cloudiness){
		case "Ясно":
			return 'sun';
			break;
		case "Облачно":
			return 'cloud';
			break;
		case "Дождь":
			return 'rain';
			break;
		case "Снег":
			return 'snow';
			break;
		case 'Дождь со снегом':
			return 'rainSnow';
			break;
		default:
        return 'unknow';
	}
}

var timeNow = new Date;  //  Время в данный момент
console.log('time is',+timeNow);
console.log(number.length);
for (var i =0; i<number.length; i++){     // Какая дата во входных данных соответствует текущей
	var difference = timeNow - number[i].date;   // Вычисление разницы во времени
	if ((difference<86400000)&&(difference>=0)) {    // Если разница меньше 24 часов, то берем этот номер массива
		numberDay = i;
	}
}
// Проверка исключений
var leftArrow = document.querySelector('.arrow_left');
var rightArrow = document.querySelector('.arrow_right');

if ((timeNow-number[number.length-4].date)>86400000) {
	numberDay = number.length-4;                    // Если текущая дата позже чем четверая в конце в массиве
	rightArrow.classList.add("unactive")
} else if (timeNow<number[0].date) {                // Если текущая дата раньше чем первая в массиве
	numberDay=0;
	leftArrow.classList.add("unactive")
}
console.log(numberDay);
function Main(numberDay){    // Главная функция, записывающая информации, в блоки с погодой
	for (var n = 0; n < 4; n++) {    // Цикл для заполнения четерех ячеек с погодой
		var time = new Date(number[numberDay].date); //узнаем дату этого дня
		month = time.getUTCMonth();   //получаем месяц (номер);
		showMonth(month);  //определяем название месяца
		var dataAttr = document.querySelector('[data-number="'+n+'"]'); 
		dataAttr.querySelector('.month').innerHTML = showMonth(month);  // Название месяца
		dataAttr.querySelector('.number').innerHTML = time.getUTCDate(); // Номер дня
		dataAttr.querySelector('.when').innerHTML = dayOfTheWeek(time.getUTCDay()); // Название дня недели
		dataAttr.querySelector('.day span').innerHTML = '  '+number[numberDay].temperature.day+'\u00B0'; // Температура днем
		dataAttr.querySelector('.night span').innerHTML = '  '+number[numberDay].temperature.night+'\u00B0'; // Температура ночью
		if (	(timeNow.getUTCDate()==time.getUTCDate())&&(timeNow.getUTCMonth()==time.getUTCMonth())	) {
	 		dataAttr.querySelector('.when').innerHTML = 'Сегодня';  // Определяем для какого дня нужно писать "сегодня"
		}
		dataAttr.querySelector('.rain_and_snow').innerHTML = snowAndRain(number[numberDay].snow, number[numberDay].rain);
		dataAttr.querySelector('#weater').classList.remove("sun","rain","snow","rainSnow","cloud");
		dataAttr.querySelector('#weater').classList.add(imageWeather(number[numberDay].cloudiness)); // Добавление класса для изображения
		numberDay=numberDay+1;
	}
}
// Левая стрелка
function toLeft(){ 
	if (numberDay>0) {
		numberDay=numberDay-1;
		Main(numberDay);
		rightArrow.classList.remove("unactive")
	}
	if (numberDay==0) { // Если листать некуда, изменить цвет
		leftArrow.classList.add("unactive")
	}
}
// Правая стрелка
function toRight(){
	if (numberDay<number.length-4) {
		numberDay=numberDay+1;
		Main(numberDay);
		leftArrow.classList.remove("unactive")
	}
	if (numberDay==number.length-4) { //Если листать некуда, изменить цвет
		rightArrow.classList.add("unactive")
	}
}

Main(numberDay);



