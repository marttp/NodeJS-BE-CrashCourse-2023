const { users, roles, ONE_SECOND } = require('../data');
const sleep = require('node:util').promisify(setTimeout); 

async function getUserData() {
  await sleep(ONE_SECOND);
  return users;
}

async function getRoleByUserList(users) {
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
  await sleep(ONE_SECOND);
  return userWithRole;
}

module.exports = {
  getUserData,
  getRoleByUserList,
};
