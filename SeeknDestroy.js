function destroyer(arr,a,b,c) {
  // Remove all the values
  var new_arr =[];
  for(var i=0;i<arr.length;i++) 
    {
     if(arr[i] !=a && arr[i] != b && arr[i] != c)
       {
         new_arr.push(arr[i]);
       }
      
    }
  return new_arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);