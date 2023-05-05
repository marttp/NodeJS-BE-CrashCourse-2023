const { getUserData, getRoleByUserList } = require('./func');

async function main() {
  console.time('process');
  const users = await getUserData();
  const usersWithRole = await getRoleByUserList(users);
  console.log(usersWithRole);
  console.timeEnd('process');
}

main();

// (async () => {
//   await main();
// })();
