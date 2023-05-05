const ONE_SECOND = 1 * 1000;

const users = [
  {
    id: 1,
    name: 'Peter',
    roleId: 'af658a1xc35xz1',
  },
  {
    id: 2,
    name: 'Mark',
    roleId: 'gh3j81vb5vc1b3',
  },
];

const roles = [
  {
    id: 'af658a1xc35xz1',
    name: 'Admin',
  },
  {
    id: 'gh3j81vb5vc1b3',
    name: 'Manager',
  },
];

const usersStatus = [
  {
    userId: 1,
    status: 'Active',
  },
  {
    userId: 2,
    status: 'Banned',
  },
];

const rolePermissions = [
  {
    roleId: 'af658a1xc35xz1',
    permissionsList: ['read', 'write'],
  },
  {
    roleId: 'gh3j81vb5vc1b3',
    permissionsList: ['read', 'write'],
  },
];

module.exports = {
  users,
  roles,
  usersStatus,
  rolePermissions,
  ONE_SECOND
};
