/*
Write a function selectFields(obj, fieldName) that takes in an object obj and a string fieldName. 
The function should return a new object that only contains the field specified by fieldName
*/

const data = { name: "John", age: 30, country: "USA" };

function selectFields(data, fieldName) {
  for (const element in data) {
    if (element === fieldName) {
      console.log({ [element]: data[element] });
      return { element };
    }
    console.log({});
    return {};
  }
} // { name: "John" }

selectFields(data, "name");

/*
Given two strings firstName and lastName, and a boolean isAdmin, write a function createUser that constructs an object using enhanced object literals. The object should have methods to get the full name and check the admin status.

function createUser(firstName, lastName, isAdmin) {
  return {
    firstName,
    lastName,
    isAdmin,

    fullName() {
      //   console.log(`${firstName} ${lastName}`);
      return `${firstName} ${lastName}`;
    },

    isAdminStatus() {
      return this.isAdmin
        ? `${this.fullName()} is an admin.`
        : `${this.fullName()} is not an admin.`;
    },
  };
}

const lee = createUser("Lee", "Palmer", false);
lee.fullName();
lee.isAdminStatus();

const user = createUser("Jane", "Doe", true);
user.fullName(); // "Jane Doe"
user.isAdminStatus(); // true
*/

/*
Write a function setFlags that takes in three boolean parameters: isActive, isOnline, isAdmin. The function should return an object that only contains the flags (properties) that are true. Use enhanced object literals in your answer.
*/

function setFlags(isActive, isOnline, isAdmin) {
  let str = {};

  if (isActive) {
    str.isActive = isActive;
  }
  if (isOnline) {
    str.isOnline = isOnline;
  }
  if (isAdmin) {
    str.isAdmin = isAdmin;
  }
  return str;
}

function setFlags2(isActive, isOnline, isAdmin) {
  return {
    ...(isActive && { isActive }),
    ...(isOnline && { isOnline }),
    ...(isAdmin && { isAdmin }),
  };
}

setFlags(true, false, true); // { isActive: true, isAdmin: true }
