function steamrollArray(arr) {
  // Recursion is the breakfast of champions. ― Don Stewart
  var steamrolled = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      var subArray = steamrollArray(arr[i]);
      steamrolled = steamrolled.concat(subArray);
    } else {
      steamrolled.push(arr[i]);
    }
  }
  return steamrolled;
}
  
steamrollArray([1, [2], [3, [[4]]]]);