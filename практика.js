
//Задание по переменным:
var a = 3;
console.log(a);

var A = 10;
var B = 2;
console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(A / B);

var c = 15;
var d = 2;
var result = c + d;
console.log(result);

var aa = 10;
var bb = 2;
var cc = 5;
console.log(aa + bb + cc);

var a = 17;
var b = 10;
var c = a - b;
var d = 7;
var result = c + d;
console.log(result);

// Задание по строкам:
var text = 'Hello, world!';
console.log(text);

var text1 = 'Hello, ';
var text2 = 'world!'
console.log(text1 + text2);

var text = 'Hello, world!';
console.log(text.substr(7, 5));

// еще задачи:
// Написать скрипт, который считает количество секунд 
console.log(60 * 60 * 60); // в часе
сonsole.log(60 * 60 * 60 * 24); // в сутках
console.log(60 * 60 * 60 * 24 * 7); // в неделе
console.log(60 * 60 * 60 * 24 * 7 * 30); // в месяце(30 дней)

// //Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --.
 let num = 1;
// // num = num + 12;
// // num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num ++;
num --;
console.log(num);


//Создайте три переменные - час, минуты, секунды. С их помощью выведите текущее время в формате 'час:минуты:секунды'.
let date = new Date();
function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}
console.log(addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()));


//Переделайте этот код так, чтобы в нем использовалась операция +=. Количество строк при этом не должно измениться!
// let text = 'I ';
// text = text + 'want ';
// text = text + 'know ';
// text = text + 'JS!';
// console.log(text);

let text = 'I ';
text += 'want ';
text += 'know ';
text += 'JS!';
console.log(text);


//Немного математики:
var a = 3;
var b = 2;
console.log(a + b);
console.log(a * b); // Даны два числа. Найти их сумму и произведение.
console.log((a + b)**2); //Найти сумму их квадратов.
console.log((4 + 3 + 5) / 3); //Найти их среднее арифметическое.
var x = 5;
var y = 1;
var z = 10;
console.log((x + 1) - 2 * (z - (2 * x) + y)); // найти(х-1)-2(z-2x+y).

var d = 8;
console.log(d % 3); //найти остатки от деления на число 3;
console.log(d % 5); //найти остатки от деления на число 5;
console.log((d * 30 / 100) + d);
console.log((d * 120 / 100) + d);

//3>2? "сдан экзамен" : "не сдан экзамен"; По этому примеру реализуйте три задачи.
var age = 18;
console.log((age >= 18) ? 'ok' : 'no'); //тебе есть 18 лет
var d = false;
console.log((d) ? 'true' : 'false'); // есть ли загранпаспорт
var f = 14;
console.log((f <= 16) ? 'true' : 'false');

// Задача деление по модулю:
var g = [2, 4, 5, 7]; //определить четное  или не четное число, используя тернарную операцию 
for (var i = 0; i < g.length; i++) {
console.log((g[i] % 2 == 0) ? ('четное') : ('нечетное')); 
}

//Задачи по массивам:
//  Создайте массив orders с несколькими элементами в формате “название товара: цена”. Добавьте в него 
//один элемент в начало и в конец. Выведите все элементы массива на экран.
var order = ['ложка: 3', 'вилка: 4', 'нож: 5'];
order.unshift( 'тарелка: 6' );
order.push( 'чашка: 7' );
console.log(order);

//Создайте массив с пятью элементами. Удалите второй и четвертый элемент. Выведите все элементы массива.
var a = ['овен', 'водалей', 'козерог', 'стрелец', 'весы'];
a.splice(2, 1);
a.pop();
console.log(a);

//Создайте массив с несколькими элементами. Выведите все четные элементы массива.
var d = [ 8, 4, 4, 5, 7];
for(var i = 0; i < d.length; i++) {
    if(d[i] % 2 ==0) {
        console.log(d[i]); 
    }
}

//  Создайте массив с несколькими числами, используя цикл найдите максимальное число в массиве.
var d = [8, 4, 44, 15, 7];
var i = 0;
var max = 0
while (i < d.length) {
    if (max < d[i]) {
        max = d[i];
    }
    i++; 
    console.log(max);  
}

//Создайте два массива с числами одинаковой длины, сравните элементы одного массива с элементами другого.
var d = [8, 4, 4, 5, 7];
var D = [8, 4, 3, 4, 7];
for (var i = 0; i < d.length; i++) {
        console.log(d[i], D[i]);
        console.log(d[i] === D[i]);
}

//Создайте массив со строками ‘Я хочу знать JS’ и ‘Я не хочу знать JS’. Используя поиск по строке удалите
//из него элемент ‘Я не хочу знать JS’.
b = ['Я хочу знать JS.', 'Я не хочу знать JS.'];
console.log(b.includes('Я не хочу знать JS.'));
console.log(b.indexOf('Я не хочу знать JS.'));
b.splice(1, 1);
console.log(b);
