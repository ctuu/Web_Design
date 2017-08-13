window.onload = init
var nc, tc, ac, bc;
nc = tc = ac = bc = 0;

function init() {
    var btn1 = document.getElementById("add_button");
    btn1.onclick = createSticky;

    var stickiesArray = getStickiesArray();

    for (var i = 0; i < stickiesArray.length; ++i) {
        var key = stickiesArray[i];
        var value = JSON.parse(localStorage[key]);
        addStickyToDOM(key, value);
    }
    $('textarea').each(function() {
        this.setAttribute('style', 'height:' + (this.scrollHeight) - 42 + 'px;overflow-y:hidden;');
    }).on('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) - 42 + 'px';
    });
    $("#input_form").focusin(function() {
        AppearTextbox();
    });
    $("#input_form").focusout(function() {
        iflosefocus();
        setTimeout('DisappearTextbox()', 200);
    });
}

function addStickyToDOM(key, value) {
    var stickies = document.getElementById("stickies");
    var sticky = document.createElement("li");
    sticky.setAttribute("id", key);
    var span = document.createElement("span");
    span.setAttribute("class", "sticky");
    var t_topic = document.createElement("h1");
    var t_note = document.createElement("p");
    var t_author = document.createElement("small");
    var t_article = document.createElement("article");
    var t_close = document.createElement("div");
    t_close.setAttribute("class", "close fa fa-times");
    t_close.innerHTML = "";
    t_topic.innerHTML = value.topic;
    t_note.innerHTML = (value.note).replace(/\n/g, "<br />");
    t_author.innerHTML = value.author;
    t_article.appendChild(t_topic);
    t_article.appendChild(t_note);
    span.appendChild(t_close);
    span.appendChild(t_article);
    span.appendChild(t_author);
    sticky.appendChild(span);
    stickies.appendChild(sticky);
    t_close.onclick = deleteSticky;
}

function getStickiesArray() {
    var stickiesArray = localStorage.getItem("stickiesArray");
    if (!stickiesArray) {
        stickiesArray = [];
        localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
    } else {
        stickiesArray = JSON.parse(stickiesArray);
    }
    return stickiesArray;
}

function createSticky() {
    var stickiesArray = getStickiesArray();
    var currentDate = new Date();
    var key = "sticky_" + currentDate.getTime();
    var topic = document.getElementById("topic_text").value;
    var note = document.getElementById("note_text").value;
    var author = document.getElementById("author_text").value;
    if (note == '') {
        return;
    }
    var value = {
        "topic": topic,
        "note": note,
        "author": author
    }
    localStorage.setItem(key, JSON.stringify(value));
    stickiesArray.push(key);
    localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
    addStickyToDOM(key, value);
    document.getElementById("note_text").value = '';
    document.getElementById("topic_text").value = '';
    document.getElementById("author_text").value = '';
    DisappearTextbox();
}

function deleteSticky(e) {
    var key = e.target.parentNode.parentNode.id;
    localStorage.removeItem(key);
    var stickiesArray = getStickiesArray();
    if (stickiesArray) {
        for (var i = 0; i < stickiesArray.length; ++i) {
            if (key == stickiesArray[i]) {
                stickiesArray.splice(i, 1);
            }
        }
        localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
    }
    removeStickyFromDOM(key);
}

function removeStickyFromDOM(key) {
    var sticky = document.getElementById(key);
    sticky.parentNode.removeChild(sticky);
}

function AppearTextbox() {
    document.getElementById("topic_text").style.display = "";
    document.getElementById("author_text").style.display = "";
}

function DisappearTextbox() {
    if (nc == 0 && tc == 0 && ac == 0) {
        document.getElementById("topic_text").style.display = "none";
        document.getElementById("author_text").style.display = "none";
    }
}


function iflosefocus() {
    nc = tc = ac = bc = 0;
    $("#note_text").focusin(function() {
        nc = 1;
    });
    $("#topic_text").focusin(function() {
        tc = 1;
    });
    $("#author_text").focusin(function() {
        ac = 1;
    });
    $("#add_button").focusin(function() {
        bc = 1;
    });
}