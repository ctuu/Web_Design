window.onload = init;

function init() {
    var Btn1 = document.getElementById("btn1");
    Btn1.onclick = judge;
    var Btn2 = document.getElementById("btn2");
    Btn2.onclick = submit;
}

function judge() {
    var year = parseInt(document.getElementById("year").value);
    if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
        document.getElementById("yre").value = "Yes";
    } else
        document.getElementById("yre").value = "No";
}

function submit() {
    var item = document.getElementsByName("chb");
    var blist = document.getElementsByClassName("blist");
    var n = item.length;
    var k = 0;
    var str = "";
    var str2 = '';
    for (var i = 0; i < n; ++i) {
        if (item[i].checked) {
            str2 += "《" + blist[i].innerHTML + "》\n";
            ++k;
        }
    }
    str = "您订购的教材有" + k + "本，";
    if (k > 1)
        str += "分别";
    str += "是：\n" + str2;

    alert(str);
}