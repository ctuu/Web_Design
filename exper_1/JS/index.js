window.onload = init;

function init() {
    var button = document.getElementById("btn");
    button.onclick = calc;
}

function calc() {
    var mon = parseFloat(document.getElementById("mon").value);
    var ago = parseFloat(document.getElementById("ago").value);
    var air = parseFloat(document.getElementById("air").value);
    air /= 100;
    var mgo = ago * 12;
    var mir = air / 12;
    var yre = 0;
    yre = (mon * mir * Math.pow(1 + mir, mgo)) / (Math.pow(1 + mir, mgo) - 1);
    document.getElementById("yre").innerHTML = "月供：" + yre.toFixed(2) + "元";
    var interest = 0;
    while (mgo--) {
        interest += mon * air / 12;
        mon -= yre - mon * air / 12;
    }
    document.getElementById("lre").innerHTML = "利息：" + interest.toFixed(2) + "元";
}