function wisePerson(wiseType, whatToSay) {
    return 'A wise ' + wiseType + ' once said: "' +
        whatToSay + '".';
}
function testWisePerson() {
  var wiseType = 'goat';
  var whatToSay = 'hello world';
  var expected = 'A wise ' + wiseType + ' once said: "' +
      whatToSay + '".';
  var actual = wisePerson(wiseType, whatToSay);
  if (expected === actual) {
    console.log('SUCCESS: `wisePerson` is working');
  }
  else {
    console.log('FAILURE: `wisePerson` is not working');
  }
}

function shouter(whatToShout) {

  return whatToShout.toUpperCase() + "!!!";
}

function testShouter() {
  var whatToShout = 'fee figh foe fum';
  var expected = 'FEE FIGH FOE FUM!!!';
  if (shouter(whatToShout) === expected) {
    console.log('SUCCESS: `shouter` is working');
  }
  else {
    console.log('FAILURE: `shouter` is not working');
    console.log(shouter(whatToShout));
    console.log(expected);
  }
}

function textNormalizer(text) {
  return text.toLowerCase().trim();
}


function testTextNormalizer() {
  var text = "   let's GO SURFING NOW everyone is learning how   ";
  var expected = "let's go surfing now everyone is learning how";
  if (textNormalizer(text) === expected) {
    console.log('SUCCESS: `textNormalizer` is working');
  }
  else {
    console.log('FAILURE: `textNormalizer` is not working');
  }
}

testTextNormalizer();
testShouter();
testWisePerson();
