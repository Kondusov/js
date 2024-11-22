// Комментарий, занимающий одну строку.

/* Комментарий,
   занимающий несколько строк.
 */
   var a = 1;
   let b;
   const c = "constanta";
   
   a = a + 1;
   
   if (true) {
       let x = 5;
       console.log(x); // 5
     }
   
   
     
     function getRandomInt(min, max){
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * max + min);
   }
   
   // var result = prompt('Введите чётное число', '')
   // if (result === null) {
   //   alert('Вы отказались от ввода')
   // } else if (isNaN(result % 2)) {
   //   alert('Ошибка, введено НЕ ЧИСЛО')
   // } else if (result % 2 === 0) {
   //   alert('Число чётное')
   // } else {
   //   alert('Число нечётное')
   // }
    alert(getRandomInt(1, 11));
   