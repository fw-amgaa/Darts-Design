var itemcount = document.querySelectorAll('.c-products__items--item');
var allitems = document.getElementById('allitems');
allitems.innerHTML = itemcount.length;

var m = 1;
var counter = 1;
for(i=0; i<itemcount.length; i++){
    itemcount[i].setAttribute("name", m);
    counter++;
    if(counter > 16){
        m++;
        counter = 1;
    }
}


var pages = (itemcount.length - 1) / 16 + 1;

var pagejs = '';
for(var i=1; i<=(pages); i++){
    pagejs += '<a href="page-' + i + '">' + i + '</a>';
}


var pageclass = document.querySelector('#navigation');
pageclass.innerHTML = '<div class="c-content__nav--navigation"> <span class="material-icons"> chevron_left </span>'
 +
 pagejs
 +
'<span class="material-icons"> chevron_right </span></div>'

var b = (itemcount.length - 1) % 16 + 1;
var blyat = Math.floor(pages);

document.getElementById('currentitems').innerHTML = b;

for(i=0; i<itemcount.length; i++){
    if(itemcount[i].attributes('name') != 1){
        itemcount[i].classList.add('none');
    }
}