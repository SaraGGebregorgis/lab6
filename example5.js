let birds = ['Owl', 'Robin', 'Eagle']
console.log(birds)

birds.forEach( function(bird, index) {
    //repeat one for each object
    //fun will be called for each object in the array
    console.log(index, birds.toUpperCase());
})

for (let x = 0; x < birds.length ; x++ ) {
    let bird = birds[x]
    console.log(bird.toUpperCase())
}