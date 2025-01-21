import type { Schema, Struct } from '@strapi/strapi';

export interface ArrayAutores extends Struct.ComponentSchema {
  collectionName: 'components_array_autores';
  info: {
    description: '';
    displayName: 'autores';
    icon: 'message';
  };
  attributes: {
    nome: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ArrayEmail extends Struct.ComponentSchema {
  collectionName: 'components_array_emails';
  info: {
    displayName: 'Email';
    icon: 'message';
  };
  attributes: {
    email: Schema.Attribute.Email;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'array.autores': ArrayAutores;
      'array.email': ArrayEmail;
    }
  }
}
