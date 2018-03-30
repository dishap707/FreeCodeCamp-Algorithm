function factorialize(num) {
  var a;
  if(num == 0) {
    num =1; 
  }
  else
  for(a=num-1;a > 0;a--){
  num = num * a ;

  }
  return num;
}

factorialize(0.5);