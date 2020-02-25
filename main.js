function arrayContent() {
  var array = arrayIndex();

  var finalArray = [];

  indexLength = arrayLength(array);

  for (i = 0; i < indexLength; i++) {
    finalArray.push(array[arrayLength(array)]);
  }
  return finalArray;
}

function arrayIndex() {
  var array = ["a", "b", "c", "d", "e", "A", "B", "C", "D", "E"];

  return array.slice();
}

function arrayLength(array) {
  let indexLength = Math.ceil(Math.random() * (array.length - 1));
  return indexLength;
}

function finalArray() {
  let array = arrayContent();
  if (array.length > 0) {
    methodSelector(array);
  } else {
    array = arrayContent();
  }
  return array;
}

function returnSingleArrayIndex() {
  let array = arrayContent();
  let a = Math.ceil(Math.random() * array.length - 1);
  return array[a];
}

function unshiftPopulator(unshiftValue, array) {
  let a = unshiftValue.length % 5;
  let b = document.getElementById("question-prompt");

  switch (a) {
    case 0:
      array = array.unshift();
      b.innerHTML += ") output?";
      break;
    case 1:
      array = array.unshift(unshiftValue[0]);
      b.innerHTML += unshiftValue[0] + ") output?";
      break;
    case 2:
      array = array.unshift(unshiftValue[0], unshiftValue[1]);
      b.innerHTML += unshiftValue[0] + ", " + unshiftValue[1] + ") output?";
      break;
    case 3:
      array = array.unshift(unshiftValue[0], unshiftValue[1], unshiftValue[2]);
      b.innerHTML +=
        unshiftValue[0] +
        ", " +
        unshiftValue[1] +
        ", " +
        unshiftValue[2] +
        ") output?";
      break;
    case 4:
      array = array.unshift(
        unshiftValue[0],
        unshiftValue[1],
        unshiftValue[2],
        unshiftValue[3]
      );
      b.innerHTML +=
        unshiftValue[0] +
        ", " +
        unshiftValue[1] +
        ", " +
        unshiftValue[2] +
        ", " +
        unshiftValue[3] +
        ") output?";
      break;
    case 5:
      array = array.unshift(
        unshiftValue[0],
        unshiftValue[1],
        unshiftValue[2],
        unshiftValue[3],
        unshiftValue[4]
      );
      b.innerHTML +=
        unshiftValue[0] +
        ", " +
        unshiftValue[1] +
        ", " +
        unshiftValue[2] +
        ", " +
        unshiftValue[3] +
        ", " +
        unshiftValue[4] +
        ") output?";
    default:
      break;
  }

  return array;
}

function returnRandomValue(a) {
  let b = Math.floor(Math.random() * a);
  return b;
}

/* array value is passed into below function, which returns random value within the array to use within a method */

function returnRandomArrayIndex(array) {
  let a = Math.floor(Math.random() * array.length);
  return array[a];
}

function unshiftValueSubstring(unshiftValue, a, array) {
  let c = unshiftValue.length - a;
}

function methodSelector(array) {
  let a = document.getElementById("array-heading");
  let b = document.getElementById("question-prompt");
  a.innerHTML = "Array = [" + array + "]";
  b.innerHTML = "";
  b.innerHTML = "What does Array";
  let c = randomizer();
  let d = c % 9;

  switch (d) {
    case 0:
      b.innerHTML += ".pop() output?";
      array = array.pop();
      break;
    case 1:
      b.innerHTML += ".sort() output?";
      array = array.sort();
      break;
    case 2:
      b.innerHTML += ".reverse() output?";
      array = array.reverse();
      break;
    case 3:
      let unshiftValue = arrayContent();
      b.innerHTML += ".unshift(";
      array = unshiftPopulator(unshiftValue, array);
      break;
    case 4:
      lastIndexOfValue = returnRandomArrayIndex(array);
      b.innerHTML += ".lastIndexOf(" + lastIndexOfValue + ") output?";
      array = array.lastIndexOf(lastIndexOfValue);
      break;
    case 5:
      includesValue = returnSingleArrayIndex();
      b.innerHTML += ".includes(" + includesValue + ") output?";
      array = array.includes(includesValue);
      break;
    case 6:
      if (array.length < 4) {
        array = arrayContent();
        a.innerHTML = "";
        a.innerHTML = "Array = [" + array + "]";
      }
      let firstValue = returnRandomValue(array.length);
      if (firstValue == 0) {
        let secondValue = returnRandomValue(array.length);
      } else {
        secondValue = returnRandomValue(firstValue) + 1;
      }
      b.innerHTML += ".splice(" + firstValue + ", " + secondValue + ") output?";
      array = array.splice(firstValue, secondValue);
      break;
    case 7:
      let randomIndex = returnRandomArrayIndex(array);
      array = array.fill(randomIndex);
      b.innerHTML += ".fill(" + randomIndex + ") output?";
      break;
    case 8:
      array.shift();
      b.innerHTML += ".shift() output?";
      console.log(array);
    default:
      break;
  }

  document.getElementById("answer-line").innerHTML = array;
}

function randomizer() {
  let d = new Date();
  let randomValue = d.getUTCMilliseconds();

  return randomValue;
}

function content() {
  let a = document.getElementById("answer-input");
  let b = document.getElementById("answer-line");
  if (a.value == b.innerHTML) {
    b.innerHTML = "Good job!";
    console.log("Good job!");
  } else {
    console.log("Try again");
  }
  a.value = "";
  let array = finalArray();
}
