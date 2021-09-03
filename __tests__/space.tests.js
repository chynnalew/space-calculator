import {UserAge, Life} from './../src/userAge';

describe ('UserAge', () => {
  let user;
  beforeEach(() => {
    user = new UserAge("Mario", 40, 78.56);
  });

  test('should create a new user object using the UserAge constructor', () => {
    expect(user.name).toEqual("Mario");
    expect(user.earth).toEqual(40);
    expect(user.earthExp).toEqual(78.56)
  });
  test('should add the calculated mercury age to user.mercury', () => {
    expect(user.mercury).toBeCloseTo(166.66, 1);
  });
  test('should add the calculated venus age to user.venus', () => {
    expect(user.venus).toBeCloseTo(64.51, 1);
  });
  test('should add the calculated mars age to user.mars', () => {
    expect(user.mars).toBeCloseTo(21.27, 1);
  });
  test('should add the calculated jupiter age to user.jupiter', () => {
    expect(user.jupiter).toBeCloseTo(3.37, 1);
  });
  test('should calculate life expectancy on mercury and add it to user.mercuryExp', () => {
    expect(user.mercuryExp).toBeCloseTo(327.33, 1);
  });
});
