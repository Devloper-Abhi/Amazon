const sliderImages = document.querySelectorAll(".slider .images")
const sliderImage = document.querySelectorAll(".slider .images img")
const arrowLeft = document.querySelector(".slider .arrow-left")
const arrowRight = document.querySelector(".slider .arrow-right")
var imageCount = 0

sliderImages.forEach(
    (image,index)=>{
    image.style.left = `${index *100 }%`
    // image.style.zIndex = imageCount + 1
    }
)

const slideRight = () =>{
    sliderImage[imageCount].style.transform = `translateX(-${(imageCount * 100) + 100}%)`
}

const slideLeft = () =>{
    sliderImage[imageCount].style.transform = `translateX(-${(imageCount * 100) + 100-((imageCount*100)+100)}%)`
}
arrowRight.addEventListener("click",()=>{
    if (imageCount>=0) {
        arrowLeft.style.display = "flex"
    }
    if(imageCount==5){
        arrowRight.style.display = "none"
    }
    console.log(imageCount)
    slideRight()
    imageCount++
})
arrowLeft.addEventListener("click",()=>{
    imageCount--
    if (imageCount==0) {
        arrowLeft.style.display = "none" ;
    }
    if(imageCount<6){
        arrowRight.style.display = "flex"
    }
    slideLeft()
    console.log(imageCount)
})