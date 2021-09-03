import {UserAge} from './../src/userAge';

describe ('UserAge', () => {
  let user;
  beforeEach(() => {
    user = new UserAge("Mario", 40);
  });

  test('should create a new user object using the UserAge constructor', () => {
    expect(user.name).toEqual("Mario");
    expect(user.earth).toEqual(40);
    expect(user.mercury).toEqual(0);
    expect(user.venus).toEqual(0);
    expect(user.mars).toEqual(0);
    expect(user.jupiter).toEqual(0);
  });
  test('should add the calculated mercury age to user.mercury', () => {
    user.mercuryAge();
    expect(user.mercury).toBeCloseTo(9.6);
  });
  test('should add the calculated venus age to user.venus', () => {
    user.venusAge();
    expect(user.venus).toBeCloseTo(24.8);
  });
  test('should add the calculated mars age to user.mars', () => {
    user.marsAge();
    expect(user.mars).toBeCloseTo(75.2);
  });
})