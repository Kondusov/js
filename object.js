const a = 1;

let b = a;
console.log( b)
b = 3;
console.log( b)
console.dir( a)
//a = 3;
const obj = {
    property_1: 'Значение свойства property_1',
    property_2: 'Значение свойства property_2',
    method_1: (a)=> { return console.log('Работа метода 1'+a)}
  };

  const obj2 = obj;

  console.log( obj.property_1)
  console.log( obj.property_2)
  console.log( obj.method_1(' и переменная а'))
  let res =  obj2.property_1 = 'Новое знгачение второго'
  
  console.log( res + ' а этоновое значение obj2')
  console.log( obj.property_1 + ' а это значение obj1')