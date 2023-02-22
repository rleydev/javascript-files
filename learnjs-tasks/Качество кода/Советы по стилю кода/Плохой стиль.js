function pow(x,n)  // no space between args
{  // { - on another line
  let result=1;   // <- no space before and after =
  for(let i=0;i<n;i++) {result*=x;}   // no spaces
  // {} content after for loop should be on another line
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // <-- no spaces, should be on different lines, no ;
if (n<=0)  // no spaces and TAB 
{   // { should be on the same line
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else // } else { van be on the saem line
{
  alert(pow(x,n))  // no spaces and ;
}