// mintues into second
const a=5;
console.log(5*60)

// Next Number from the Integer Passed
function next(a){
    return a+1
}
console.log(next(-3))

// Area of Triangle
const area=((a,b)=>{
    return (a*b)/2
})
console.log(area(3,2))

// age into days
const age=((a)=>{
    return (a*365)
})
console.log(age(65))

// Buggy code cube
function cubes(a){
    return (a**3)
}
console.log(cubes(3))

// First element in an array
function list(a){
    return a[0]
}
console.log(list([1,2,3]))

// correct squared
function square(a){
    return a**2

}
console.log(square(5))

function giveme(a){
    return 'Something '+ a
}
console.log(giveme("jaya"))

function baskteball(a,b){
    p1=a*2
    p2=b*3
    return p1+p2
}
console.log(baskteball(38,8))


function swap(a,b){
    [a,b]=[b,a]
    // a=a+b
    // b=a-b
    // a=a-b
    console.log(a,b)
}
swap(2,4)


function animal(a,b,c){
    chi=a*2
    cow=b*4
    pigs=c*4
    return chi+cow+pigs

    
}
console.log(animal(2,3,5))


function matchstick(a){
    return 6+(a-1)*5
}
console.log(matchstick(4))
