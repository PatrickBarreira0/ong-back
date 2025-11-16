export default {
    routes: [
       {
        method: 'GET',
        path: '/donation/all',
        handler: 'donation.getAllDonations',
        config: {
          policies: [],
          middlewares: [],
        },
       },     
    ],
  };
  