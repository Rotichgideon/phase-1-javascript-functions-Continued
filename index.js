// code your solution here
function saturdayFun (fun = "roller-skate") {
  return `This Saturday, I want to ${fun}!`
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`
  }
};