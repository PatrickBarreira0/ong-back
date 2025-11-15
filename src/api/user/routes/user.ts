export default {
  routes: [
     {
      method: 'PUT',
      path: '/user/role/:roleParams',
      handler: 'user.updateRole',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
