let crsr = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");
let h4all = document.querySelectorAll("#nav h4");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x +"px"
    crsr.style.top = dets.y +"px"
    blur.style.left = dets.x- 200 +"px"
    blur.style.top = dets.y - 200 +"px"
})

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "100px",
    duration: 0.3,
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
    }
});

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        // markers:true,
        start: "top -30%",
        end: "end -80%",
        scrub: 2
    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    // stagger: 0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers: true,
        start:"top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from(".card", {
    scale:0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.8,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers: true,
        start:"top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from("#colon1",{
    x: -70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrubt: 3
    }
})

gsap.from("#colon2",{
    x: 70,
    y:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrubt: 3
    }
})

gsap.from("#page4 h1",{
    y:40,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroll:"body",
        // markers: true,
        start:"top 65%",
        end:"top 70%",
        scrub:3
    }
})