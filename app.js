const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select   = dropdown.querySelector('.select');
    const caret    = dropdown.querySelector('.caret');
    const menu     = dropdown.querySelector('.menu');
    const options  = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach(option => {
            option.classList.remove('active');
        });
        option.classList.add('active');
    });
   });
});
 
const companyName        = document.getElementById('cn');
const employeeId         = document.getElementById('eid');
const employeeFirstName  = document.getElementById('efn');
const employeeSecondname = document.getElementById('esn');
const employeeAge        = document.getElementById('ea');
const employeeSalary     = document.getElementById('es');
const createCompany      = document.getElementById('cc');
const createEmployee     = document.getElementById('ce');

const worker = [];

function Employee (employeeId,employeeFirstName,employeeSecondname,employeeAge,employeeSalary){
    this.employeeId = +employeeId;
    this.employeeFirstName = employeeFirstName;
    this.employeeSecondname = employeeSecondname;
    this.employeeAge = +employeeAge;
    this.employeeSalary = +employeeSalary;
    this.getFullName = function() {
        return `${this.employeeFirstName} ${this.employeeSecondname}`
    }
    this.printEmployee = function() {
        console.log(`ID: ${this.employeeId} Name: ${this.getFullName} age: ${this.employeeAge} salary: ${this.employeeSalary}`);
    }
}

function Company(companyName){
    this.companyName = companyName; 
    }


function cEmp(){
    console.clear();
    const eID     = +employeeId.value;
    const eFirstN =  employeeFirstName.value;
    const eLastN  =  employeeSecondname.value;
    const eAge    = +employeeAge.value;
    const eSalary = +employeeSalary.value;
    const newEmployee = new Employee(eID,eFirstN,eLastN,eAge,eSalary);
    worker.push(newEmployee);
    employeeId.value         = '';
    employeeFirstName.value  = '';
    employeeSecondname.value = '';
    employeeAge.value        = '';
    employeeSalary.value     = '';
    printArr();


}

function printArr() {
    for(let i = 0; i < worker.length; i++){
        console.log(worker[i]);
    }
}


function choseCompany(){
    console.clear();
    const cName = companyName.value;
    const newCompany = new Company(cName);
    printCompany(newCompany);
    companyName.value = '';
}

cc.onclick = choseCompany;
ce.onclick = cEmp;


function printCompany(){
    let name = document.getElementById('cn').value,
    listNode = document.getElementById('menu'),
    li       = document.createElement("LI"),
    txtNode  = document.createTextNode(name);
    
    li.appendChild(txtNode);
    listNode.appendChild(li);
    console.log(listNode);
}





// this.findEmplyee = function(id){
//     for(let i = 0; i < this.employees.length; i++){
//         if(id === this.employees[i].id){
//             return this.employees[i];
//         }
//     }
// }