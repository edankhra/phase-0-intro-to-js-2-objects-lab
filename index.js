let employee = {
    name: "Bob patel",
    streetAddress: "90,arial st,toronto"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newobj = {...employee};
    newobj[key] = value;
    return newobj;
    return { ...employee, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

  
  
  