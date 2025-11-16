/**
 * donation controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::donation.donation', () => ({

    async getAllDonations(ctx){
      const donations = await strapi.documents('api::donation.donation').findMany({
        populate: {
          donor: true,
          ong_recipient: true,
          item_doado: {
            populate: {
              tipo_alimento: true,
            },
          },
        },
      });
      return ctx.body = donations;
    },
    }));
  
