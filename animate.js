var cursorVisible = true;
var currentFeatureIndex = 0;
var i = 0;

const featureTxtArr = ['CARDS', 'PAYMENTS', 'LOAN', 'SUPPORT', 'REWARDS', 'SAVINGS', 'INVESTMENTS', 'FOREX', 'ANALYTICS'];

window.onload = function() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    setTimeout(this.bindWriter,700);
    animateFeature(featureTxtArr[0].toLowerCase());
    setInterval(function () {
    var cusorDom = document.getElementById('cursor');
    if (cursorVisible) {
        cusorDom.style.opacity = 0;
        cursorVisible = false;
        } 
        else {
                cusorDom.style.opacity = 1;
                cursorVisible = true;
            }
     }, 350);
};
function bindWriter() {
    var txt = featureTxtArr[currentFeatureIndex];
    if (i < txt.length) {
        document.getElementById("special_text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(bindWriter, 110);
    }
    else
        this.setTimeout(this.bindWriterDel, 700);
}

function bindWriterDel() {
    var txt = featureTxtArr[currentFeatureIndex];
    if (i > 0) {
        i--;
        document.getElementById("special_text").innerHTML = txt.substring(0, i);
        setTimeout(bindWriterDel, 110);
    } else {
        currentFeatureIndex++;
        if (currentFeatureIndex >= featureTxtArr.length)
            currentFeatureIndex = 0;
        animateFeature(featureTxtArr[currentFeatureIndex].toLowerCase());
        this.setTimeout(this.bindWriter, 700);
    }
}
function animateFeature(featureClass) {
    var elemArr = document.getElementsByClassName("selected");
    var elemArrLen = elemArr.length;
    for (var i = 0; i < elemArrLen; i++) {
        elemArr[0].classList.remove("selected");
    }
    elemArr = document.getElementsByClassName(featureClass);
    for (var i = 0; i < elemArr.length; i++) {
        elemArr[i].className += " selected";
    }
    
}

    function ValidateEmail(inputText)
        {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.value.match(mailformat))
        {
        document.getElementById("validation").innerHTML="Thanks for connecting with us."
        id=true;
        }
        else
        {
        document.getElementById("validation").innerHTML="Invalid ID"
        id=false
        }
        }