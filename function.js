/**
 * 1. Write a JavaScript function that reverse a number. 
        Example x = 32243;
        Expected Output : 34223
 */
const reverseNum = (item) => {
       /**
        * 1.toString()方法将number类型转换为字符串类型
        * 2.将字符串类型转为数组的四种方法：
        *  方法1：使用split()方法
                     1. 一般用法
                     2. 需要转义的分隔符
                     3. 是空字符串

           方法2：使用“[...string]”语句；（ES6扩展运算符）
           方法3：使用Array.from()方法
           方法4：使用“Object.assign([], string)”语句
        */
       const strNum = item.toString().split('');
       //map(Number)将数组遍历后变成数字类型数组
       const arr = strNum.map(Number).reverse();
       /**
        * Array 对象的数组与字符串相互转换⽅法
               toString()：将数组转换成⼀个字符串
               toLocalString()：把数组转换成本地约定的字符串
               join()：将数组元素连接起来以构建⼀个字符串
        */
       const arr1 = arr.join('')
       const result = Number(arr1)
       document.write(result)
}

reverseNum(332211)




/**
 * 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
      A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 */

const palindrome = (item) => {
       const arr = item.split('');
       /**
        * trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。
          trim() 方法不会改变原始字符串。
          trim() 方法不适用于 null, undefined, Number 类型。
        */
       const noSpace = arr.filter(i => i && i.trim())
       const a = noSpace.join('');
       const arr1 = noSpace.reverse();
       const arrItem = arr1.join('');
       if (a === arrItem) {
              document.write(true)
       } else {
              document.write(false)
       }
}

palindrome('madam')




/**
 * 3. Write a JavaScript function that generates all combinations of a string.
       Example string : 'dog'
       Expected Output : d,do,dog,o,og,g
 */

function substrings(str1) {
       var array1 = [];
       for (var x = 0, y = 1; x < str1.length; x++, y++) {
              array1[x] = str1.substring(x, y);
       }
       var combi = [];
       var temp = "";
       var slent = Math.pow(2, array1.length);  // 8

       for (var i = 0; i < slent; i++) {
              temp = "";
              for (var j = 0; j < array1.length; j++) {
                     if ((i & Math.pow(2, j))) {
                            temp += array1[j];
                     }
              }
              if (temp !== "") {
                     combi.push(temp);
              }
       }
       console.log(combi.join("\n"));
}

substrings("dog");

/**
 * 字符串操作方法
 *     substring() 方法用于提取字符串中介于两个指定下标之间的字符。
       substring() 方法返回的子串包括 开始 处的字符，但不包括 结束 处的字符。会将负参数转换为0
       substr()
       slice()
              let str = 'hello world';
                     console.log(str.slice(3));  // 'lo world'
                     console.log(str.substring(3));  // 'lo world'
                     console.log(str.substr(3));  // 'lo world'
                     console.log(str.slice(3,7));  // 'lo w'
                     console.log(str.substring(3,7));  // 'lo w'
                     console.log(str.substr(3,7));  // 'lo worl'

              let str = 'hello world';
                     console.log(str.slice(-3));  // 'rld'
                     console.log(str.substring(-3));  // 'hello world'
                     console.log(str.substr(-3));  // 'rld'
                     console.log(str.slice(3,-4));  // 'lo w'
                     console.log(str.substring(3,-4));  // 'hel'
                     console.log(str.substr(3,-4));  // ''(empty string)

       charAt() 方法返回给定索引位置的字符串，如：
               let message = 'abcde';
               console.log(message.charAt(2));  //'c'

       concat() 方法用于将一个或多个字符串拼接成一个新字符串，如：
               let stringValue = 'hello';
               let result = stringValue.concat('world');
               console.log(result);  // 'hello world'
               console.log(stringValue);  // 'hello'

       toFixed()方法返回包含指定小数点位数的数值字符串，如：
              let num = 10;
              console.log(num.toFixed(2))  // 10.00
              但需注意：0.1 + 0.2 = 0.30000000000000004
 */



/**
 * 4.Write a JavaScript function that returns a passed string with letters in alphabetical order.
       Example string : 'webmaster'
       Expected Output : 'abeemrstw'
       Assume punctuation and numbers symbols are not included in the passed string.
 */

const strSort = (item) => {
       const arr = item.split('')
       /**
        * sort() 方法用于对数组的元素进行排序。
          排序顺序可以是字母或数字，并按升序或降序。
          默认排序顺序为按字母升序
          这种方法会改变原始数组
          当数字是按字母顺序排列时"40"将排在"5"前面。使用数字排序，必须通过一个函数作为参数来调用。函数指定数字是按照升序还是降序排列。
              升序：var points = [40,100,1,5,25,10];
                    points.sort(function(a,b){return a-b});   // 1,5,10,25,40,100
              降序：var points = [40,100,1,5,25,10];
                    points.sort(function(a,b){return b-a});   // 100,40,25,10,5,1

        */
       const arrSort = arr.sort();
       const strSort = arrSort.join('')
       console.log(strSort)
}

strSort('webmaster')


/**
 * 5.Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
       Example string : 'the quick brown fox'
       Expected Output : 'The Quick Brown Fox '
 */

const firstUp = (item) => {
       const arr = item.split(' ');
       for (i = 0; i < arr.length; i++) {
              arr[i] = arr[i].toString().slice(0, 1).toUpperCase() + arr[i].toString().slice(1).toLowerCase();
       }
       console.log(arr.join(' '))
}

firstUp('the quick brown fox')



/**
 * 6.Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
       Example string : 'Web Development Tutorial'
       Expected Output : 'Development'
 */

const longestWord = (item) => {
       const arr = item.split(' ');
       for (i = 0; i < arr.length; i++) {
              for (j = 0; j < arr.length - 1; j++) {
                     if (arr[j].length > arr[j + 1].length) {
                            tem = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = tem;
                     }
              }
       }
       const arrLongest = arr[arr.length - 1].toString();
       console.log(arrLongest)
}

longestWord('Web Development Tutorial')


/**
 * 7.Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
       Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
       Example string : 'The quick brown fox'
       Expected Output : 5
 */

const vowel = (item) => {
       const arr = item.split('');
       let count = 0;
       for (i = 0; i < arr.length; i++) {
              if (item[i] === 'a' || item[i] === 'e' || item[i] === 'i' || item[i] === 'o' || item[i] === 'u') {
                     count++;
              }
       }
       console.log(count)
}


vowel('The quick brown fox')



/**
 * 8.Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
     Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 */

const prime = (item) => {
       for (i = 2; i <= item - 1; i++) {
              if (item % i == 0) {
                     break;
              }
       }
       if (i > item - 1) {
              console.log(item + '是素数！');
       } else {
              console.log(item + '不是素数！');
       }
}

prime(3);



/**
 * 9. Write a JavaScript function which accepts an argument and returns the type.
      Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
 */

       const type = (item) => {
        console.log(item + '的类型是' + typeof (item));
       }

       type('a');
       type(123);
       type({});
       type(prime);
       type(undefined);
       type();


/**
 * 10.Write a JavaScript function which returns the n rows by n columns identity matrix.
 */
       const matrix = (n) => {
              for (let i = 0; i <= n - 1; i++) {
                  for (let j = 0; j <= n - 1; j++) {
                        document.getElementById('whywhy').innerHTML += '*';
                   }
              document.getElementById('whywhy').innerHTML += '<br>';
              }
       }

       window.onload = function () {
       matrix(5);
       }





/**
 * 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
       Sample array : [1,2,3,4,5]
       Expected Output : 2,4
 */

       const second = (item) => {
              for (let i = 0; i <= item.length; i++) {
                     for (let j = 0; j <= item.length; j++) {
                            let temp;
                            if (item[j] > item[j + 1]) {
                                   temp = item[j];
                                   item[j] = item[j + 1];
                                   item[j + 1] = temp;
                            }
                     }
              }
              console.log('second lowest number is '+ item[1]);
              console.log('second greatest number is '+ item[item.length-2]);
       }

       second([1,2,3,4,5]);




/**
 * 12. Write a JavaScript function which says whether a number is perfect.
       According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
       Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
 */

       const perfectNumber = (num) => {
              let sum = 0;
              for(let i = 0; i < num; i++ ){
                     if(num % i == 0){
                          sum += i;  
                     }
              }
              const half = (sum + num)/2;
              if((num === sum) && (half === sum)){
                     console.log(num+'是完全数！');
              }else{
                     console.log(num+'不是完全数！');
              }
       }

       perfectNumber(28);
       perfectNumber(228);



/**
 * 13.Write a JavaScript function to compute the factors of a positive integer.
 */

       const integer = (num) => {
              let arr = [];
              for(let i = 0; i <= num; i++ ){
                     if(num % i == 0){
                          arr.push(i);
                     }
              }
             const arrStr = arr.toString();
              console.log(num+'的正因子是'+arrStr) 
       }

       integer(6);



/**
 * 14. Write a JavaScript function to convert an amount to coins.
       Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
       Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
       Output : 25, 10, 10, 1

 */

       const amountToCoins = (amount,coins) => {

       }

       function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0])  //amount1=46,coins1=25  amount2=21,coin2=10  amount3=11,coin3=10
       {
        left = (amount - coins[0]); //left1=21  left2=11  left3=1
        return [coins[0]].concat( amountTocoins(left, coins) ); // [25,] [25,10,] [25,10,]
        } 
      else
        {
         coins.shift();//[25..]  [10..] [5..]
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(46, [25, 10, 5, 2,1]));