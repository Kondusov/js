var flag;
function clickButton() {
    if(flag != 2 && flag != undefined){
        document.body.style = `background-color: #fff;`
        flag = 2;
    }
    else{
        document.body.style = `background-color: #777;`
        flag = 1;
    }
  }

  function someFunction(){
    return true;
  }

  try {
    if(typeof someFunction() !== 'undefined')
        someFunction();
        console.log('Функция существует');
  } catch (err) {
    console.log('Поймали ошибку! Вот она: ', err.message)
  }

  const food = ['🍔', '🍟', '🍦']

food.forEach((item, index, arr) => {
  console.log('Текущий элемент ' + item)
  console.log('Его индекс ' + index)
  console.log('Исходный массив ' + arr)
})