const header = document.getElementById('header');
const title = document.getElementById('title');
const except = document.getElementById('except');
const profile_img = document.getElementById('profile-img');
const person = document.getElementById('name');
const contact = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500)
function getData() {
    header.innerHTML = '<img src="/images/cool.jpg" alt="cool" />'
    title.innerHTML = 'My Frontend Contact Card'
    except.innerHTML = "I'm a web Developer with extensive experience of a year. I'm skilled in HTML, CSS, JavaScript, NestJs and some framework such as React & Reduxjs, AngularJs & Nestjs and nodejs. My expertise is to create and develop web design, game development, graphic designer, animations and software engineering. Hit the dial to contact me!"
    profile_img.innerHTML = '<img src="/images/Olamphzy.png" alt="Profile Pic" />'
    person.innerHTML = 'Olanrewaju Rasheed'
    contact.innerHTML = 'Olanrewajurasheed03@gmail.com'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}
