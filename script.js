function f1() {

    document.getElementById("textarea1").style.fontWeight = "bold";

}
function f2() {

    document.getElementById("textarea1").style.fontStyle = "italic";

}
function f3() {

    document.getElementById("textarea1").style.textAlign = "left";

}
function f4() {

    document.getElementById("textarea1").style.textAlign = "center";

}
function f5() {

    document.getElementById("textarea1").style.textAlign = "right";

}

function f6() {

    document.getElementById("textarea1").style.textTransform = "uppercase";

}
function f7() {

    document.getElementById("textarea1").style.textTransform = "lowercase";

}
function f8() {

    document.getElementById("textarea1").style.textTransform = "capitalize";

}
function f9() {

    document.getElementById("textarea1").style.fontWeight = "normal";
    document.getElementById("textarea1").style.textAlign = "left";
    document.getElementById("textarea1").style.fontStyle = "normal";
    document.getElementById("textarea1").style.textTransform = "capitalize";
    document.getElementById("textarea1").value = " ";



}

function f10() {
    const content = document.getElementById("textarea1").value;
    var save = document.createElement("a");
    save.setAttribute("href", "data:text/plain;charset=umenttttf-8," + encodeURI(content));
    save.setAttribute("download", content.slice(0, 17) + ".txt");

    document.body.appendChild(save);
    save.click();
    document.body.removeChild(save);
}