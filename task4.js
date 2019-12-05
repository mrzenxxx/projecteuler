/*Largest palindrome product

Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.*/

let isP=x=>{
  let rev = '';
  for(var i=String(x).length-1;i>=0;i--){
    rev+=String(x)[i];
  }
  if(x==Number(rev)) {
    return true;
  }
  return false;
}

let ans, max=10000;
for (let j=100;j<1000;j++){
  for (let k=100;k<1000;k++){
    if(isP(j*k)&&(j*k>max)){
      max=j*k;
      ans=[j,k,max];
    }
  }
}
console.log(ans);

// 906609
