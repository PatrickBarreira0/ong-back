export default {
    routes: [
       {
        method: 'GET',
        path: '/TipoAlimento/all',
        handler: 'tipo-alimento.getAllTipoAlimentos',
        config: {
          policies: [],
          middlewares: [],
        },
       },     
    ],
  };
  