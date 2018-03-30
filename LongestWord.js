function findLongestWord(str) {
  var a = str.split(' ');
  var num = 1;
  var l= a.length;
  for (var i= 0 ; i < l ; i++){
    var preNum = num;
    num = a[i].length; 
    if(preNum >= num)
    {
      num = preNum;
    }
  }
  return num;
}

findLongestWord("The quick brown fox jumped over the lazy dog");