let met1 = [];
let met2 = [];
let met3 = [];
let met5 = [];
let met6 = [];
let met10 = [];
let x = 0;
let i = 0;

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

// Metodo 7:

const metodo7 = (vetor1, vetor2) => {
    return vetor1.every((item,index) => item === vetor2[index])
}

console.log(metodo7([1,2,3,4],[1,2,3,4]));

// Metodo 8:

const metodo8 = element => element.reduce((acc, value) => acc.concat(value),[]);

console.log(metodo8([1, 2, [3], [4, 5]]));

// Metodo 9:

function metodo9(element, x){
    for (i = 0; i <= x; i++){
        element[x] 
    }
}


// Metodo 10:

function metodo10(vetor1,vetor2){
    for (x = 0; i < vetor1.length; x++){
        if (vetor1.indexOf(vetor2[x]) != -1){
            met10.push(vetor2[x]);
        }
        else {
            console.log("teste");
        }
    }
    console.log(met10)
}

metodo10([6, 8], [8, 9]);


