function pow(x, n) {
    let result = 1;

    for(let i = 0;  i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?","");
let n = prompt("n?","");
if (n <= 0) {
    alert(`Power ${n} is not supported,
     please enter an integer number greater than zero`);
}
else {
    alert( pow(x, n) );
}

// I just make it alright
// what's wrong with the code?
// 1.no space between arguments
// 2.figure bracket on a separate line
// 3.no spaces before or after =
// 4.there's no spaces(2 lines)
// 5.could write it on a single line like "} else {"