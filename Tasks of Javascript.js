// 1. Необходимо создать массив evenNumbers со всеми четными числами от 0 до 100, используя метод push()
// const evenNumbers = []; // Your code here... console.log(evenNumbers); // [0, 2, 4, 6, 8, /* ... ,*/ 100]
const evenNumbers = [];

for (let i = 0; i <= 100; i+=2) {
    evenNumbers.push(i)
}

console.log(evenNumbers);
// 2. 1. Создай массив из элементов “HTML”, “CSS”, “React”, “.NET”
// 2. Удали последний элемент
// 3. Добавь в конец массива “Node.js” и “Docker”
const cont = ['HTML', 'CSS', 'React', '.NET']
function replace(arr) {
arr.pop()
arr.push('Node.js', 'Docker')
}
    // cont.pop()
    // cont.push('Node.js')
replace(cont)
console.log(cont)



// 3. Дан массив с массивами arrays. Необходимо проверить каждый внутренний массив на то,
//  начинается ли он с 0. Если первый элемент — 0, то этот элемент (число 0), необходимо удалить.
const arr = [ [0, 1, 2, 3], [10, 2, 5, 8], [12, 5, 23, 25], [0, -2, 4, 10], [-1, 0, 54, 32] ];

// let arr = [[ 2, 0, 3, 4, 5], [1, 6, 0, 7, 8], [0, 9, 1, 10]];

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][0] == 0) {
                arr[i].shift()
            }
	}
}

console.log(arr)







// let arr = [];

// for (let i = 0; i < 2; i++) {
// 	arr[i] = []; // создаем подмассив
	
// 	for (let j = 0; j < 4; j++) {
// 		arr[i].push(j + 1); // заполняем подмассив числами
// 	}
// }

// console.log(arr)

// 4. Дан массив с именами, упорядоченными по алфавиту: “Алексей”, “Артур”, “Владимир”. 
// Необходимо добавить новые имена “Александр” и “Евгений” таким образом, чтобы алфавитный порядок сохранился.

 const names = ['Алексей', 'Артур', 'Владимир']; 

    names.push('Александр', 'Евгений')
    names.sort()
 
 console.log(names)

//  5. Тебе даны 2 массива arr1 и arr2. Напиши функцию foo(), которая будет принимать массив и делать с ним следующее:
// 1.	Брать последние 3 элемента
// 2.	Увеличивать их в 2 раза
// 3.	Возвращать этот массив (с 3 элементами)
// const arr1 = [1, 7, 4, 8, 3, 4, 5]; 
// const arr2 = [4, 2, 7, 9, 3, 1, 3, 6, 4, 3]; 


function foo(arr, start, step, end) {

    // const merged = [];
    // for (let i = start; i < end; i++) {
    //     merged[i] = arr[i] * 2
    // }

    // arr.splice(start, step, ...merged)

    // return arr 

} 
//  foo(arr2,  arr2.length - 3, 3, arr2.length - 1)
// console.log(arr2)
// Your code here... } console.log(foo(arr1)); // [6, 8, 10] console.log(foo(arr2));


const arr1 = [1, 7, 4, 8, 3, 4, 5]; 
const arr2 = [4, 2, 7, 9, 3, 1, 3, 6, 4, 3]; 

// second version

// function foo(arr, start, end) {
    
    // let res;
    // It is not an Indian code
    // if (end) {
        //    res =  arr.length
        //    end = res
        // }
        
        // for (let i = start; i < end; i++) {
            //     arr[i] = arr[i] * 2
            // }
            // return arr
        // }
        //  foo(arr2,  arr2.length - 3, arr2.length - 1)
        //  console.log(arr2)

        //

        // 6. Тебе дан массив languages с элементами: “JavaScript”, “C#”, “Java”, “English”, “Go”, “Python”. 
// Одной строчкой кода удали лишний элемент и замени его на любой подходящий. 

const languages = ['JavaScript', 'C#', 'Java', 'English', 'Go', 'Python']; 
languages.splice(3, 1,'C++')
console.log(languages)
// Your code here... console.log(languages); // ['JavaScript', 'C#', 'Java', 'C++', 'Go', 'Python']

// 7. Тебе дан массив с названиями методов массивов. Необходимо вывести в консоль сообщения
// “Метод ИМЯ_МЕТОДА” для каждого метода массива. 

const methods = [ 'push()', 'pop()', 'shift()', 'unshift()', 'slice()', 'splice()', 'forEach()', 'map()', 'find()', 'findIndex()' ];
for (let i = 0; i < methods.length; i++) {
    console.log(`Метод ${methods[i]}`)
} 
// Your code here... // Вывод // Метод push() // Метод pop() // Метод shift() // Метод unshift() // Метод slice() // Метод splice() 
// Метод forEach() // Метод map() // Метод find() // Метод findIndex()

// 8. Тебе дан массив ids, состоящий из id людей и объект peoplesObject, где ключ — id человека, а значение — его имя.
//  Необходимо создать новый массив peoples при помощи метода map(), в котором будут содержатся строки вида: “NAME (id: ID)”,
//   где:
// •	NAME — имя (соответствует значению id из массива ids)
// •	ID — его id.
// Порядок элементов должен остаться тем же.

const ids = [15, 1, 20, 5]; 

const peoplesObject = { 1: 'Alex', 5: 'Elena', 15: 'Igor', 20: 'Vladilen' }; 
const result = (Object) => {
    const peoples = [];
    for (let i = 0; i < Object.length; i++){
    for (let j = 0; j < ids.length; j++){
        if (ids[i] in Object.key) {
          peoples[i] = Object.value
        }
    } 
}
    return peoples
};
console.log(result(peoplesObject))

    for (let i = 0; i < ids.length; i++) {
        if (ids[i] === peoplesObject) {
            peoples[i] = peoplesObject.value
        }
    } 

        
console.log(peoples)

// Your code here... console.log(peoples); // ['Igor (id: 15)', 'Alex (id: 1)', 'Vladilen (id: 20)', 'Elena (id: 5)']

// 9. Вам дан массив computers с объектами. 
// Найди в массиве объект “MacBook Pro 16” и выведи его в консоль.

const computers = [ 
    { name: 'MacBook Pro 13', price: 150000 }, 
    { name: 'MacBook Pro 14', price: 200000 }, 
    { name: 'MacBook Pro 16', price: 300000 }, 
];

const res = computers.find(computers => {
    if(computers.name === 'MacBook Pro 13') {
        return computers.name
    }
})

console.log(res)
 // Your code here... console.log(macbook); // { name: 'MacBook Pro 16', price: 300000 }



//  10. Тебе дан массив computers с объектами. 
//  Найди индекс элемента “MacBook Pro 13” и, если он есть, удали элемент по данному индексу. 

const computers2 = [ 
    { name: 'MacBook Pro 13', price: 150000 }, 
    { name: 'MacBook Pro 14', price: 200000 }, 
    { name: 'MacBook Pro 16', price: 300000 }, 
]; 
const res2 = computers2.findIndex(computers2 => {
    const index = computers2.name === 'MacBook Pro 13'
    if (index) {
        return computers2.name
    }
})
   for (let i = 0; i < computers2.length; i++) {
    computers2[i] = computers2[i + 1]
}
computers2.length -= 1
console.log(res2)

console.log(computers2)
// Your code here... console.log(computers); /* [ {name: 'MacBook Pro 14', price: 200000}, {name: 'MacBook Pro 16', price: 300000} ] */


// 11. Тебе дан массив чисел arrayNumbers. 
// Необходимо создать переменную hasMoreThenHundred, которая будет true или false в зависимости от того,
//  есть ли в нем хотя бы одно число строго больше 100:
const arrayNumbers = [10, 15, 5, 100, 50, 101, 203, 800]; 
let hasMoreThenHundred= [];
hasMoreThenHundred.push(...arrayNumbers)

for (let i = 0; i < hasMoreThenHundred.length; i++) {
    if (hasMoreThenHundred[i] > 100) {
        console.log(true)
        break
    } 
}

console.log(hasMoreThenHundred)
// Your code here... console.log(hasMoreThenHundred); // true

// 12.Тебе дан массив чисел arrayNumbers1. Необходимо создать переменную isEven, 
// которая будет true или false в зависимости от того, являются ли все числа массива четными:
const arrayNumbers1 = [2, 4, 10, 6, 8, 14, 24, 50]; 
const isEven = [];
for (let i = 0; i < arrayNumbers1.length; i++) {
  if(arrayNumbers1[i] % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
  return isEven
}
console.log(isEven);
// Your code here... console.log(isEven); // true

// let containsEvenNum1 = [1, 3, 5]; 
// let containsEvenNums = function(numArray) {
//     let containsEvenNum = false;

//     numArray.forEach(function(element) {
//         if(element % 2 == 0) {
//             containsEvenNum = true;
//         }
//     });
//     return containsEvenNum;
// };

// console.log(containsEvenNums(containsEvenNum1));


//13. Тебе дан массив array с подмассивами. Нужно создать переменную flattedArray с элементами массива array 
// без вложенности (получить одноуровневый массив). Тебе нужно написать логику, которая будет убирать 
// вложенность любого уровня:
const array2 = [1, 2, [3, 4], [[5, 6], [7, 8]], [[[9]]]]
  
  function simplifyArray(array2) {
    const result = []
  
    function recursivePushElem(arr) {
      arr.forEach(i => {
        if (Array.isArray(i)) recursivePushElem(i)
        else result.push(i)
      })
    }
    recursivePushElem(array2)
  
    console.log(result)
    return result
  }
  
  simplifyArray(array2)
// Your code here... console.log(flattedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
// var arr11=[0,3,[1,2],[3,4],[5,6], [[[5]]]];
// var result2=[].concat(...arr11);
// console.log(result2);

// 14. Тебе дан массив чисел arrayNumbers. Необходимо отсортировать массив в порядке убывания:
const arrayNumbers11 = [10, -2, -3, 0, 1, 30, 25]; 
arrayNumbers11.sort();
arrayNumbers11.reverse();
    
console.log(arrayNumbers11);

// Your code 
// 15. У тебя есть два массива firstArray и secondArray. Все, что нужно сделать – 
// это создать переменную concatedArray и с объединенными массивами:
const firstArray = ['J', 'a', 'v', 'a'];
const secondArray = ['S', 'c', 'r', 'i', 'p', 't']; 
const concatedArray = [].concat(firstArray, secondArray);
console.log(concatedArray.join(''));


// Your code here... console.log(concatedArray); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'] console.log(concatedArray.join('')); // JavaScript


// 16. Создай массив array, состоящий из 100 элементов со значением 0 без использования циклов: 

const array = new Array(100).fill(0);
console.log(array)
// Your code here... console.log(array); // [0, 0, 0, 0, 0, 0, /* ... , */ 0]



// 17. Тебе дан массив строк technologies – технологии, изученные разработчиком. 
// Тебе нужно создать переменную hasJs, которая будет true или false в зависимости от того, 
// есть ли в массиве элемент 'JavaScript':
const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Vue']; 
const hasJs = [];
for (let i = 0; i < technologies.length; i++) {
     if (technologies == 'JavaScript') {
    console.log(true);
}else {
    console.log(false)
}
} 
console.log(hasJs);
// Your code here... console.log(hasJs); // true
