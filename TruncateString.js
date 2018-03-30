Truncate a string
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var ending = "...";
  if (str.length > num) {
    if (num > 3 ) {
    str = str.slice(0,num-3);
    return str + ending;
    } else {
      str = str.slice(0,num);
      return str + ending;
    }
  } else {
    return str;
  }
}

truncateString("A-", 1);