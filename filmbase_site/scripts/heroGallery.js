// sets the number of the current photo
let count = 1;

// finds the current photo per id
const heroImg = document.querySelector(".hero-image img");
const captionPrint = document.querySelector("#hero figcaption")
// sets the arrows
const arrows = document.querySelectorAll("#hero i");

/* let captions = ["] */
const captions = document.querySelectorAll("#hero .captions")
const captionsArray = Array.from(captions);
// Sets eventlisteners listening for a click and the arrows
for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", rollImg);
}

/* this function determines whether it's next or prev arrow has been clicked, 
and it changes the index number accordingly.
It then replaces the number of the index in the filename of the id that shows the current photo, 
thus changing the source file of said id and thus also the image*/ 
function rollImg() {
    if (this.getAttribute("id") === "next") {
        if (count < 3) {
            count++;
        } else {
            count = 1;
        }
    } 
    if (this.getAttribute("id") === "prev") {
        if (count > 1) {
            count--;
        } else {
            count = 3;
        }
    }

    let newSrc = "images/hero-gallery/photo-" + count + ".jpg";
    heroImg.setAttribute("src", newSrc);
}

