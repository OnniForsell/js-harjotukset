'use strict';

const names = ['Frank', 'Scott', 'Jasmine', 'Don'];

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

for (let name of names){
    console.log(name);
}

const student = {
    firstName: 'Greg',
    lastName: 'Focker',
    studentId: '81283823',
    phoneNumber: '123 456 789',
}

student.address = "Schoolroad 7"
delete student.phoneNumber
console.log(student)

function foo(t){
    for (let i = 0; i < t.length; i++){
        t[i] = t[i] * 2;
    }
}

let taulukko = [0, 10, 20]
foo = taulukko
