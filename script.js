const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});




let timeline = gsap.timeline();


timeline.to(".page-1",{
    y:"100vh",
    scale:0.5,
    duration:0,
})


timeline.to(".page-1",{
    y:"0vh",
    duration:1,
    delay: 1,

})

timeline.to(".page-1",{
    rotate:360,
    scale:1,
    duration:1
})