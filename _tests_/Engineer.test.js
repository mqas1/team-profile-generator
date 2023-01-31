const Engineer  = require('../lib/Engineer');

describe('Engineer', () => {
  describe('getName', () => {
    it(`should return an engineer's name`, () => {
      const testName = 'Lucy';            
      const testEngineer = new Engineer(testName, 2, 'lucy@fakeemail.com', 'lucy_developer');

      expect(testEngineer.getName()).toEqual(testName);
    });
  });
    
  describe('getId', () => {
    it(`should return an engineers's ID number`, () => {
      const testId = 2;
      const testEngineer = new Engineer('Lucy', testId, 'lucy@fakeemail.com', 'lucy_developer');

      expect(testEngineer.getId()).toEqual(testId);
    });
  });

  describe('getEmail', () => {
    it(`should return an engineer's email`, () => {
      const testEmail = 'lucy@fakeemail.com';
      const testEngineer = new Engineer('Lucy', 2, testEmail, 'lucy_developer');

      expect(testEngineer.getEmail()).toEqual(testEmail);
    });
  });
  
  describe('getGithub', () => {
    it(`should return an engineer's GitHub account name`, () => {
      const testGithub = 'lucy_developer';            
      const testEngineer = new Engineer('Lucy', 2, 'lucy@fakeemail.com', testGithub);

      expect(testEngineer.getGithub()).toEqual(testGithub);
    });
  });
    
  describe('getRole', () => {
    it(`should return 'Engineer' as the role`, () => {
      const roleValue = 'Engineer';
      const testEngineer = new Engineer('Lucy', 2, 'lucy@fakeemail.com', 'lucy_developer');

      expect(testEngineer.getRole()).toEqual(roleValue);
    });
  });
})