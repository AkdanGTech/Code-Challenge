function netPay(){
    const taxRate = 0.3;
    const nhifRate = 0.02;
    const nssfRate = 0.01;

    //we let users input their basic salary and allowances

    const basicSalary = parseFloat(prompt("Enter your basic salary: "));
    const allowances = parseFloat(prompt("Enter your total allowances: "));

    //formular for calculating gross salary
    const grossSalary = basicSalary + allowances;

    //to get deductions 

    const nssfDeduction = Math.min(grossSalary * nssfRate);
    const nhifDeduction = Math.min(grossSalary * nhifRate);
    const paye = Math.max(grossSalary - nhifDeduction - nssfDeduction) * taxRate

    //calculating the net salary
    const netSalary = grossSalary - nhifDeduction - nssfDeduction - paye;

    //print to check the output

    //console.log(window.alert(`Basic salary is: ${basicSalary}`));
    //console.log(window.alert(`Total allowances is: ${allowances}`));

    console.log(window.alert(`NHIF deduction is: ${nhifDeduction}`));
    console.log(window.alert(`NSSF deduction: ${nssfDeduction}`));
    console.log(window.alert(`PAYE: ${paye}`));
    console.log(window.alert(`The gross salary is: ${grossSalary}`));
    console.log(window.alert(`The net pay: ${netSalary}`)); 
}
netPay();
