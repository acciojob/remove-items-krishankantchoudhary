//your JS code here. If required.
window.onload = function() {
  // Get references to the dropdown and the button
  const selectElement = document.getElementById("colorSelect");
  const button = document.querySelector('input[type="button"]');

  // Add a click event listener to the button
  button.addEventListener("click", function() {
    // Get the selected index from the dropdown
    const selectedIndex = selectElement.selectedIndex;

    // If a valid option is selected, remove it
    if (selectedIndex !== -1) {
      selectElement.remove(selectedIndex);
    }
  });
};
