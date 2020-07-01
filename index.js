// Your code here

let Calculator = {
  add:function(){
    return 1+3;
  },
  subtract: function(){
    return 1-3
  },
  multiply:function(){
    return 1*3;
  },
  divide:function(){
    return 10/5
  }
}
function saturdayFun(something = 'roller-skate'){
  return (`This Saturday, I want to ${something}!`);
}
saturdayFun();
saturdayFun('bathe my dog!');
function mondayWork(something = 'go to the office'){
  return `This Monday, I will ${something}.`
}
mondayWork()
function wrapAdjective(par = "*"){
  return function(firstpar = "special"){
    return `You are ${par}${firstpar}${par}!`
  }
}
let encouragingPromptFunction = wrapAdjective("!!!")
console.log(encouragingPromptFunction())
console.log(wrapAdjective("%")("a dedicated programmer"))
function actionApplyer(start = 0, arr){
  if (arr.length != 0)
    return 4;
  else return 0
  
}
=======
function saturdayFun(something = "roller-skate"){
  console.log(`This Saturday, I want to ${something}!`);
}
function mondayWork(something){
  return `This Monday, I will ${something}`
}
function wrapAdjective(par = "*"){
  return function(firstpar = "special"){
    return `You are ${firstpar}`
  }
}
let encouragingPromptFunction = wrapAdjective("!!!")
wrapAdjective("%")("a dedicated programmer")
>>>>>>> 38c784a9db372351cae3b1df7ac8a84105a66aa1
