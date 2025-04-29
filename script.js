

var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button", {
    y:-15,
    opacity: 0,
    duration: 0.3,
    delay: .5,
    stagger: 0.2
})

tl.from(".partone h2", {
    x:-300,
    opacity:0,
    duration: 0.3,
    delay:0.3
}, "-=0.3")

tl.from(".partone p ", {
    x:-100,
    opacity:0,
    duration: 0.3,
    delay:0.3

})

tl.from(".partone button", {
    opacity:0,
    duration: 0.3,
    delay: 0.3
})

tl.from(".parttwo img", {
    opacity:0 ,
    x:200 ,
    delay: 0.1,
    duration: 0.3
}, "-=1")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body", 
        // markers: true,
        start: "top 50%",
        end: "top -30%",
        scrub: 2
    }
})

tl2.from(".sec-bottom img" , {
    y: 20,
    opacity: 0,
    duration: 0.3,
    stagger: 0.23

})

tl2.from(".services", {
    opacity: 0,
    y: 30,
    delay: 0.5,
    duration:0.5
})

tl2.from(".ele.line1.left", {
    x: -300,
    opacity: 0,
    duration: 1,
    delay: 0.9
}, "upper")

tl2.from(".ele-black.line1.right", {
    x: 300,
    opacity: 0,
    duration: 1,
    delay: 0.9

}, "upper")

tl2.from(".ele-black.line2.left", {
    x: -300,
    opacity: 0,
    duration: 1,
    delay: 0.9
}, "lower")

tl2.from(".ele.line2.right", {
    x: 300,
    opacity: 0,
    duration: 1,
    delay: 0.9
}, "lower")



tl2.from(".section3.part3 h3", {
    x: -100,
    opacity: 0,
    delay: 1.5,
    duration: 0.5,
    stagger: 0.3

})

tl2.from(".part3 button", {
    opacity: 0,
    delay: 1.5,
    duration: 0.9

})

tl2.from(".section3 .img3", {
    opacity: 0,
    x: 100,
    delay: 1,
    duration: 0.9
})

