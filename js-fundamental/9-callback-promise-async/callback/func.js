const {
  users,
  roles,
  ONE_SECOND,
} = require('../data');

function getUserData(callback) {
  setTimeout(() => {
    callback(users);
  }, ONE_SECOND);
}

function getRoleByUserList(users, callback) {
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
  setTimeout(() => {
    callback(userWithRole);
  }, ONE_SECOND);
}

module.exports = {
  getUserData,
  getRoleByUserList
};
