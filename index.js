// Your code here
function saturdayFun(arg="roller-skate") {
    return "This Saturday, I want to "+arg+"!"
};

let mondayWork = function(arg="go to the office"){
    return "This Monday, I will "+arg+"."
}

function wrapAdjective(flair='*') {
        return function(param="special") {
            return `You are ${flair}${param}${flair}!`;
        } 
    }