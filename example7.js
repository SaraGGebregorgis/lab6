let animals = ['lion', 'tiger', 'cheetah']

console.log(animals)
console.log(animals[1])
console.log(animals[1000])

animals[6] = giraffe
console.log(animals[1])

animals.push('elephant') //added in the end
console.log(animals)

animals.pop() // remove last thing an array

animals.unshift('deer') //beginner
console.log(animals)

let firstAnimal = animals.shift()
console.log(firstAnimal)
console.log(animals)

//reverse order
animals.reverse()
console.log(animals)

animals.sort()
console.log(animals)

let NumberOfAnimals = animals.length
console.log(NumberOfAnimals)

console.log(animals.indexOf('lion')) //if avail or -1

if (animals.indexOf('waks') == -1 ) {
    console.log('WSK is not in the array')
}


if (animals.includes('cheetah')) {
    console.log('cheetah is an array')
}

console.log(animals.join(' * '))

animals.forEach( function(animals) {
    console.log(animal.toUpperCase)

})

animals.forEach(function(animal) {
    console.log(animal.length)
})

let animalnameLength = []
animals.forEach( function(animal) {
    let length = animal.length
    animalnameLength.push(length)
})

console.log(animalnameLength)