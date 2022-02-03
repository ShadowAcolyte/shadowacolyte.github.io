setTimeout(function() {consoleText(["hello.", "i'm shadow_acolyte."])}, 1000);

function consoleText(words) {
  var visible = true;
  var console = document.getElementById("console");
  var letter_count = 1;
  var increment = 1;
  var waiting = false;
  var target = document.getElementById("console-output");
  var palette = ["#8be9fd", "#ff79c6", "#ffb86c", "#bd93f9", "#ff5555", "#f1fa8c"];
  target.setAttribute("style", "color:" + palette[0]);
  window.setInterval(function () {
    if (letter_count === 0 && !waiting) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letter_count);
      window.setTimeout(function () {
        var usedColor = palette.shift();
        palette.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        increment = 1;
        target.setAttribute("style", "color:" + palette[0]);
        letter_count += increment;
        waiting = false;
      }, 1000);
    } else if (letter_count === words[0].length + 1 && !waiting) {
      waiting = true;
      window.setTimeout(function () {
        increment = -1;
        letter_count += increment;
        waiting = false;
      }, 1000);
    } else if (!waiting) {
      target.innerHTML = words[0].substring(0, letter_count);
      letter_count += increment;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      console.className = "console-underscore hidden";
      visible = false;
    } else {
      console.className = "console-underscore";

      visible = true;
    }
  }, 400);
}
