function bubbling(num) {
  for (i = 0; i < num; i++) {
    var screen = document.getElementById("screen1"),
        element = document.createElement('div')
        element.classList.add("bubble")
        random1=Math.random()*100
        random2=Math.random()*100
        element.style.top=random1+"%"
        element.style.left=random2+"%"
        element.style.animationName="bubbling"
        element.style.animationDelay=i*100+"ms"
        screen.appendChild(element);
  }
  txt="未確認で進行形"
  size=100/txt.length
  title_field = document.createElement('div')
  title_field.style.top="calc(50% - "+size+"vw / 2)";
  for(j=0;j<txt.length;j++){
    title_field.classList.add("title_field")
    element = document.createElement('div')
    element.classList.add("title_bubble")
    element.innerHTML="<p>"+txt[j]+"</p>";

    element.style.width=size*0.9+"vw"
    element.style.height=size*0.9+"vw"
    element.style.margin=size*0.05+"vw"
    element.style.fontSize=size*0.6+"vw"
    random3=Math.random()*5
    random4=Math.random()*2
    element.style.animation="title_bubbling 2s ease "+(num+j+3)*100+"ms 1 normal forwards,up "+(2+random4)+"s ease-in "+(random3+num+j+20)*100+"ms 1 normal forwards"
    screen.appendChild(title_field).appendChild(element);
  }
  setTimeout(function(){
    document.body.removeChild(screen)
    second_screen()
  },(num+j+25)*100+4000)
}
function second_screen(){
  cur1=document.getElementById("curtain1_1")
  cur1.style.transform="translateY(100%)"
  cur1.style.borderRadius="0"
  cur2=document.getElementById("curtain1_2")
  cur2.style.transform="translateX(-100%)"
  cur2.style.borderRadius="0"
  cur3=document.getElementById("curtain1_3")
  cur3.style.transform="translateY(-100%)"
  cur3.style.borderRadius="0"
  cur4=document.getElementById("curtain1_4")
  cur4.style.transform="translateX(100%)"
  cur4.style.borderRadius="0"
  setTimeout(function(){
    third_screen()
  },2500)
}
function third_screen(){
  bars=document.getElementsByClassName("bar")
  for(m=0;m<bars.length;m++){
    bars[m].style.transform="translateX(100%)"
    bars[m].style.borderRadius="0"
  }

  charas=document.getElementsByClassName("chara_img")
  for(n=0;n<charas.length;n++){
    charas[n].style.animationName="chara_move"
  }
  cur3_1=document.getElementById("curtain3_1")
  cur3_1.style.transform="translateY(100%)"
  cur3_1.style.borderRadius="0"

}
bubbling(20)
