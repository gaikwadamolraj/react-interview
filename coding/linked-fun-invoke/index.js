// Execute the linked func in seq
// cal.add(50).sub(10).getResult() => o/p: 40

// With function approach
const calculator = () => {
  var result = 0;
  const calc = {
    add: (val) => {
      result += val;
      return calc;
    },
    sub: (val) => {
      result -= val;
      return calc;
    },
    getResult: () => result,
  };

  return calc;
};

console.log("Result from fun:", calculator().add(50).sub(10).getResult());

// With Class way

class Calculaotr {
  constructor() {
    this.result = 0;
  }

  add(val) {
    this.result += val;
    return this;
  }
  sub(val) {
    this.result -= val;
    return this;
  }
  getResult() {
    return this.result;
  }
  static access() {
    return "get static value return";
  }
}

const calc = new Calculaotr();
console.log("Result from class: ", calc.add(50).sub(10).getResult());
console.log("Static block execution - ", Calculaotr.access());
