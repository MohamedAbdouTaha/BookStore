let element =  document.querySelectorAll('img ');


let link = document.querySelectorAll('a');



element.forEach(ele => {

    ele.addEventListener('click' , (e) => {

        window.location.href = "./open.html?name="+e.target.dataset.book+"";
        
       
    });


});
