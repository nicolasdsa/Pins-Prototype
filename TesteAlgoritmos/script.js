let met1 = [];
let met2 = [];
let met3 = [];
let met5 = [];
let met6 = [];
let x = 0;

// Metodo 1:
function metodo1(a,b){
    for (x = 0; x < a; x++){
        met1.push(b);
    }
    console.log(met1);
}

// Exemplo:
metodo1(3,"a");

//Metodo 2:

function metodo2(number){
    number.reverse();
    console.log(number);
 }
metodo2([1,2,3,4])


//Metodo 3:

function metodo3(number){
    for(x = 0; x < number.length; x++){
        if (number[x] == "" || number[x] == undefined || number[x] == 0 || number[x] == false || number[x] == null){

        }
        else {
            met3.push(number[x]);
        }
    }
    console.log(met3);
}

metodo3([1,2,'', undefined]);
// Metodo 4:

const metodo4 = element => element.reduce((acc, item) => {
    acc[item[0]] = item[1]
    return acc
},{})

console.log(metodo4([["c",2],["d",4]]))

// Metodo 5:

function metodo5(number,a,b){
    for (x = 0; x < number.length; x++){
        if (number[x] == a || number[x] == b){
        }
        else{
            met5.push(number[x]);
            }
            
    }
    console.log(met5)
}


metodo5([5,4,3,2,5], 5,3);

// Metodo 6:

function metodo6(number){
    let novaArr = number.filter(function(teste, i) {
        return number.indexOf(teste) === i;
    });
    console.log(novaArr);

}

metodo6([1,2,3,3,2,4,5,4,7,3]);


// Metodo 8:

function metodo8(met8){
    let a = [...met8];

}
metodo8([1, 2, [3], [4, 5]]);

