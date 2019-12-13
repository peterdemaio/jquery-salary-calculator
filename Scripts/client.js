console.log('JS LOADED');

$(document).ready(readyNow);

function readyNow() {
    console.log('JQUERY READY');
    $('#addEmployeeButton').on('click', addEmployee);
    $('#employeeList').on('click', '.deleteButton', deleteEmployee);
}

function addEmployee(){
    console.log('Employee Add Button Clicked')
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNum = $('#idNumIn').val();
    let jobTitle = $('#jobTitleIn').val();
    let annualSalary = $('#annualSalaryIn').val();
    
    annualSalary = Number(annualSalary);
    console.log(firstName, lastName, idNum, jobTitle, annualSalary);

    $('#employeeList').append(
        `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNum}</td>
            <td>${jobTitle}</td>
            <td>${annualSalary}</td>
            <td><button class="deleteButton btn btn-danger">DELETE</button</td>
        </tr>
        `
    )
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}

function deleteEmployee() {
    console.log('Delete Employee Button Clicked')
    $(this).closest('tr').remove();
}