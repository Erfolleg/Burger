var name = 'Булат'
console.log(name);
name = 'Рита'
console.log(name);

if (name == 'Рита') {
    console.log('Да');
};

if (name == 'Булат') {
    console.log('Да');
} else {
    console.log('Нет');
}

for (var i = 0; i < 10; i++) {
    console.log(i);
}

function sum(p1, p2, p3) {
    var result = p1 + p2 + p3;
    return result;
}
var result = sum(10, 20, 30);
var result2 = sum(5, 6, 7);
var result3 = sum(30, 40, 60);
console.log(result, result2, result3);

var array = ['Привет', 'loftschool'];
array.push('я изучаю', 'javascript');
console.log(array.length);

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

var arr = [55, 84, 120, 350, 49, 540, 15, 351, 3, 101];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 100) {
        console.log(arr[i]);
    }
}

var fio =
{
    name: 'Булат',
    lastName: 'Хисаев',
    age: 30

};
console.log(fio.name);
console.log(fio.lastName);
console.log(fio.age);

fio.work = 'programmer';
console.log(fio.name);
console.log(fio.lastName);
console.log(fio.age);
console.log(fio.work);

var human = {
    name: 'Булат',
    lastName: 'Хисаев',
    age: 30
};
function hello(human) {
    var hi = 'Привет, меня зовут ' + human.name + human.lastName + ' и мне ' + human.age + ' лет!';
    return hi;
}

var hi = hello(human);
console.log(hi);

