function repeatStringNumTimes(str, num) {
  // repeat after me
  var a = "";
  for(var i= 1; i<= num ; i++){
  a = a + str;
  }
  return a;
}

repeatStringNumTimes("abc", 3);