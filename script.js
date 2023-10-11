let step = document.querySelectorAll(".step");
let paragraph = document.querySelectorAll(".paragraph");
let para = document.querySelectorAll(".para");
console.log(paragraph);
let image = document.querySelector("img");
let imageArr = ["./1.avif", "./2.avif", "./3.avif"];
let p = document.querySelectorAll("p");
let h1 = document.querySelectorAll("h1");
let images = document.querySelector(".images");

//add event to click button
step.forEach((item, idx) => {
    item.addEventListener('click', () => {

        //change images according to data
        image.setAttribute("src", imageArr[idx]);

        //give all paragraph by default style and display none
        paragraph.forEach((item, i) => {
            item.style.display = "none";
            step[i].style.backgroundColor = "rgb(182,201,240)";
            step[i].style.color = "black";
            // image.style.transform = "scale(1)"
        })

        //give display block to clicked patragraph data
        paragraph[idx].style.display = "block";
        paragraph[idx].style.transition = "all 2s";
        step[idx].style.backgroundColor = "black";
        step[idx].style.color = "white";

        image.style.transform = "scale(1.6)"

        //scale the image
        setTimeout(rotateimage,1000)
        function rotateimage(){
            image.style.transform = "scale(1)"
            image.style.transitionTimingFunction = "linear"
            image.style.transitionDuration = "0.6s"
        }
        
        
        //fade in animation to paragraph
        var opacity = 0;
        p[idx].style.opacity = opacity;
        h1[idx].style.opacity = opacity;

        setInterval(show, 100);
        function show() {  
            if (opacity <= 1) { 
                opacity = opacity + 0.2; 
                p[idx].style.opacity = opacity; 
                h1[idx].style.opacity = opacity;
                image[idx].style.opacity = opacity;
            } else { 
                clearInterval(intervalID); 
            } 
        } 
    });
});


