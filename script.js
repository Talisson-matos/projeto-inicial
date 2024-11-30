

window.addEventListener('scroll', () => {
    let aside = document.getElementsByTagName('aside');
    let scrollAside  = [650,1500,3500,5000];
    let i;
    for(i=0;i<aside.length;i++){
        if(window.scrollY >= scrollAside[i]){
            aside[i].style.opacity = 1;
        }else{
            aside[i].style.opacity = 0;
        }
    }
})

