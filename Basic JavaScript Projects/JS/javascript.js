function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Firstname must be filled out");
      return false;
    }
    let y = document.forms["myForm"]["lname"].value;
    if (y == "") {
      alert("Lastname must be filled out");
      return false;
    }
  }