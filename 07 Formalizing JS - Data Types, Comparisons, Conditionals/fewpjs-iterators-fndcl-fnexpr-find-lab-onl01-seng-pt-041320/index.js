const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array)
{
  const result = array.find(arr => arr.result === 'W');
  
  return !!result ? result.year : undefined;
}