import type { Schema, Struct } from '@strapi/strapi';

export interface HeadingH1 extends Struct.ComponentSchema {
  collectionName: 'components_heading_h1s';
  info: {
    displayName: 'h1';
  };
  attributes: {
    H1: Schema.Attribute.Text;
  };
}

export interface HeadingH2 extends Struct.ComponentSchema {
  collectionName: 'components_heading_h2s';
  info: {
    displayName: 'h2';
  };
  attributes: {
    h2: Schema.Attribute.Text;
  };
}

export interface HeadingH3 extends Struct.ComponentSchema {
  collectionName: 'components_heading_h3s';
  info: {
    displayName: 'h3';
  };
  attributes: {
    h3: Schema.Attribute.Text;
  };
}

export interface HeadingH4 extends Struct.ComponentSchema {
  collectionName: 'components_heading_h4s';
  info: {
    displayName: 'h4';
  };
  attributes: {
    h4: Schema.Attribute.Text;
  };
}

export interface HeadingH5 extends Struct.ComponentSchema {
  collectionName: 'components_heading_h5s';
  info: {
    displayName: 'h5';
  };
  attributes: {
    h5: Schema.Attribute.Text;
  };
}

export interface HeadingH6 extends Struct.ComponentSchema {
  collectionName: 'components_heading_h6s';
  info: {
    displayName: 'h6';
  };
  attributes: {
    h6: Schema.Attribute.Text;
  };
}

export interface PagesAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_pages_aboutuses';
  info: {
    displayName: 'AboutUS';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    RightsideImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Text1: Schema.Attribute.Text;
    Text2: Schema.Attribute.Text;
  };
}

export interface PagesBlogHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_pages_blog_hero_banners';
  info: {
    displayName: 'BlogHeroBanner';
  };
  attributes: {
    BlogImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    PublishDate: Schema.Attribute.Date;
    Title: Schema.Attribute.Text;
  };
}

export interface PagesContactUsItem extends Struct.ComponentSchema {
  collectionName: 'components_pages_contact_us_items';
  info: {
    displayName: 'ContactUsItem';
  };
  attributes: {
    ContentwithLinks: Schema.Attribute.Component<
      'pages.contentwith-links',
      true
    >;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Tag: Schema.Attribute.Text;
  };
}

export interface PagesContentwithLinks extends Struct.ComponentSchema {
  collectionName: 'components_pages_contentwith_links';
  info: {
    displayName: 'ContentwithLinks';
  };
  attributes: {
    Content: Schema.Attribute.Text;
    Link: Schema.Attribute.Component<'shared.links', false>;
  };
}

export interface PagesCountPortfolioBanner extends Struct.ComponentSchema {
  collectionName: 'components_pages_count_portfolio_banners';
  info: {
    displayName: 'CountPortfolioBanner';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    NumberText: Schema.Attribute.Component<'shared.title-sub-title', true>;
  };
}

export interface PagesCta1 extends Struct.ComponentSchema {
  collectionName: 'components_pages_cta_1s';
  info: {
    displayName: 'CTA1';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    CTAButton: Schema.Attribute.Component<'shared.links', false>;
    CTARightIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    CTAText: Schema.Attribute.Text;
    CTATitle: Schema.Attribute.Text;
  };
}

export interface PagesCustomPricingPlan extends Struct.ComponentSchema {
  collectionName: 'components_pages_custom_pricing_plans';
  info: {
    displayName: 'CustomPricingPlan';
  };
  attributes: {
    Button: Schema.Attribute.Component<'shared.links', false>;
    Description: Schema.Attribute.Text;
    PricingPoins: Schema.Attribute.Component<'pages.pricing-box-points', false>;
    Subtext: Schema.Attribute.Text;
    Text1: Schema.Attribute.Text;
    Text2: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface PagesFaqs extends Struct.ComponentSchema {
  collectionName: 'components_pages_faqs';
  info: {
    displayName: 'Faqs';
  };
  attributes: {
    Contentpara: Schema.Attribute.RichText;
    QuestionAnswers: Schema.Attribute.Component<'shared.title-sub-title', true>;
    Title: Schema.Attribute.Text;
  };
}

export interface PagesFooterForm extends Struct.ComponentSchema {
  collectionName: 'components_pages_footer_forms';
  info: {
    displayName: 'FooterForm';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    Title: Schema.Attribute.Text;
  };
}

export interface PagesHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_pages_hero_banners';
  info: {
    displayName: 'HeroBanner';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Button: Schema.Attribute.Component<'shared.links', false>;
    h1: Schema.Attribute.Text;
    Subtext: Schema.Attribute.Text;
  };
}

export interface PagesHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_pages_home_heroes';
  info: {
    displayName: 'HomeHero';
  };
  attributes: {
    ButtonLink: Schema.Attribute.Component<'shared.links', false>;
    h1: Schema.Attribute.Text;
    HeroContent: Schema.Attribute.Blocks;
    RightsideImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Text1: Schema.Attribute.Text;
    Text2: Schema.Attribute.Text;
  };
}

export interface PagesHomeServiceListing extends Struct.ComponentSchema {
  collectionName: 'components_pages_home_service_listings';
  info: {
    displayName: 'HomeServiceListing';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    ServiceListItems: Schema.Attribute.Component<
      'shared.service-list-item',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface PagesMissionVision extends Struct.ComponentSchema {
  collectionName: 'components_pages_mission_visions';
  info: {
    displayName: 'MissionVision';
  };
  attributes: {
    LeftImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    MissionVisionItem: Schema.Attribute.Component<
      'shared.icon-title-description',
      true
    >;
    Title: Schema.Attribute.Text;
  };
}

export interface PagesOptimizationProcess extends Struct.ComponentSchema {
  collectionName: 'components_pages_optimization_processes';
  info: {
    displayName: 'OptimizationProcess';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    ProcessImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Title: Schema.Attribute.Text;
  };
}

export interface PagesOurClient extends Struct.ComponentSchema {
  collectionName: 'components_pages_our_clients';
  info: {
    displayName: 'OurClient';
  };
  attributes: {
    ClientsLogos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface PagesPricingBoxPoints extends Struct.ComponentSchema {
  collectionName: 'components_pages_pricing_box_points';
  info: {
    displayName: 'PricingBoxPoints';
  };
  attributes: {
    Points: Schema.Attribute.Component<'shared.icon-label', true>;
    Title: Schema.Attribute.Text;
  };
}

export interface PagesResultScreenshots extends Struct.ComponentSchema {
  collectionName: 'components_pages_result_screenshots';
  info: {
    displayName: 'ResultScreenshots';
  };
  attributes: {
    ScreenshotsImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Text: Schema.Attribute.Blocks;
    Title: Schema.Attribute.Text;
  };
}

export interface PagesServiceAboutus extends Struct.ComponentSchema {
  collectionName: 'components_pages_service_aboutuses';
  info: {
    displayName: 'ServiceAboutus';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    ServiceLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Title: Schema.Attribute.Text;
  };
}

export interface PagesTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_pages_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    LabelText: Schema.Attribute.Component<'shared.richtext', true>;
    Title: Schema.Attribute.Text;
  };
}

export interface PagesTitle extends Struct.ComponentSchema {
  collectionName: 'components_pages_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    CategoryTitle: Schema.Attribute.String;
  };
}

export interface PagesWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_pages_why_chooseuses';
  info: {
    displayName: 'WhyChooseUs';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    Points: Schema.Attribute.Component<'shared.icon-label', true>;
    RightsideImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedIconLabel extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_labels';
  info: {
    displayName: 'IconLabel';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Label: Schema.Attribute.Text;
  };
}

export interface SharedIconTitleDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_title_descriptions';
  info: {
    displayName: 'IconTitleDescription';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    IconLabel: Schema.Attribute.Component<'shared.icon-label', false>;
  };
}

export interface SharedImages extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'Images';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

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

export interface SharedRichtext extends Struct.ComponentSchema {
  collectionName: 'components_shared_richtexts';
  info: {
    displayName: 'Richtext';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
  };
}

export interface SharedServiceListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_list_items';
  info: {
    displayName: 'ServiceListItem';
  };
  attributes: {
    Content: Schema.Attribute.Text;
    Link: Schema.Attribute.Component<'shared.links', false>;
    ServiceLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedTitleSubTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_sub_titles';
  info: {
    displayName: 'TitleSubTitle';
  };
  attributes: {
    SubTitle: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'heading.h1': HeadingH1;
      'heading.h2': HeadingH2;
      'heading.h3': HeadingH3;
      'heading.h4': HeadingH4;
      'heading.h5': HeadingH5;
      'heading.h6': HeadingH6;
      'pages.about-us': PagesAboutUs;
      'pages.blog-hero-banner': PagesBlogHeroBanner;
      'pages.contact-us-item': PagesContactUsItem;
      'pages.contentwith-links': PagesContentwithLinks;
      'pages.count-portfolio-banner': PagesCountPortfolioBanner;
      'pages.cta-1': PagesCta1;
      'pages.custom-pricing-plan': PagesCustomPricingPlan;
      'pages.faqs': PagesFaqs;
      'pages.footer-form': PagesFooterForm;
      'pages.hero-banner': PagesHeroBanner;
      'pages.home-hero': PagesHomeHero;
      'pages.home-service-listing': PagesHomeServiceListing;
      'pages.mission-vision': PagesMissionVision;
      'pages.optimization-process': PagesOptimizationProcess;
      'pages.our-client': PagesOurClient;
      'pages.pricing-box-points': PagesPricingBoxPoints;
      'pages.result-screenshots': PagesResultScreenshots;
      'pages.service-aboutus': PagesServiceAboutus;
      'pages.testimonials': PagesTestimonials;
      'pages.title': PagesTitle;
      'pages.why-choose-us': PagesWhyChooseUs;
      'shared.icon-label': SharedIconLabel;
      'shared.icon-title-description': SharedIconTitleDescription;
      'shared.images': SharedImages;
      'shared.links': SharedLinks;
      'shared.logo-and-links': SharedLogoAndLinks;
      'shared.menu-items': SharedMenuItems;
      'shared.richtext': SharedRichtext;
      'shared.service-list-item': SharedServiceListItem;
      'shared.title-sub-title': SharedTitleSubTitle;
    }
  }
}
