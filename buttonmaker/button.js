let bgColorEl = document.getElementById("bgColor");
let fontColorEl = document.getElementById("fontColor");
let btnPaddingEl = document.getElementById("btnPadding");
let fontSizeEl = document.getElementById("fontSize");
let borderRadiusEl = document.getElementById("borderRadius");

let fontWeightEl = document.getElementById("fontWeight");

let customButtonEl = document.getElementById("customButton");



function applyStyles() {
    customButtonEl.style.backgroundColor = bgColorEl.value;
    customButtonEl.style.fontSize = fontSizeEl.value;
    customButtonEl.style.padding = btnPaddingEl.value;
    customButtonEl.style.color = fontColorEl.value;
    customButtonEl.style.borderRadius = borderRadiusEl.value;
    customButtonEl.style.fontWeight = fontWeightEl.value;
    customButtonEl.style.textAlign = "center";
}