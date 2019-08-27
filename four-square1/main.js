console.log("working!")
window.onload=function(){
  console.log("working!")
  var loading=document.getElementById("out")
  window.setTimeout(function(){
      loading.style.opacity=0
  },1500)
}
