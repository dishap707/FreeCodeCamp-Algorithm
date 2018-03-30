function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var a = [];
  var j=0;
    
    
      for(var i= howMany; i< arr.length ; i++)
        {
          
          a[j] = arr[i];
          j = j+1;
        }
      return a;
      
    
  
}

slasher([1, 2, 3,4], 6);
Clos