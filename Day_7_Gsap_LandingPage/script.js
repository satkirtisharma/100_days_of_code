var t=gsap.timeline();

t.to(".div1",{
    y:20,
    duration:.5,
    delay:1
})
t.to(".div2 h3",{
    y:20,
    duration:.5,
    stagger:.5
})
t.from("h1",{
    x:-1250,
    duration:1,
    stagger:.5
})