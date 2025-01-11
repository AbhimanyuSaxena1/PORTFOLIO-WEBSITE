
function LocoScroll(){
    // Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize LocomotiveScroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#container'),
    smooth: true
});

// Update ScrollTrigger with LocomotiveScroll
scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#container", {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#container").style.transform ? "transform" : "fixed"
});

scroll.on('scroll', ScrollTrigger.update);
ScrollTrigger.addEventListener('refresh', () => scroll.update());
ScrollTrigger.refresh();
}

var tl = gsap.timeline();
var mm = gsap.matchMedia();
mm.add("(min-width:601px)",()=>{
    //DESKTOP
    function bottomH1Animation(){
        gsap.to("#bottom h1",{
            x:"-350%",
            scrollTrigger:{
                trigger:"#bottom",
                scroller:"#container",
                scrub:2,
                pin:true,
                start:"top 0",
                end:"top -100%"
            }
        
        })
    }
    
    function navAnimation(){
        tl.from("nav",{
        duration:.6
    })
    
    }
    tl.from("#nav1 h2",{
        x:-50,
        duration: 1,
        stagger : .2,
        opacity : 0
        
        // delay : .3
    })
    tl.from("#nav2 h2",{
        y:-100,
        duration: .6,
        stagger : .3,
        opacity : 0,
        scale : 1.5,
        delay : 0
    
    })
    tl.from("#text h1",{
        x:-2000,
        opacity:0,
        duration:2,
        stagger:2
    })
    tl.from(".Rotation",{
        x:50,
        duration:1,
        stagger:1,
        rotate : 45,
        opacity:0,
        // pin:true
    })
    
    
    LocoScroll()
    bottomH1Animation()
    function Splitter(){
        var Allh1 = document.querySelectorAll("#about h1")
        Allh1.forEach(function(item){
            var selection = item.textContent;
            var Splitter = selection.split("");
            var clutter = "";
            Splitter.forEach(function(e){
                clutter += `<span>${e}</span>`
            })
            item.innerHTML = clutter ;
        })
    }
    
    Splitter()
    gsap.to("#about h1 span",{
        color: "whitesmoke",
        // webkitTextStroke:".8px red",
        stagger : 0.2,
        scrollTrigger:{
            trigger: "#about h1",
            scroller: "#container",
            scrub:true,
            start:"top 70%",
            end:"top 10%",
            // markers: true
        }
    })
})

mm.add("(max-width:600px)",()=>{
    //MOBILE
    
    function navAnimation(){
        tl.from("nav",{
        duration:2
    })
    
    }
    tl.from("#nav1 h2",{
        x:-70,
        duration: 1,
        stagger:.5
    })
    tl.from("#nav2 h2",{
        y:-100,
        duration: .6,
        stagger : -.4,
    })
    tl.from("#bottom",{
        y: "110%",
        scale:1.4,
        opacity:0,
        duration:1.5
    })
    function bottomH1Animation(){
        gsap.to("#bottom h1",{
            x:"-1192%",
            scale:2.2,
            scrollTrigger:{
                trigger:"#bottom",
                scroller:"#container",
                scrub:5,
                pin:true,
                start:"top 40%",
                end:"top -115%"
            }
        
        })
    }
    tl.from("#text h1",{
        x:-1000,
        scale:3,
        duration:1.8,
        stagger:1.2,
    })
    tl.from(".Rotation",{
        x:50,
        scale:2,
        duration:1,
        stagger:1,
        rotate : 45,
        opacity:0,
        // pin:true
    })
    
    
    LocoScroll()
    bottomH1Animation()
    function Splitter(){
        var Allh1 = document.querySelectorAll("#about h1")
        Allh1.forEach(function(item){
            var selection = item.textContent;
            var Splitter = selection.split("");
            var clutter = "";
            Splitter.forEach(function(e){
                clutter += `<span>${e}</span>`
            })
            item.innerHTML = clutter ;
        })
    }
    
    Splitter()
    gsap.to("#about h1 span",{
        color: "whitesmoke",
        // webkitTextStroke:".8px red",
        stagger : 0.2,
        scrollTrigger:{
            trigger: "#about h1",
            scroller: "#container",
            scrub:true,
            start:"top 70%",
            end:"top 10%",
            // markers: true
        }
    })
    gsap.to("#about h1 span",{
        fontSize:"7vw",
        lineHeight:"7vw",
        scrollTrigger:{
            trigger:"#about h1 span",
            scroller:"#container",
            scrub:5,
            start:"top 70%",
            end:"top 10%"
        }
    })
})