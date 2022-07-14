// add the function to display the gallons entered in the gallons input to the display-gallons when the display button is clicked
function displayGallons() {
  var gallons = document.getElementById("Gallons").value;
  var displayGallons = document.getElementById("display-gallons");
  displayGallons.innerHTML = "Quantity Entered: " + gallons + " gallons";
}
