const remote = require('electron').remote;

document.getElementById("exit").addEventListener("click", function () {
  remote.getCurrentWindow().close();
});
