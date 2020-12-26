// Your code here
function saturdayFun(activity = "roller-skate")
{
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office")
{
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlare = '*')
{
    return function(word = "special")
    {
        return `You are ${visualFlare}${word}${visualFlare}!`;
    }
}

let Calculator = 
{
    add: (a, b) => a + b,

    subtract: (a, b) => a - b,

    multiply: (a, b) => a * b,

    divide: (a, b) => a / b
};

function actionApplyer(num, arrayOfFunctions)
{
    for (let i = 0; i < arrayOfFunctions.length; i++)
    {
        num = arrayOfFunctions[i](num);
    }

    return num;
}