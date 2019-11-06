function avengerSearch(){
  
  function clickButton() {
    //Add event listener
    var button = document.querySelector("button");
    button.addEventListener("click", function() {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", "superheroes.php");
      xmlhttp.send();
      
      xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          alert(xmlhttp.responseText);
        }
      }
      
    });//End of create button
  }//End of avenger search
  clickButton();
}
window.onload=avengerSearch;
