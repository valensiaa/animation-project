
let heading = document.getElementById('heading');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill4');
let hill3 = document.getElementById('hill5');
let leaf = document.getElementById('leaf');

if(heading){
    window.addEventListener('scroll', () => {
        let value = window.scrollY;
    
         heading.style.marginTop = value * 2.5 + 'px';
        hill1.style.top = value * 1.5 + 'px';
        hill2.style.left = value * -1.5 + 'px';
        hill3.style.top = value * 1.0 + 'px';
        leaf.style.top = value * -1.5 + 'px';
        leaf.style.left = value * 1.5 + 'px';
    })}
