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

colors = document.getElementsByClassName('palette-color');
editor = document.getElementsByTagName('atom-text-editor')[0];
for (var i = 0; i < colors.length; i++) {
  if (i == colors.length - 1) {
    // for the last color, use the background color
    rgb_col = window.getComputedStyle(editor).backgroundColor;
  } else {
    rgb_col = window.getComputedStyle(colors[i]).color;
  }
  hex_col = parseColor(rgb_col);
  text = colors[i].textContent;
  colors[i].innerHTML = '<p>' + text + '</p><span>' + hex_col.hex + '</span>';
}
