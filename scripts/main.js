let memorial  = document.querySelector('#click');
let myText = document.querySelector('#text');

myText.style.display = 'none';

memorial.onclick = () => {
    if(myText.style.display === 'none') {
        myText.style.display = 'block';
    } else {
        myText.style.display = 'none';
    }
};

const image = document.querySelector('#tree');

let blossom = "images/closeupcblossom.png";
let tree = "images/fullcbtree.png";

image.onmouseenter = (e) => {
   e.target.setAttribute('src', blossom);
};

image.onmouseleave = (e) => {
   e.target.setAttribute('src', tree);
};

