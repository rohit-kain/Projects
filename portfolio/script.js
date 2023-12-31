const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll("[class*='control-']");
const allsection = document.querySelector('.main-content');


function PageTransitions() {
    // active color of btns
    for(let i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let currbtn = document.querySelectorAll('.active-btn');
            currbtn[0].className = currbtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    allsection.addEventListener('click', (e)=>{
        const id= e.target.dataset.id;
        if(id){
            secBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions();