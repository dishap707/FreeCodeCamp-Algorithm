function fearNotLetter(str) {
  var arr =str.split("");
  var aplpha = ["a" , "b" ,"c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var k = 0;
  var final;
  if(arr[0] != "a")
    {
      final = "undefined";
    }
  else{
    for(var j=0;j<arr.length;j++){
     if(arr[j] != aplpha[k])
       {
         return aplpha[k];
       }
      k =k+1;
    }
   
   
  }
  return undefined;
   
}

fearNotLetter("bcd");
