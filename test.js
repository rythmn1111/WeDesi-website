function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    var y=document.getElementById("vis");
    if(y.style.display === "inline" ){
      y.style.display="none"
    }
    else{
      y.style.display="inline"
    }
  }