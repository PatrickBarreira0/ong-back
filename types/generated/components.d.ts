import type { Schema, Struct } from '@strapi/strapi';

export interface DoacoesItemDoado extends Struct.ComponentSchema {
  collectionName: 'components_doacoes_item_doados';
  info: {
    displayName: 'ItemDoado';
  };
  attributes: {
    quantidade: Schema.Attribute.Integer & Schema.Attribute.Required;
    tipo_alimento: Schema.Attribute.Relation<
      'oneToOne',
      'api::tipo-alimento.tipo-alimento'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'doacoes.item-doado': DoacoesItemDoado;
    }
  }
}
