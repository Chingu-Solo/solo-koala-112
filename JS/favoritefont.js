var favoriteFonts = [
    {
        fontName: 'Roboto',
        fontCreator: 'Christian Robertson',
    },
    {
        fontName: 'Gayathri',
        fontCreator: 'SMC',
    },
    {
        fontName: 'Chilanka',
        fontCreator: 'SMC',
    },
    {
        fontName: 'Open Sans',
        fontCreator: 'Steve Matteson',
    },
    {
        fontName: 'Lato',
        fontCreator: 'Lukas Dziedzic',
    },
    {
        fontName: 'Manjari',
        fontCreator: 'Santhosh Thottingal',
    },
    {
        fontName: 'Montserrat',
        fontCreator: 'Julieta Ulanovsky',
    },
    {
        fontName: 'Roboto Condensed',
        fontCreator: 'Christain Robertson'
    },

];

var availableFontSize = ['24px','32px','40px','48px']

var sampleText = 'Then came the night of the first falling star.';

for (i = 0; i < favoriteFonts.length; i++) { //adding cards inside main-section
    var newDiv = document.createElement("div");
    newDiv.className = "cards";
    newDiv.innerHTML = favoriteFonts[i].fontName + "<div id='add'><span id='addicon'>+</span></div> " + "<br>" + "<div class='creator'>" + favoriteFonts[i].fontCreator + "</div>" + "<div class='content' style='font-family:" + favoriteFonts[i].fontName + "'>" + sampleText + "</div>";
    var j = document.getElementById("main-section");
    j.appendChild(newDiv);
}

var content = document.getElementsByClassName("content"); //getting array of content of cards


function update() { //updates cards content when something is typed in input box
    for (k = 0; k < content.length; k++) {
        content[k].innerHTML = document.getElementById("updateContent").value;
    }
}

var opt = document.getElementById("options");
opt.addEventListener("click",
    function() { //changes  font size of the content according to the selected size
        for(i=0;i<content.length;i++){
            content[i].style.fontSize = opt.value;
        }
    }
)

var black = document.getElementById("black");
black.addEventListener("click", function () { //changes background color to black
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    var inputs = document.getElementsByTagName("input");
    var select = document.getElementsByTagName("select");
    document.getElementById("refresh").src = "../assets/refreshwhite.png"
    for (i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = "black";
        inputs[i].style.color = "white";
    }
    for(i=0;i<select.length;i++){
        select[i].style.backgroundColor = "black";
        select[i].style.color = "white";
    }


});
var white = document.getElementById("white");
white.addEventListener("click", function () { // changes background color to white
    document.body.style.backgroundColor = "white";
    document.body.style.color = 'black';
    var inputs = document.getElementsByTagName("input");
    document.getElementById("refresh").src = "../assets/refresh.png"
    var select = document.getElementsByTagName("select");
    for (i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = "white";
        inputs[i].style.color = "black";
    }
    for(i=0;i<select.length;i++){
        select[i].style.backgroundColor = "white";
        select[i].style.color = "black";
    }
});

var changeView = document.getElementById("changeView");
var viewTracker = "grid";
changeView.addEventListener("click", function () { // alters cards view from grid to list and vice versa
    if (viewTracker == "grid") {
        changeView.src = "../assets/gridwhite.png";
        document.getElementById("main-section").style.display = "list-item";
        viewTracker = "list";

    }
    else {
        changeView.src = "../assets/listwhite.png";
        document.getElementById("main-section").style.display = "grid";
        viewTracker = "grid";
    }

})

document.getElementById("refresh").addEventListener("click",
    function () { //Resets the  page content to default
        for (k = 0; k < content.length; k++) {
            content[k].innerHTML = sampleText;
            content[k].style.fontSize = "24px";
            opt.value="24px"

        }
        document.getElementById("updateContent").value = null;
    }
)

window.onscroll  = function() {
    scrollToTop();
};

var scrollToTopBtn = document.getElementById('scrollToTopBtn');
function scrollToTop() {
    if (document.body.scrollTop>20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
}

function topFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }