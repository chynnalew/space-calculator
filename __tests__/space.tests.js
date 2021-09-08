import {UserAge, UserLife} from './../src/userAge';

describe ('UserAge', () => {
  let user;
  beforeEach(() => {
    user = new UserAge("Mario", 40);
  });

  test('should create a new user object using the UserAge constructor', () => {
    expect(user.name).toEqual("Mario");
    expect(user.earth).toEqual(40);
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
});

describe('UserLife', () => {
  let user;
  let user2;
  beforeEach(() => {
    user = new UserLife("Mario", 40, 78.56);
    user2 = new UserLife("Boo", 100, 50);
  });
  test('should calculate life expectancy on all planets', () => {
    expect(user.mercuryExp).toBeCloseTo(327.33, 1);
    expect(user.venusExp).toBeCloseTo(126.71, 1);
    expect(user.marsExp).toBeCloseTo(41.78, 1);
    expect(user.jupiterExp).toBeCloseTo(6.62, 1);
  });
  test('should calculate how many years the user has left on mercury', () => {
    expect(user.mercuryTime()).toBeCloseTo(160.67, 1);
  });
  test('should calculate how many years the user has left on venus', () => {
    expect(user.venusTime()).toBeCloseTo(62.2, 1);
  });
  test('should calculate how many years the user has left on mars', () => {
    expect(user.marsTime()).toBeCloseTo(20.51, 1);
  });
  test('should calculate how many years the user has left on jupiter', () => {
    expect(user.jupiterTime()).toBeCloseTo(3.25, 1);
  });
  test('should calculate how many years the user has left on earth', () => {
    expect(user.earthTime()).toBeCloseTo(38.56, 1);
  });
  test('should return N/A if the earth years left is less than 0', () => {
    
    expect(user2.earthTime()).toEqual("N/A");
  });
  test('should return N/A if the mercury years left is less than 0', () => {
    expect(user2.mercuryTime()).toEqual("N/A");
  });
  test('should return N/A if the venus years left is less than 0', () => {
    expect(user2.venusTime()).toEqual("N/A");
  });
  test('should return N/A if the mars years left is less than 0', () => {
    expect(user2.marsTime()).toEqual("N/A");
  });
  test('should return N/A if the jupiter years left is less than 0', () => {
    expect(user2.jupiterTime()).toEqual("N/A");
  });
})
