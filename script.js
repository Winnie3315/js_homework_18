let a = +prompt(`общ кол-во`)
let b = +prompt(`кол-во`)


function getNum(a,b){
  return (b * 100) / a
}

console.log( 'пропорция' ,getNum(a,b));

//2

let name = prompt(`ur name?`)

function showName(name){
    
  return `Здраствуйте, ${name}`

}
console.log(showName(name));
