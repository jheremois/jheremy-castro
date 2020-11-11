const menu = document.getElementById('menu')
const comes_down = document.querySelectorAll('#up_apear')
const shadow_me = document.getElementById('shadow_me')
const skills = document.getElementById('skills')
const portfolio = document.getElementById('portfolio')
const contact = document.getElementById('contact') 
const boutme = document.getElementById('about')
const hrs = document.querySelectorAll('#hrs')

menu.addEventListener('click', ()=>{
    
    let options = document.getElementsByClassName('options')[0]
    
    if (options.style.height !== '270px') {

        options.style.height = '270px'
    }
    else{
        options.style.height = '0px'
    }

})

setTimeout(()=>{
    for(i = 0; i < comes_down.length; i++){

        comes_down[i].style.opacity = '100%'
        comes_down[i].style.transform = 'translatey(0px)'
    }
}, 100)

const pop_up = (secti, pops, hr1, gc1, gc2)=>{

    const up = (len)=>{
        secti.style.opacity = '100%'

        const skill = document.querySelectorAll(pops)

        for(i = 0; i < skill.length; i++){
    
            skill[i].style.transform = 'scale(1)'   
        
        }

        for(i = 0; i < hr1; i++){

            hrs[i].style.width = len
            
        }

        shadow_me.style.boxShadow = '-14px -14px 0px -1px #1481ff'

        const pics = document.querySelectorAll('#pic')

        for(i = 0; i < pics.length; i++){
    
            pics[i].style.transform = 'translatey(0px)'   
        
        }
    }

    if(window.outerWidth < 600){
        if (secti.getBoundingClientRect().top < gc1) {

            up('26%')    
            
        }
        else if (secti.getBoundingClientRect().top > gc1 + 5) {

            secti.style.opacity = '0%'

        }
    }
    else{
        if (secti.getBoundingClientRect().top < gc2) {

            up('30%')    
            
        }
        else if (secti.getBoundingClientRect().top > gc2 + 5) {

            secti.style.opacity = '0%'

        }
    }

}

document.addEventListener('scroll', ()=>{

    pop_up(contact,'#form', 7, 520, 600)
    pop_up(skills, '#skill', 4, 520, 600)
    pop_up(portfolio, '.main_works', 6, 620, 600)
    pop_up(boutme, 'about', 2, 520, 600)

})