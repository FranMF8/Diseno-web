var availableRow = 1;

function insertRow()
{
var table = document.getElementById("myTable");
  {
  var row = table.insertRow(availableRow);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "cell 1";
  cell2.innerHTML = "cell 2"; 
  }
  availableRow++;
}

function deleteRow()
{     
    if(availableRow > 1)
    {
        availableRow--;        
        document.getElementById("myTable").deleteRow(availableRow);
    }
}