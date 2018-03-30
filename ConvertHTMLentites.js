function convertHTML(str) {
  // &colon;&rpar;
 var arr = str.split("");
  
 for(var i=0 ; i<arr.length ;i++)     
    {
    switch(arr[i]) {
    case "&":
        arr[i] = "&amp;";
        break;
    case "<":
        arr[i] = "&lt;";
        break;
    case ">":
        arr[i] = "&gt;";
        break;      
     case "'":
   arr[i] ="&apos;";
        break;
      case '"':
        arr[i] = "&quot;";
   
}
      
    }
  
    
 str = arr.join("") ;
  
  return str;
}

convertHTML("Shindler's List");