const { users, roles, ONE_SECOND } = require('../data');

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, ONE_SECOND);
  });
}

function getRoleByUserList(users) {
  const roleMap = new Map();
  roles.forEach((r) => {
    roleMap.set(r.id, r);
  });
  const userWithRole = users.map((user) => {
    return {
      ...user,
      role: roleMap.get(user.roleId),
    };
  });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userWithRole);
    }, ONE_SECOND);
  });
}

module.exports = {
  getUserData,
  getRoleByUserList,
};
