
var number = [
	//30
	{
		date: 1548806400000,
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
		date: 1548892800000,
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
		date: 1548979200000,
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
		date: 1549065600000,
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
		date: 1549152000000,
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
		date: 1549238400000,
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
		date: 1549324800000,
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
		date: 1549411200000,
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
		date: 1549497600000,
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
		date: 1549584000000,
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
		date: 1549670400000,
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
		date: 1549756800000,
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
		date: 1549843200000,
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
		date: 1549929600000,
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
		date: 1550016000000,
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
	switch (month) {
		case 0:
			return "Января";
		case 1:
			return "Февраля";
		case 2:
			return "Марта";
		case 3:
			return "Апреля";
		case 4:
			return "Мая";
		case 5:
			return "Июня";
		case 6:
			return "Июля";
		case 7:
			return "Августа";
		case 8:
			return "Сентября";
		case 9:
			return "Октября";
		case 10:
			return "Ноября";
		case 11:
			return "Декабря";
		default:
			return "Unknown";
	}
}

// Назавние дня
function dayOfTheWeek(dayWeek) {
	switch (dayWeek) {
		case 0:
			return "Воскресенье";
		case 1:
			return "Понедельник";
		case 2:
			return "Вторник";
		case 3:
			return "Среда";
		case 4:
			return "Четверг";
		case 5:
			return "Пятница";
		case 6:
			return "Суббота";
		default:
			return "Unknown";
	}
}

// Осадки
function snowAndRain(snow, rain) {
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
function imageWeather(cloudiness) {
	switch (cloudiness) {
		case "Ясно":
			return 'sun';
		case "Облачно":
			return 'cloud';
		case "Дождь":
			return 'rain';
		case "Снег":
			return 'snow';
		case 'Дождь со снегом':
			return 'rainSnow';
		default:
			return 'unknow';
	}
}

var timeNow = new Date;  //  Время в данный момент
var dayLength = 86400000;
var numberDay = 0;
for (var i = 0; i < number.length; i++) {     // Какая дата во входных данных соответствует текущей
	var difference = timeNow - number[i].date;   // Вычисление разницы во времени
	if ((difference < dayLength) && (difference >= 0)) {    // Если разница меньше 24 часов, то берем этот номер массива
		numberDay = i;
	}
}
// Проверка исключений
var leftArrow = document.querySelector('.arrow_left');
var rightArrow = document.querySelector('.arrow_right');


if ((timeNow - number[number.length - 4].date) > dayLength) {
	numberDay = number.length - 4;                    // Если текущая дата позже чем четверая в конце в массиве
	rightArrow.classList.add("unactive")
} else if (timeNow < number[0].date) {                // Если текущая дата раньше чем первая в массиве
	numberDay = 0;
	leftArrow.classList.add("unactive")
}
function main(numberDay) {    // Главная функция, записывающая информации, в блоки с погодой
	for (var n = 0; n < 4; n++) {    // Цикл для заполнения четерех ячеек с погодой
		var time = new Date(number[numberDay].date); //узнаем дату этого дня
		var month = time.getUTCMonth();   //получаем месяц (номер);
		showMonth(month);  //определяем название месяца
		var dataAttr = document.querySelector('[data-number="' + n + '"]');
		dataAttr.querySelector('.month').innerHTML = showMonth(month);  // Название месяца
		dataAttr.querySelector('.number').innerHTML = time.getUTCDate(); // Номер дня
		dataAttr.querySelector('.when').innerHTML = dayOfTheWeek(time.getUTCDay()); // Название дня недели
		dataAttr.querySelector('.day span').innerHTML = '  ' + number[numberDay].temperature.day + '\u00B0'; // Температура днем
		dataAttr.querySelector('.night span').innerHTML = '  ' + number[numberDay].temperature.night + '\u00B0'; // Температура ночью
		if ((timeNow.getUTCDate() === time.getUTCDate()) && (timeNow.getUTCMonth() == time.getUTCMonth())) {
			dataAttr.querySelector('.when').innerHTML = 'Сегодня';  // Определяем для какого дня нужно писать "сегодня"
		}
		dataAttr.querySelector('.rain_and_snow').innerHTML = snowAndRain(number[numberDay].snow, number[numberDay].rain);
		dataAttr.querySelector('#weater').className = ''; 
		dataAttr.querySelector('#weater').classList.add(imageWeather(number[numberDay].cloudiness)); // Добавление класса для изображения
		numberDay = numberDay + 1;
	}
}
// Левая стрелка
leftArrow.addEventListener("click", function () {
	if (numberDay > 0) {
		numberDay = numberDay - 1;
		main(numberDay);
		rightArrow.classList.remove("unactive")  // 
	}
	if (numberDay === 0) { // Если листать некуда, изменить цвет
		leftArrow.classList.add("unactive")
	}
});

// Правая стрелка
rightArrow.addEventListener("click", function () {
	if (numberDay < number.length - 4) {
		numberDay = numberDay + 1;
		main(numberDay);
		leftArrow.classList.remove("unactive")
	}
	if (numberDay === number.length - 4) { //Если листать некуда, изменить цвет
		rightArrow.classList.add("unactive")
	}
});

main(numberDay);



