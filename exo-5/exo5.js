// you can write js here

console.log('exo-5');
let input  = prompt("Quel phrase voulais vous tester ?").toUpperCase()
let vowels  = ["A", "E", "I", "O", "U"];
let resultArray= []
for(let i = 0; i < input.length; i++){
    for(let j = 0; j < vowels.length; j++){
        if (input[i] === vowels[j]){
            resultArray.push(vowels[j]);
        }
    }
}
console.log(resultArray.join(""));

