function avengerSearch(){
  
  function clickButton() {
    var button = document.getElementById("searchButton");
    var show = document.getElementById("result");
    //Add event listener
    button.addEventListener("click", function() {
      var xmlhttp = new XMLHttpRequest();
      var sBar = document.getElementById("searchBar");
      var input  = sBar.value;
      sBar.value="";
  
      xmlhttp.open("GET", "superheroes.php?query="+input);
      xmlhttp.send();
      
      xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          show.innerHTML=this.responseText;
        }
      }
    });//End of create button
  }//End of avenger search
  clickButton();
}
window.onload=avengerSearch;
