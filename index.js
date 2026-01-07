// Step 0: Require datejs at the top
require('datejs');

// Step 1-7: Define combineUsers function
function combineUsers(...args) {
  // Step 2: Initialize the return object
  const combinedObject = { users: [] };

  // Step 3 & 4: Loop through args and merge arrays
  for (const arr of args) {
    if (Array.isArray(arr)) {
      combinedObject.users.push(...arr); // merge arrays
    }
  }

  // Step 5: Get today's date using datejs
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  // Step 7: Return object
  return combinedObject;
}

// Step 8: Export the function
module.exports = combineUsers;

