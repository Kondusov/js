
let fun = function(name) {
    //console.log(`Привет ${name} 😊`)
    function func(){
        console.log("Привет " + name + "😊")
    }
    func()
}
//fun('Иван')
let funcSqare = (a,b) => {
    console.log(a)
    result = a*a
    return result
}
console.log(funcSqare())

