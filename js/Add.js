function AddRowFunction() {
    var table = document.getElementById("table1");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var yourSelect = document.getElementById( "selectBox" );
    
        
    cell1.innerHTML = yourSelect.options[ yourSelect.selectedIndex ].value;
    cell2.innerHTML = "[Value]";
    cell3.innerHTML = "[Change]";
    cell4.innerHTML = '<input type="button" value="X" onclick="deleteRow(this)">';
}

