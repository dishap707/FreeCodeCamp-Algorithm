function addTogether() {
  var checkNum = function(num) {
    if (typeof num !== 'number') {
      return undefined;
    } else {
      return num;
    }
  };
  var total = 0;
  if (arguments.length > 1) {

for (var i = 0; i < arguments.length; i++) {
  var a = checkNum(arguments[i]);
  var b = checkNum(arguments[i + 1]);
  if (a === undefined || b === undefined) {
    return undefined;
  } else {
  total = arguments[i] + arguments[i +1];
  return total;
  }
 }


} else {
  var oneArg = arguments[0];
  if (checkNum(oneArg)) {
  return function(arg2) {
     if (oneArg === undefined || 
 checkNum(arg2) === undefined) {
     return undefined;
     
   } else {
     return oneArg + arg2;
   }
   };
   }
  }

}


addTogether(2)(3);
