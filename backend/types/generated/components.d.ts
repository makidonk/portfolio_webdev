import type { Schema, Struct } from '@strapi/strapi';

export interface CardsClimbCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_climb_cards';
  info: {
    displayName: 'Climb Card';
    icon: 'stack';
  };
  attributes: {
    color: Schema.Attribute.String;
  };
}

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
      'cards.climb-card': CardsClimbCard;
      'media.media-list': MediaMediaList;
    }
  }
}
