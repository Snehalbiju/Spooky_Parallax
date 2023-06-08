let text=document.getElementById("text");

let tree=document.getElementById("tree");
let bat=document.getElementById("bat");
let witch=document.getElementById("witch");



bat.style.top= 350+'px';

window.addEventListener ('scroll',()=>{
    let value=window.scrollY;

    text.style.marginTop= value * 2.5 +'px';
    bat.style.left= value* 0.5+'px';
    tree.style.marginTop= value* 3+'px';
    witch.style.marginRight=value * 3+'px';
});