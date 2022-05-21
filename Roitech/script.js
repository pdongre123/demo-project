var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
// Read operation using this function
function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["age"] = document.getElementById("age").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["gender"] = document.getElementById("gender").value;
    return formData;
}

// Validation operation
function insertNewRecord(data){
    var table = document.getElementById("detailList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.fullName;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.age;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.dob;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.gender;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm(){
    document.getElementById('fullName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('gender').value = '';
    selectedRow = null;
}