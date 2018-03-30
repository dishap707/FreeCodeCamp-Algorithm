function pairElement(str) {
  var arr = str.split("");
  var new_arr = [];
  for(var i=0;i< arr.length ;i++)
    {
     switch(arr[i]) {
    case "G":
        new_arr[i] = ["G","C"];
        break;
    case "C":
        new_arr[i] = ["C","G"];
        break;
    case "A":
        new_arr[i] = ["A","T"];
         break;
    case "T":
        new_arr[i] = ["T","A"];  
         
         
} 
    }
  return new_arr;
}

pairElement("GCG");