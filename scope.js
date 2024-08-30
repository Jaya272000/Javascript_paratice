
// {
    // console.log(a)
    // let a=20
    // const Sy=()=>console.log(msg)
    // let msg='hi'
    // Sy()

//     say();
//     function say(){
//         console.log('hii')
//     }
// }
// console.log('ji')


// closure
function create(name){
    let greet='hi'
    function greet(){
        return greet+name+'is created';
    }
    return greet;
}
// here colsure happend
let welcomejohn=create('jaya')
welcomejohn()

// welcomejohn function definiation has access to outer paramas (name) which came for createuser function
// also any other 'varibles ' decleared inside createuser will be also be accessible to this welcome john