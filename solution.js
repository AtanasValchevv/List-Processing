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
  if (result !== undefined && result !== null)
    printToTerminal(result);
  printToTerminal("List: " + list.join(" "));
  document.getElementById("inputBox").value = "";
}

function printToTerminal(text) {
  document.getElementById("terminal").value += text + "\n";
}

function processCommand(cmd) {
  let cmdArgs = cmd.split(" ");
  let cmdName = cmdArgs.shift();
  switch (cmdName) {
    case "append":
      return append(cmdArgs);
      break;

    case "sort":
      return sortList();
      break;

    case "count":
      let searchString = cmdArgs.join(" ");
      return countOccurrences(searchString);
      break;

    case "reverse":
      return reverseList();
      break;

    default:
      return "Error: invalid command";
      break;
  }
}

function append(args) {
  list = list.concat(args);
}


function sortList() {
  if (list.length <= 1) {
    return "List has only one item, already sorted";
  }

  list.sort();

}

function countOccurrences(searchString) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === searchString) {
      count++;
    }
  }
  return count;
}

function reverseList() {
  list.reverse();
 
}