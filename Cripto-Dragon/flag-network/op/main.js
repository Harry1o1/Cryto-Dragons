  let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}})
        let flagPoles = CSSRulePlugin.getRule(".card:before");

        tl.to('h1', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2})
        tl.to('.form', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=2")
        tl.from('.card', { scaleY: 0, stagger: .2}, "-=2")
        tl.from(flagPoles, {  stagger: 1, opacity: 0, transform: 'translateY(100px)' }, "-=2")
        tl.to('.title, .desc', { stagger: .1, duration: 1.2, opacity: 1, y: 0}, "-=2")
        tl.to('footer', { opacity: 1}, "-=2")
        
        
        