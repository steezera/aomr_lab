var changedY = 100;

//상단바 색 변화 구현
window.addEventListener('scroll',()=>{
    let changed_color_navbar = document.querySelector('.upperbox');

    let cssText = null;
    let changing_text_color = null;
    let each_rgb = 255 * ( 1 - window.scrollY/changedY )* ( 1 - window.scrollY/changedY )* ( 1 - window.scrollY/changedY );
  if(window.scrollY < changedY){
      changing_text_color = "color:rgb("+each_rgb+","+each_rgb+","+each_rgb+");"
      cssText = "background-color:rgba(255,255,255," + (window.scrollY/changedY)*(window.scrollY/changedY) + ");" + changing_text_color;
      changed_color_navbar.style.cssText = cssText;
  }else{
    changed_color_navbar.style.cssText = "background-color:rgba(255,255,255,1);color:black";
    }
});

//상단바 링크 색 변화, 링크 연결

//eventListener 이용
var menuitems = document.querySelectorAll('.menuitem');

for(var i=0;i<menuitems.length;i++){
    let item = menuitems[i];
    item.addEventListener('mouseover',()=>{
        item.style.cssText = "color:gray";
    });
    item.addEventListener('mouseout',()=>{
        let each_rgb = 255 * ( 1 - window.scrollY/changedY )* ( 1 - window.scrollY/changedY )* ( 1 - window.scrollY/changedY );
        let changing_text_color = "color:rgb("+each_rgb+","+each_rgb+","+each_rgb+");";
        item.style.cssText = "color:"+changing_text_color;
    });

    // item.onclick=`location.href='./${item.innerHTML}.html'`;
    // item.href=`./${item.innerHTML}.html`;
    item.addEventListener('click',()=>{
        location.href=`./${item.innerHTML}.html`;
    });
}
// for(var i=0;i<menuitems.length;i++){
//     var element = menuitems[i];
//     element.addEventListener('mouseover',()=>{
//         element.style.cssText = "color:gray";
//     });
//이게 왜 오류가 나지
// }

//상단바 링크 연결

