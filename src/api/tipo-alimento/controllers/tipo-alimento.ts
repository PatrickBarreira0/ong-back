/**
 * tipo-alimento controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::tipo-alimento.tipo-alimento', () => ({

  async getAllTipoAlimentos(ctx){
    const tipoAlimentos = await strapi.documents('api::tipo-alimento.tipo-alimento').findMany();
    return ctx.body = tipoAlimentos;
  },
  }));

