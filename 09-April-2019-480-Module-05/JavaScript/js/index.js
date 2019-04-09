"use strict";

// [...document.querySelectorAll('li')].map(li =>
// {
//     li.onclick = function()
//     {
//         document.querySelector('li.active').classList.remove('active');
//         this.classList.add('active');
        
//         document.querySelector('p.active').classList.remove('active');

//         let id = this.getAttribute('data-id');
//         let p = document.querySelector(`p[data-id="${id}"]`)
//         p.classList.add('active');

//     }
// })

// Task 1

// 1) li-lerin hamisini secib loop-a salmaliyam
// [...document.querySelectorAll('li')].map(li =>
//     {
//         // 2) click olunanda umumi li-lerde active class-i varsa hemin class-i silmeliyem
//         li.onclick = function()
//         {
//             document.querySelector('li.active').classList.remove('active');
            
//             // 3) click olunana active class-i vermeliyem
//             this.classList.add('active');
//         }
//     })

    // Task 2

// 1) li-lerin hamisini secib loop-a salmaliyam
[...document.querySelectorAll('li')].map(li =>
    {
        // 2) click olunanda umumi li-lerde active class-i varsa hemin class-i silmeliyem
        li.onclick = function()
        {
            document.querySelector('li.active').classList.remove('active');
            
            // 3) click olunana active class-i vermeliyem
            this.classList.add('active');

            // 4) click olunan li-in data-id-i goturmeliyem bir deyisene menimsetmeliyem
            let id = this.getAttribute('data-id');

            // 5) divlerde active class-i varsa onu silmeliyem
            document.querySelector("div.active").classList.remove('active');

            // 6) data-id id-e beraber olan div-i secmeliyem
            let divId =document.querySelector(`div[data-id="${id}"]`);
            
            // 7) hemin dive active class-i elave etmeliyem
            divId.classList.add('active');
            
        }
        let previous = document.querySelector('.fa-chevron-left');
        previous.onclick = function()
        {
            let oldLi = document.querySelector('li.active');
            oldLi.classList.remove('active');
            
            // 3) click olunana active class-i vermeliyem
           let newLi = oldLi.previousElementSibling.classList.add('active');

            // 4) click olunan li-in data-id-i goturmeliyem bir deyisene menimsetmeliyem
            let id = li.getAttribute('data-id');

            // 5) divlerde active class-i varsa onu silmeliyem
            document.querySelector("div.active").classList.remove('active');

            // 6) data-id id-e beraber olan div-i secmeliyem
            let divId =document.querySelector(`div[data-id="${id}"]`);
            
            // 7) hemin dive active class-i elave etmeliyem
            divId.classList.add('active');
        }
        let next = document.querySelector('.fa-chevron-right');
        next.onclick = function()
        {
            let oldLi = document.querySelector('li.active');
            oldLi.classList.remove('active');
            
            // 3) click olunana active class-i vermeliyem
           let newLi = oldLi.nextElementSibling.classList.add('active');

            // 4) click olunan li-in data-id-i goturmeliyem bir deyisene menimsetmeliyem
            let id = li.getAttribute('data-id');

            // 5) divlerde active class-i varsa onu silmeliyem
            document.querySelector("div.active").classList.remove('active');

            // 6) data-id id-e beraber olan div-i secmeliyem
            let divId =document.querySelector(`div[data-id="${id}"]`);
            
            // 7) hemin dive active class-i elave etmeliyem
            divId.classList.add('active');
        }
    })

// Task 3

// 1) li-lerin hamisini secib loop-a salmaliyam
// [...document.querySelectorAll('li')].map(li =>
//     {
//         // 2) li-e click edende hemin li-in background-un goturmek ve variable menimsetmek
//         li.onclick = function()
//         {
//             let color = getComputedStyle(this).backgroundColor;

//             // 3) box-u secib varaible teyin etmek

//             let box = document.querySelector('.box');
            
//             // 4) box-un background-a variable menimsetmek
//             box.style.backgroundColor = color;
//             box.style.width = '100%';
//         }
//     })





