window.onload = init;

function init() {
    var year = document.getElementById("year");
    var num = 1900;
    for (; num < 2100; ++num) {
        var n_y = document.createElement("option");
        n_y.innerHTML = num;
        year.appendChild(n_y);
    }
}