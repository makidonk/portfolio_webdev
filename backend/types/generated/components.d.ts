import type { Schema, Struct } from '@strapi/strapi';

export interface MediaMediaList extends Struct.ComponentSchema {
  collectionName: 'components_media_media_lists';
  info: {
    displayName: 'Media list';
    icon: 'landscape';
  };
  attributes: {
    date: Schema.Attribute.Date;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    notes: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'media.media-list': MediaMediaList;
    }
  }
}
