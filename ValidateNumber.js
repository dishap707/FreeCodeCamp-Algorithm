function telephoneCheck(str) {

  var re = /^(1[\s-]?)?(\([1-9]\d\d\)|[1-9]\d\d)[\s-]?[1-9]\d\d[\s-]?\d{4}$/g;
  return re.test(str);

}



telephoneCheck("555-555-5555");