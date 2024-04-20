// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
const compared_function ={
    value : "TraditionalFunction VS ArrowFunction",
    traditional_function : function (){
        console.log("Traditional Function :" , this . value)
    },
    arrow_function : () =>{
        console.log("Arrow Function : " , this . value)
},
};
compared_function . traditional_function ()
compared_function . arrow_function ()
