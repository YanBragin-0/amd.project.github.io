


  function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("active");
  }
  /*function info_about_html(){
    let _p_count = document.querySelectorAll("p").length; 
    let _h2_count = document.querySelectorAll("h2").length;
    // можно зафаршмачится и писать через for(int i = 0;i < array_html.length - 2;++i) if(array_html[i] == < && array_html[i+1] == p && array_html[i+2] == >) 

    let body_bgColor = getComputedStyle(document.body).backgroundColor;
    let _h1 = document.querySelector("h1");
    let _h1_style = getComputedStyle(_h1);
    console.log(`Кол-во <p>: ${_p_count}\n`, `Кол-во <h2>: ${_h2_count}\n`,`Цвет body: ${body_bgColor}\n`,`font-size h1: ${_h1_style.fontSize}`);
  }
  function change_bgColor_element(){
    let elements = document.querySelectorAll('*');
    elements.forEach(el => {
        const el_color = el.style.backgroundColor;
        el.addEventListener(`mouseenter`,event => event.target.style.backgroundColor = 'red');
        el.addEventListener(`mouseleave`,event => event.target.style.backgroundColor = el_color);
    });
}
info_about_html();
change_bgColor_element();
*/
let imagesUrl = ["images/A.png",
                  "images/M.png",
                  "images/D.png"
                  ];


let cont = document.getElementById("left");
const fragment = document.createDocumentFragment();
let i = 0;
let timer = setInterval(()=>{
  if(i == imagesUrl.length-1){
    clearInterval(timer);
  }
  let img = document.createElement("img");
  img.style.marginLeft = "100px";
  img.src = imagesUrl[i];
  fragment.appendChild(img);
  cont.appendChild(fragment);
  ++i;
  
},1000);


/*
function showImgs(arr){
  const fragment = document.createDocumentFragment();
  arr.forEach(el=>{
    let img = document.createElement("img");
    img.style.marginLeft = "100px"
    img.src = el;
    fragment.appendChild(img);
  })
  cont.appendChild(fragment);
}
*/