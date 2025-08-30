import type { Schema, Struct } from '@strapi/strapi';

export interface SharedLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    href: Schema.Attribute.Text;
    label: Schema.Attribute.Text;
  };
}

export interface SharedLogoAndLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_and_links';
  info: {
    displayName: 'Icon-and-Links';
  };
  attributes: {
    href: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.Text;
  };
}

export interface SharedMenuItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_items';
  info: {
    displayName: 'MenuItems';
  };
  attributes: {
    dropdowItems: Schema.Attribute.Component<'shared.links', true>;
    href: Schema.Attribute.Text;
    isDropdown: Schema.Attribute.Boolean;
    label: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.links': SharedLinks;
      'shared.logo-and-links': SharedLogoAndLinks;
      'shared.menu-items': SharedMenuItems;
    }
  }
}
