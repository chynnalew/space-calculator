import {UserAge} from './../src/userAge';

describe ('UserAge', () => {
  let user;
  beforeEach(() => {
    user = new UserAge("Mario");
  });

  test('should create a new user object using the UserAge constructor', () => {
    expect(user.name).toEqual("Mario");
  });
})