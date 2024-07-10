function printSquarePattern(n){
    let pattern=""
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            pattern+="* "
        }
        console.log(pattern)
        pattern=""
    }
}

function printTrianglePattern(n){
    let pattern=""
    for(let i=0; i<n; i++){
        for(let j=0; j<=i; j++){
            pattern+="* "
        }
        console.log(pattern)
        pattern=""
    }
}
function printTriangleNum(n){
    let pattern=""
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            pattern+=j+" "
        }
        console.log(pattern)
        pattern=""
    }
}

function printTriangleSame(n){
    let pattern=""
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            pattern+=i+" "
        }
        console.log(pattern)
        pattern=""
    }
}

function printTriangleReverse(n){
    let pattern=""
    for(let i=0; i<n; i++){
        for(let j=n; j>i; j--){
            // console.log(i,j)
            pattern+="* "
        }
        console.log(pattern)
        pattern=""
    }
}

const n=5

//printSquarePattern(n)
//printTrianglePattern(n)
//printTriangleNum(n)
//printTriangleSame(n)
printTriangleReverse(n)