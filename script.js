function submitForm() {
    // Find a <table> element with id="results":
    var table = document.getElementById("results");

    // Find a form with id="foodtracker"
    var form = document.getElementById("foodtracker");

    // Call Input Variables
    var foodname = document.getElementsByName("foodname")[0].value;
    var purchaseDate = document.getElementsByName("purchase")[0].value;
    var expiration = document.getElementsByName("expiration")[0].value;
    var description = document.getElementsByName("description")[0].value;

    // Creates an empty row:
    var row = table.insertRow(1);

    //Adds new cells starting with 0 for the first cell:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    // Add the text into the cells:
    cell1.innerHTML = foodname;
    cell2.innerHTML = purchaseDate;
    cell3.innerHTML = expiration;
    cell4.innerHTML = description;

    // Clear User Input in form:
    document.getElementById("foodtracker").reset();
}