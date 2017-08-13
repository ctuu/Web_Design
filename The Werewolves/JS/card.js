window.onload = init;
var ifa, ifv, ifw, ifs, ift, ifb;

function init() {
    var ball = document.getElementById("ball");
    var bvi = document.getElementById("bvi");
    var bwo = document.getElementById("bwo");
    var bsp = document.getElementById("bsp");
    var btp = document.getElementById("btp");
    var bat = document.getElementById("bat");
    ifa = ifv = ifw = ifs = ift = ifb = 1;
    ball.onclick = ballclick;
    bvi.onclick = bviclick;
    bwo.onclick = bwoclick;
    bsp.onclick = bspclick;
    btp.onclick = btpclick;
    bat.onclick = batclick;
}

function ballclick() {
    if (ifv == 1 && ifw == 1 && ifs == 1 && ift == 1 && ifa == 1)
    ;
    else
        ifa = ifv = ifw = ifs = ift = ifb = 0;
    bviclick();
    bwoclick();
    bspclick();
    btpclick();
    batclick();
    check();
}

function bviclick() {
    var vi = document.getElementsByClassName('vi');
    var bvi = document.getElementById('bvi');
    i = vi.length;
    if (ifv == 1)
        while (i--) {
            bvi.style.background = "#f0f0f0";
            bvi.style.color = "black";
            vi[i].style.display = "none";
            ifv = 0;
        } else
            while (i--) {
                bvi.style.background = "#f0f0f0";
                bvi.style.color = "#00897b";
                vi[i].style.display = "";
                ifv = 1;
            }
    check();
}

function bwoclick() {
    var wo = document.getElementsByClassName('wo');
    var bwo = document.getElementById('bwo');
    i = wo.length;
    if (ifw == 1)
        while (i--) {
            bwo.style.background = "#f0f0f0";
            bwo.style.color = "black";
            wo[i].style.display = "none";
            ifw = 0;
        }
    else
        while (i--) {
            bwo.style.background = "#f0f0f0";
            bwo.style.color = "#c41411";
            wo[i].style.display = "";
            ifw = 1;
        }
    check();
}

function bspclick() {
    var sp = document.getElementsByClassName('sp');
    var bsp = document.getElementById('bsp');
    i = sp.length;

    if (ifs == 1)
        while (i--) {
            bsp.style.background = "#f0f0f0";
            bsp.style.color = "black";
            sp[i].style.display = "none";
            ifs = 0;
        } else
            while (i--) {
                bsp.style.background = "#f0f0f0";
                bsp.style.color = "#d84315";
                sp[i].style.display = "";
                ifs = 1;
            }
    check();
}

function btpclick() {
    var tp = document.getElementsByClassName('tp');
    var btp = document.getElementById('btp');
    i = tp.length;
    if (ift == 1)
        while (i--) {
            btp.style.background = "#f0f0f0";
            btp.style.color = "black";
            tp[i].style.display = "none";
            ift = 0;
        } else
            while (i--) {
                btp.style.background = "#f0f0f0";
                btp.style.color = "#512da8";
                tp[i].style.display = "";
                ift = 1;
            }
    check();
}

function batclick() {
    var at = document.getElementsByClassName('at');
    var bat = document.getElementById('bat');
    i = at.length;

    if (ifa == 1)
        while (i--) {
            bat.style.background = "#f0f0f0";
            bat.style.color = "black";
            at[i].style.display = "none";
            ifa = 0;
        } else
            while (i--) {
                bat.style.background = "#f0f0f0";
                bat.style.color = "#455a64";
                at[i].style.display = "";
                ifa = 1;

            }
    check();
}

function check() {
    if (ifv == 0 && ifw == 0 && ifs == 0 && ift == 0 && ifa == 0) {
        ball.style.background = "#f0f0f0";
        ball.style.color = "black";
    } else {
        ball.style.background = "#f0f0f0";
        ball.style.color = "#e91e62";
    }
}