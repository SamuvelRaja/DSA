
// 01 Set Matrix Zero



// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.

// Examples
// Examples 1:
// Input:
//  matrix=[[1,1,1],[1,0,1],[1,1,1]]

// Output:
//  [[1,0,1],[0,0,0],[1,0,1]]

// Explanation:
//  Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.
 
// Input:
//  matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

// Output:
// [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Explanation:
// Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0

//---------bruteforce solution-----------

// function markCol(array,m,i){
//     for(let j=0;j<m;j++){
//         if(array[i][j]!==0){
//             array[i][j]=-1
//         }
//     }
//     console.log(array,"row")
// }
// function markRow(array,n,j){
//     for(let i=0;i<n;i++){
//         if(array[i][j]!==0){
//             array[i][j]=-1
//         }
//     }
//     console.log(array,"col")
// }

// function setZero(array,n,m){

//     for(let i=0;i<n;i++){
//         for(let j=0;j<m;j++){
//             if(array[i][j]==0){
//                 markCol(array,m,i)
//                 markRow(array,n,j)
//             }
//         }
//     }
//     for(let i=0;i<n;i++){
//         for(let j=0;j<m;j++){
//             if(array[i][j]==-1){
//                 array[i][j]=0
//             }
//         }
//     }
//     return array;
// }

// const array=[[1,1,1],[1,0,1],[1,1,1]]
// let n=array.length;
// let m=array[0].length
// console.log(setZero(array,n,m)) // [[1,0,1],[0,0,0],[1,0,1]]

//---------better solution-----------//

//removed marking functions

function setZero(array){
    let n=array.length;
    let m=array[0].length
    let aRow=new Array(m).fill(0)
    let aCol=new Array(m).fill(0)

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(array[i][j]==0){
                aRow[i]=-1
                aCol[j]=-1
            }
        }
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(aRow[i]==-1||aCol[j]==-1){
                array[i][j]=0
            }
        }
    }
    return array;
}

const array=[[1,1,1,1],[1,1,1,1],[1,1,1,0]]

console.log(setZero(array))