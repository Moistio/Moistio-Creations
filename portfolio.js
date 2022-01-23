var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            padding = "0px";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

var modal = document.getElementById("modal");
var images = document.getElementsByClassName("project-img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption")

for (var i = 0; i < images.length; i++) {
    var img = images[i];
    img.onclick = function(evt) {
        console.log(evt)
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

modal.addEventListener('click', function(){
    this.style.display = "none";
})

