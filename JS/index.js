// Nav Bar Button

const aboutMeBtn = document.querySelector('[data-btn="about"]');
const resumeBtn = document.querySelector('[data-btn="resume"]');
const projectsBtn = document.querySelector('[data-btn="projects"]')

const aboutMeSec = document.getElementById('about-me');
const resumeSec = document.getElementById('resume');
const projectsSec = document.getElementById('projects');
const aspSec = document.getElementById('pro-asp');

aboutMeBtn.addEventListener('click', ()=>{
    aboutMeSec.style.display = 'block';
    aspSec.style.display = 'block';
    resumeSec.style.display  = 'none';
    projectsSec.style.display = 'none';
})

resumeBtn.addEventListener('click',()=>{
    aboutMeSec.style.display = 'none';
    resumeSec.style.display  = 'block';
    projectsSec.style.display = 'none';
    aspSec.style.display='none';
})

projectsBtn.addEventListener('click',()=>{
    aboutMeSec.style.display = 'none';
    resumeSec.style.display  = 'none';
    projectsSec.style.display = 'block';
    aspSec.style.display = 'none';
})


