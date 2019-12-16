console.log('JS LOADED');

$(document).ready(readyNow);
// This function records the click events on the page and calls the corresponding functions. When add employee is clicked, one function runs. Two functions run on the delete button click.
function readyNow() {
    console.log('JQUERY READY');
    // this line runs the addEmplyoyee function when the button is clicked;
    $('#addEmployeeButton').on('click', addEmployee);
    // this function deletes an employee from the HTML;
    $('#employeeList').on('click', '.deleteButton', deleteEmployee);
    // This function removes an employee from the employee array, updating the total monthly salary
    $('#employeeList').on('click', '.deleteButton', removeEmployeeFromList);
}

// Used to add salaries and delete employees.
let employeeListArray = [];

// Appends employees to the DOM
function addEmployee() {
    // Get values from the user
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNum = Number($('#idNumIn').val());
    let jobTitle = $('#jobTitleIn').val();
    let annualSalary = Number($('#annualSalaryIn').val());
    // If fields are missing the DOM will not allow the user to add an employee
    if (
        firstName.length === 0 ||
        lastName.length === 0 ||
        idNum === 0 ||
        jobTitle.length === 0 ||
        annualSalary === 0) {
        alert('Some Information is missing, please try again.')
    } else {
        // Adds the employee to the table 
        $('#employeeList').append(
            `
            <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td class="employeeIDNUMBER">${idNum}</td>
                <td>${jobTitle}</td>
                <td>${annualSalary}</td>
                <td><button class="deleteButton btn btn-danger">DELETE</button</td>
            </tr>
            `
        )
    }

    makeEmployeeArray(firstName, lastName, idNum, jobTitle, annualSalary);
    showSalary(annualSalary);
    // empties the input fields
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}
// This function pushes a new employee into the array for later use.
function makeEmployeeArray(fname, lname, inum, jtitle, asalary) {
    const oneEmployee =
    {
        firstname: fname,
        lastname: lname,
        IDnum: inum,
        jobtitle: jtitle,
        annualSalary: asalary
    };
    employeeListArray.push(oneEmployee);
}
// Deletes the table row of the employee delete button clicked
function deleteEmployee() {
    $(this).closest('tr').remove();
}
// this function removes the employee from the array, which then updates the salary total displayed on the DOM
function removeEmployeeFromList() {
    console.log('Ready to remove employee from list');
    let employeeIdGet = Number($(this).closest('tr').find('.employeeIDNUMBER').text());
    for (var i = 0; i < employeeListArray.length; i++) {
        if (employeeListArray[i].IDnum === employeeIdGet) {
            console.log('ready to delete');
            employeeListArray.splice(i, 1);
        }
    }
    console.log(employeeListArray);
    showSalary();
}

// This function loops through the employee array and adds up the annual salary data. If the total is greater than 20,000, the background turns red.
function showSalary() {
    let totalSalary = 0;
    for (let i = 0; i < employeeListArray.length; i++) {
        totalSalary += employeeListArray[i].annualSalary;
    } let counter = $('#monthlySalaryOut');
    counter.empty();
    let monthlySalary = Math.round(totalSalary / 12);
    if (monthlySalary > 20000) {
        counter.append(`<h4 class="negative">Monthly Salary: $${monthlySalary}</h4>`)
    } else {
        counter.append(`<h4 class="positive">Monthly Salary: $${monthlySalary}</h4>`)
    }
}