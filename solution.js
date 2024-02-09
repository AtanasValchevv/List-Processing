let list = [];

document.getElementById("submitButton").addEventListener("click", processInput);
document.getElementById("inputBox").addEventListener("keypress", function(event){
  if (event.key === "Enter")
    processInput();
});
document.getElementById("inputBox").focus();

function processInput() {
  console.log('added event listener');
  let cmd = document.getElementById("inputBox").value;
  let result = processCommand(cmd);
  if (result)
    printToTerminal(result);
  printToTerminal("List: " + list.join(" "));
  document.getElementById("inputBox").value = "";
}

function printToTerminal(text) {
  document.getElementById("terminal").value += text + "\n";
}

function processCommand(cmd) {
  let cmdArgs = cmd.split(" ");
  cmd = cmdArgs.shift();
  switch (cmd) {
    case "append":
      return append(cmdArgs);
      break;
      
    case "insert":
      let index = parseInt(cmdArgs.shift());
      let string = cmdArgs.join(" ");
      return insert(index, string);
      break;
      
    case "roll":
      let direction = cmdArgs.shift();
      if (direction === "left") {
        return rollLeft();
      } else if (direction === "right") {
        return rollRight();
      } else {
        return "Error: invalid direction for roll command";
      }
      break;

    default:
      return "Error: invalid command";
      break;
  }
}

function append(args) {
  list = list.concat(args);
}

function insert(index, string) {
    if (index < 0 || index > list.length) {
        return "Error: invalid index " + index;
    }
    
    list.splice(index, 0, string);
   
}

function rollLeft() {

    
    let firstItem = list.shift();
    list.push(firstItem);
   
}

function rollRight() {

    let lastItem = list.pop();
    list.unshift(lastItem);
    
}
