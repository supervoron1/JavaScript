// Задание 1

var tempCelsius = +prompt('Задайте температуру с градусах по Цельсию: ');
var tempFahrenheit = (9 / 5) * tempCelsius + 32;
alert ('Температура в градусах по Фаренгейту составит ' + tempFahrenheit + ' градусов.');

// Задание 2

var name = 'Василий';
var admin = name;
alert (admin);

// Задание 3 (Конкатенация. Одно из значений тип.string, поэтому склеиваем, а не мат.сложение)

var num = 1000;
var str = '108';
alert (num + str);
