const combineUsers = require('../index'); // path to your function
require('datejs');

describe('combineUsers function', () => {
  test('should return an object with users and merge_date', () => {
    const combine = combineUsers(
      ["Jim3","Pam5","Dwight77"],
      ["Michael6","Eleanor22","Chidi202"],
      ["Jack_jack","Julia_Oreo", "Bill_bore"]
    );

    expect(typeof combine).toBe('object');
    expect(combine).toHaveProperty('users');
    expect(combine).toHaveProperty('merge_date');
  });

  test('should merge all given arrays correctly', () => {
    const combine = combineUsers(
      ["Jim3","Pam5","Dwight77"],
      ["Michael6","Eleanor22","Chidi202"],
      ["Jack_jack","Julia_Oreo", "Bill_bore"]
    );
    const combine2 = combineUsers(["test1"], ["test2"]);
    const combine3 = combineUsers([]);

    expect(combine.users).toStrictEqual([
      "Jim3","Pam5","Dwight77",
      "Michael6","Eleanor22","Chidi202",
      "Jack_jack","Julia_Oreo", "Bill_bore"
    ]);

    expect(combine2.users).toStrictEqual(["test1","test2"]);
    expect(combine3.users).toStrictEqual([]);
  });

  test('should contain today\'s date', () => {
    const combine = combineUsers(["Jim3"], ["Pam5"]);
    const expectedDate = Date.today().toString("M/d/yyyy");

    expect(combine.merge_date).toBe(expectedDate);
  });
});

  