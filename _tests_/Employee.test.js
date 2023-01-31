const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('getName', () => {
    it(`should return an employee's name`, () => {
      const testName = 'John';            
      const testEmployee = new Employee(testName, 1, 'john@fakeemail.com');

      expect(testEmployee.getName()).toEqual(testName);
    });
  });
    
  describe('getId', () => {
    it(`should return an employee's ID number`, () => {
      const testId = 1;
      const testEmployee = new Employee('John', testId, 'john@fakeemail.com');

      expect(testEmployee.getId()).toEqual(testId);
    });
  });

  describe('getEmail', () => {
    it(`should return an employee's email`, () => {
      const testEmail = 'john@fakeemail.com';
      const testEmployee = new Employee('John', 1, testEmail);

      expect(testEmployee.getEmail()).toEqual(testEmail);
    });
  });

  describe('getRole', () => {
    it(`should return 'Employee' as the role`, () => {
      const roleValue = 'Employee';
      const testEmployee = new Employee('John', 1, 'john@fakeemail.com');

      expect(testEmployee.getRole()).toEqual(roleValue);
    });
  });
})