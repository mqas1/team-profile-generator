const Intern  = require('../lib/Intern');

describe('Intern', () => {
  describe('getName', () => {
    it(`should return an intern's name`, () => {
      const testName = 'Zac';
      const testIntern = new Intern(testName, 3, 'zac@fakeemail.com', 'UNSW');

      expect(testIntern.getName()).toEqual(testName);
    });
  });
    
  describe('getId', () => {
    it(`should return an intern's ID number`, () => {
      const testId = 3;
      const testIntern = new Intern('Zac', testId, 'zac@fakeemail.com', 'UNSW');

      expect(testIntern.getId()).toEqual(testId);
    });
  });

  describe('getEmail', () => {
    it(`should return an intern's email`, () => {
      const testEmail = 'zac@fakeemail.com';
      const testIntern = new Intern('Zac', 3, testEmail, 'UNSW');

      expect(testIntern.getEmail()).toEqual(testEmail);
    });
  });
  
  describe('getSchool', () => {
    it(`should return an intern's school name`, () => {
      const testSchool = 'UNSW';
      const testIntern = new Intern('Zac', 3, 'zac@fakeemail.com', testSchool);

      expect(testIntern.getSchool()).toEqual(testSchool);
    });
  });
    
  describe('getRole', () => {
    it(`should return 'Intern' as the role`, () => {
      const roleValue = 'Intern';
      const testIntern = new Intern('Zac', 3, 'zac@fakeemail.com', 'UNSW');

      expect(testIntern.getRole()).toEqual(roleValue);
    });
  });
})