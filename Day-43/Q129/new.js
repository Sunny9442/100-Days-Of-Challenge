var _this = this;
// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
var compared_function = {
    value: "TraditionalFunction VS ArrowFunction",
    traditional_function: function () {
        console.log("Traditional Function :", this.value);
    },
    arrow_function: function () {
        console.log("Arrow Function : ", _this.value);
    },
};
compared_function.traditional_function();
compared_function.arrow_function();
