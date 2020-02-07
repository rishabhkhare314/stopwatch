function add() {
    fvalue = document.getElementById('first');
    lvalue = document.getElementById('last');
    console.log(fvalue)
    console.log(fvalue)
    table.AddRow(first.fvalue,last.lvalue);
    first.value="";
    last.value="";

}
function addRow() {
        var row = document.getElementById("myRow");
        var x = row.insertCell(0);
        x.innerHTML = "New cell";
}




