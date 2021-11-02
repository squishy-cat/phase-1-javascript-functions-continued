// Your code here
function saturdayFun (weekendActivity ='roller-skate') {
    return `This Saturday, I want to ${weekendActivity}!`;
}

const mondayWork = function (mondayActivity = 'go to the office') {
    return `This Monday, I will ${mondayActivity}.`
}

function wrapAdjective(wrapper = "*"){
    const innerFunction = function (msg){
        return `You are ${wrapper}${msg}${wrapper}!`
    }
    return innerFunction
}