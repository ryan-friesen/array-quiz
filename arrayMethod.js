class arrayMethod {
  constructor(array) {
    this.array = array;
  }

  static popArray(array) {
    return array.pop();
  }

  static shiftArray(array) {
    return array.shift();
  }

  static reverseArray(array) {
    return array.reverse();
  }

  static lastIndexOfArray(array) {
    let a = returnRandomValue(array);
    return a;
  }

  static fillArray(array) {
    let a = returnRandomValueZeroIndex(array);
    return array.fill(array[a]);
  }

  static unshiftArray(array) {
    let unshiftArray = returnArray();
    let a = Math.floor(unshiftArray.length / 2);
    let b = Math.ceil(Math.random() * a);
    let unshiftMethodValue = [];

    for (i = 0; i < b; i++) {
      array.unshift(unshiftArray[i]);
      unshiftMethodValue.push(unshiftArray[i]);
    }

    return unshiftMethodValue;
  }

  static spliceArray(array) {
    let a = Math.floor(Math.random() * array.length);
    let b = Math.ceil(Math.random() * (a - 1));
    let c = document.getElementById("question-prompt");
    c.innerHTML += a + ", " + b + ") output?";
    return array.splice(a, b);
  }

  static indexOfArray(array) {
    let a = returnRandomValueZeroIndex(array);
    console.log(a);
    return array[a];
  }
}
