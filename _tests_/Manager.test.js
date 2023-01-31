const Manager  = require('../lib/Manager');

describe('Manager', () => {
  describe('getName', () => {
    it(`should return a manager's name`, () => {
      const testName = 'Sarah';            
      const testManager = new Manager(testName, 1, 'sarah@fakeemail.com', 2);

      expect(testManager.getName()).toEqual(testName);
    });
  });
    
  describe('getId', () => {
    it(`should return a manager's ID number`, () => {
      const testId = 1;
      const testManager = new Manager('Sarah', testId, 'sarah@fakeemail.com', 2);

      expect(testManager.getId()).toEqual(testId);
    });
  });

  describe('getEmail', () => {
    it(`should return a manager's email`, () => {
      const testEmail = 'sarah@fakeemail.com';
      const testManager = new Manager('Sarah', 1, testEmail, 2);

      expect(testManager.getEmail()).toEqual(testEmail);
    });
  });
  
  describe('officeNumber', () => {
    it(`should return a manager's office number`, () => {
      const testOfficeNo = 2;            
      const testManager = new Manager('Lucy', 2, 'lucy@fakeemail.com', testOfficeNo);

      expect(testManager.officeNumber).toEqual(testOfficeNo);
    });
  });
    
  describe('getRole', () => {
    it(`should return 'Manager' as the role`, () => {
      const roleValue = 'Manager';
      const testManager = new Manager('Sarah', 1, 'sarah@fakeemail.com', 2);

      expect(testManager.getRole()).toEqual(roleValue);
    });
  });
})