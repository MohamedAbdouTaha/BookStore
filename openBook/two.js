

var getUrl = window.location.search;
console.log(getUrl);
const params = new URLSearchParams(getUrl);
console.log(params);
var changeBook = params.get('name');
console.log(changeBook);
//--------------------------------


document.querySelector("iframe").setAttribute('src' , "./book/"+changeBook+".pdf");

//  farm.setAttribute('src', e.target.dataset.book+".pdf");


// var getUrl = window.location.search.slice(1);
//console.log(getUrl); "./"+changeBook+".pdf"