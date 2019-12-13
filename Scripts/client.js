console.log('JS LOADED');

$(document).ready(readyNow);

function readyNow() {
    console.log('JQUERY READY');
    $('#addEmployeeButton').on('click', addEmployee);
    $('#employeeList').on('click', '.deleteButton', deleteEmployee);
}


let employeeListArray = [];

function addEmployee() {
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNum = Number($('#idNumIn').val());
    let jobTitle = $('#jobTitleIn').val();
    let annualSalary = Number($('#annualSalaryIn').val());
    
    console.log('Employee Add Button Clicked')
    if (
        firstName.length === 0 ||
        lastName.length === 0 ||
        idNum === 0 ||
        jobTitle.length === 0 ||
        annualSalary === 0) {
        alert('Some Information is missing, please try again.')
    } else {
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
    }
    console.log(firstName, lastName, idNum, jobTitle, annualSalary);
    makeEmployeeArray(firstName, lastName, idNum, jobTitle, annualSalary);
    showSalary();

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

function makeEmployeeArray(fname, lname, inum, jtitle, asalary)  {
    const oneEmployee = {
    firstname: fname,
    lastname: lname,
    IDnum: inum,
    jobtitle: jtitle ,
    annualSalary: asalary
    };
    employeeListArray.push(oneEmployee);
    console.log(employeeListArray);
}
function showSalary() {
    let totalSalary = 0;
    for (let i =0; i < employeeListArray.length; i++) {
        totalSalary +=employeeListArray[i].annualSalary;
    } let counter = $( '#monthlySalaryOut');
    counter.empty();
    let monthlySalary = Math.round(totalSalary / 12);
    if (monthlySalary > 20000) {
    counter.append(`<h4 class="negative">Monthly Salary: $${monthlySalary}</h4>`)
}   else {
    counter.append(`<h4 class="positive">Monthly Salary: $${monthlySalary}</h4>`)
}
}