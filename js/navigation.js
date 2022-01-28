let tab = function (){
    let tabNav = document.querySelectorAll('.genres__item');
    tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
    })
    
    function selectTabNav(){
    tabNav.forEach(item =>{
    item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    }
    }
    
    tab();