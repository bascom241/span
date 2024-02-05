const imageList = document.querySelector('.slider-wrapper .image-list');
const slideButtons = document.querySelectorAll('.slider-wrapper .slide-button'); 
const sliderScrollbar = document.querySelector('.container .slider'); 
const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb"); 
const initSLider = ()=>{
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    slideButtons.forEach(button=>{
        button.addEventListener('click',()=>{
            const direction = button.id === 'prev-slide' ?-1.08 : 1.08;

            const scrollAmount= imageList.clientWidth * direction;
            imageList.scrollBy({left:scrollAmount, behavior:'smooth'})
        })
    })
    const handleSlideButtons = ()=>{
        slideButtons[0].style.display = imageList.scrollLeft<=0?'none':'block'
        console.log(imageList.scrollLeft)
        slideButtons[1].style.display = imageList.scrollLeft>=maxScrollLeft? "none":'block'
    }
    const updateScrollTopPosition = ()=>{
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition/maxScrollLeft) * (sliderScrollbar.clientWidth-scrollbarThumb.offsetWidth)
        scrollbarThumb.style.left = `${thumbPosition}px`
    }   
    imageList.addEventListener('scroll',()=>{
        handleSlideButtons();
        updateScrollTopPosition();
    })
}
/*const cancel = document.querySelector('nav img:nth-of-type(2)')
const btn = document.querySelector('nav button')
const ul = document.querySelector(' nav .ul')
const nav = document.querySelector('nav')
const navbar2= document.querySelector('.nav-bar div');
const navbar = document.querySelector('.nav-bar');
navbar.addEventListener('click',()=>{
    nav.style.transition= 'height ease-in-out 0.4s'
    nav.style.height='200px'
    ul.style.display='block';
    btn.style.display='block';
    navbar.style.display='none'
    cancel.classList.add('active');
})
cancel.addEventListener('click',()=>{
  

})*/
const btn = document.querySelector('nav button')
const nav = document.querySelector('nav')
const navbar2= document.querySelector('.nav-bar div');
const navbar = document.querySelector('.nav-bar');
const ul = document.querySelector(' nav .ul')
let isExpanded = true 

navbar.addEventListener('click',()=>{
    if (isExpanded){

  
    nav.style.transition= 'height ease-in-out 0.1s'
    nav.style.height='200px';
    ul.style.display='block';
    ul.style.position='absolute';
    ul.style.left='0px'
    ul.style.top='60px'
    btn.style.display='block';
    isExpanded = false;
} else{
    nav.style.height='80px';
    ul.style.display= 'none';
    btn.style.display='none';
    isExpanded = true;
}
})

const firstSection = document.getElementById('first-section');
const secondSection = document.getElementById('second-section');
const thirdSection = document.getElementById('third-section');
const fourthSection = document.getElementById('fourth-section');
const fifthSection = document.getElementById('fifth-section');






const options = {
    rootMargin:'0px',
    threshold:0.5
}
const observer = new IntersectionObserver(
    callbackFunction,
    options
)

function callbackFunction(enteries){
    enteries.forEach(entery=>{
        if(entery.isIntersecting){
           if(entery.target.id==='first-section'){
            entery.target.classList.add('loaded')
           }
           if(entery.target.id==='second-section'){
            entery.target.classList.add('loaded')
           }
           if(entery.target.id==='third-section'){
            entery.target.classList.add('animate')
           }
           if(entery.target.id==='fourth-section'){
            entery.target.classList.add('loaded')
           }
           if(entery.target.id==='fifth-section'){
            entery.target.classList.add('loaded')
           }
           
            observer.unobserve(entery.target)
        }
    })

    
}


observer.observe(firstSection)
observer.observe(secondSection)
observer.observe(thirdSection)
observer.observe(fourthSection)
observer.observe(fifthSection)








window.addEventListener('load',initSLider);