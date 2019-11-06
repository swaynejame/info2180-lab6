function avengerSearch(){
  
  function createButton() {
    //Create button
    var button = document.createElement("BUTTON");
    //Set button text to search
    button.innerHTML = "Search";
    //Append to body
    document.body.appendChild(button);
    //Add event listener
    button.addEventListener ("click", function() {
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
  createButton();
}
window.onload=avengerSearch;
