const { getUserData, getRoleByUserList } = require('./func');

function main() {
  console.time('process');
  getUserData((users) => {
    // console.log(users);
    getRoleByUserList(users, (usersWithRole) => {
      console.log(usersWithRole);
      console.timeEnd('process');
      // If we still keep callback -> Callback Hell
    });
  });
}

main();
