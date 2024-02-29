import * as company from './another-file';

const emp = company.getEmployee();
console.log(emp); // 👉️ {id: 3, salary: 300}

const dev = company.getDeveloper();
console.log(dev); // 👉️ {name: 'Bobby Hadz'}

console.log(company.department); // 👉️ "front-end"
