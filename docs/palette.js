function parseColor(color) {
    var arr=[]; color.replace(/[\d+\.]+/g, function(v) { arr.push(parseFloat(v)); });
    return {
        hex: "#" + arr.slice(0, 3).map(toHex).join(""),
        opacity: arr.length == 4 ? arr[3] : 1
    };
}
function toHex(int) {
    var hex = int.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


boxes = document.getElementsByClassName('box');
for (var i = 0; i < boxes.length; i++) {
  if (i == 0) {
    rgb_col = window.getComputedStyle(boxes[i]).backgroundColor;
  } else {
    rgb_col = window.getComputedStyle(boxes[i]).color;
  }
  hex_col = parseColor(rgb_col);
  text = boxes[i].textContent;
  boxes[i].innerHTML = '<p>' + text + '<span>' + rgb_col + '</span><span>' + hex_col.hex + '</span></p>';
}
