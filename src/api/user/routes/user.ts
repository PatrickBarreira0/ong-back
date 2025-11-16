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
     
     {
      method: 'GET',
      path: '/user/ong/all',
      handler: 'user.getAllOngs',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
