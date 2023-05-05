const { getUserData, getRoleByUserList } = require('./func');

function main() {
  console.time('process');
  getUserData()
    .then((users) => getRoleByUserList(users))
    .then((usersWithRole) => {
      console.log(usersWithRole);
      console.timeEnd('process');
    });
}

main();
