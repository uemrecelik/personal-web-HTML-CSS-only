
    const sidemenuitem = document.querySelectorAll('.sidemneuitem');
    const header = document.getElementById('header');
    const closeIcon = document.querySelector('.close');
    const menuItems = document.querySelectorAll('.menuitem');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar')
    const sidebar = document.querySelector('.sidebar');

    burger.addEventListener( 'click', () =>{
        //header.style.visibility = 'hidden';
        sidebar.style.visibility = 'visible';

        burger.style.visibility = "hidden";
        closeIcon.style.visibility = "visible";
    
    });
    closeIcon.addEventListener( 'click', () =>{
        header.style.visibility = 'visible';
        sidebar.style.visibility = 'hidden';

        burger.style.visibility = "visible";
        closeIcon.style.visibility = "hidden";
    
    })

