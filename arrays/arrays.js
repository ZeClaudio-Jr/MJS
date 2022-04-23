var person1 = {
    nome: 'Felipe',
    age: 21,
    sexo: 'masc'
}

var person2 = {
    nome: 'Maria',
    age: 30,
    sexo: 'fem'
}

var person3 = {
    nome: 'Olga',
    age: 54,
    sexo: 'fem'
}

var listPerson = [person1, person2, person3]
var listNome = [person1.nome, person2.nome, person3.nome]
var listAge = [person1.age, person2.age, person3.age]

//console.log(listPerson)
//console.log(listNome)
//console.log(listAge)

for (var persongem of listPerson) {
    console.log(persongem)
    console.log(persongem.age)
}

//function apresentar (nome = 'Holanda') {
//    console.log('O dia está lindo né ' + nome)
//}

//apresentar()
