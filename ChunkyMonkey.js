  function chunkArrayInGroups(arr, size) {
  // Break it up
    var d = [];
    var new_arr =arr;
    var n=1;
    var j=0;
    for(var i=0; i< new_arr.length/size; i++){
      arr = new_arr;
      var b = arr.slice(j,size*n);
      d.push(b);
      n= n + 1;
      j= j+size;
      }
    return d;
 }
chunkArrayInGroups(["a", "b", "c", "d","e"], 2);