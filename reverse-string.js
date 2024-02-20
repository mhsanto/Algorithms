const reverseThisString = " I am a senior Fullstack Developer";

function reverseString (str) {
    return str.split("").reverse().join("")
}
console.log(reverseString(reverseThisString))

// const str = " I am a senior Fullstack Developer";
function forReverseString (str) {
    let reserveStr=""
    for (let i = str.length-1 ; i > 0 ; i--){
        reserveStr  += str[i]
    }
    return reserveStr
}
console.log(forReverseString(reverseThisString))
