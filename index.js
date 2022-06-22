const ham = document.querySelectorAll('.nav-bar');
const nav = document.querySelector('.nav');
const navlist = document.querySelector('.nav-list') 
const ul = document.querySelectorAll('li')
const leader = document.querySelector('.leaderpage')
const home = document. querySelector('.section-1')
const  news = document.querySelector('.news')
const  contact = document.querySelector('.contacts')
const span = document.querySelectorAll(".span")
const validation = document.querySelectorAll('.inputs')
const submit = document.querySelector('.submit')



const Fname = document.querySelector('#First-Name')
const Sname = document.querySelector('#Sur-Name')
const Email = document.querySelector('#Email')
const Pnumber = document.querySelector('#Phone-Number')





submit.addEventListener("click",valid )



validation.forEach(input => {
    input.addEventListener('keydown',() =>{
        if(input.classList.contains('error')){
            input.classList.remove('error');
        }
    })
    
    
})

let mailFormat = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\.-]+).([a-z]{2,20})$/;
function valid(e){
    e.preventDefault()
    if(Fname.value.length === 0 || Fname.value === " "){
        Fname.classList.add('error')
    }else if(Sname.value.length === 0 || Sname.value === " "){
        Sname.classList.add('error')
    }else if(Pnumber.value.length === 0 || Pnumber.value === " "){
        Pnumber.classList.add('error')
    }else if(!mailFormat.test(Email.value)){
       Email.classList.add('error')        
    }else{
        validation.forEach(input => input.value = null)
    }
    
}


function obeserveChange(entries,observer){
    entries.forEach( e => {        
        if(!e.isIntersecting){
            return;
        }
        e.target.classList.toggle('show')
        observer.unobserve(e.target)
    })
}

const observer = new IntersectionObserver(obeserveChange,{
    rootMargin:"-50px"
})

span.forEach( e => {
   observer.observe(e)
})

function toggl(){
    for (let i = 0; i < ham.length; i++){
        ham[i].classList.toggle('active');
        navlist.classList.toggle('active');
}
}
nav.addEventListener('click', toggl)

ul.forEach(element => {
    element.addEventListener('click', (e) => {
        if(e.target.textContent === 'leader'){
            leader.style.display = 'flex';
            home.style.display = 'none';
            contact.style.display = 'none';
            news.style.display = 'none';
        }else if(e.target.textContent === 'News'){
            leader.style.display = 'none';
            home.style.display = 'none';
            contact.style.display = 'none';
            news.style.display = 'flex';
        }else if(e.target.textContent === 'contact'){
            leader.style.display = 'none';
            home.style.display = 'none';
            contact.style.display = 'flex';
            news.style.display = 'none';
        }else{
            leader.style.display = 'none';
            home.style.display = 'flex';
            contact.style.display = 'none';
            news.style.display = 'none';
        }
        toggl();
    })
})

document.querySelector('.submits').addEventListener('click', (e) => {
    e.preventDefault()
    const footMail = document.querySelector('.footer-inputs');
    if(!mailFormat.test(footMail.value)){ 
       alert('Enter valid mail ID')
    }else{
        footMail.value = " ";
    }
    
})