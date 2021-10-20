const employee = {

}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value

    return employee
}

function deleteFromEmployeeByKey(employee, key) {
        delete employee.key
}