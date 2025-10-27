import type { Schema, Struct } from '@strapi/strapi';

export interface ContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    Email: Schema.Attribute.Email;
    Message: Schema.Attribute.Text;
    Name: Schema.Attribute.String;
  };
}

export interface HomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    banner_image: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeExperienceCard extends Struct.ComponentSchema {
  collectionName: 'components_home_experience_cards';
  info: {
    displayName: 'experience-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    experience_icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeProjectCard extends Struct.ComponentSchema {
  collectionName: 'components_home_project_cards';
  info: {
    displayName: 'project-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    project_image: Schema.Attribute.Media<'images'>;
    project_link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeTechnologyCard extends Struct.ComponentSchema {
  collectionName: 'components_home_technology_cards';
  info: {
    displayName: 'technology-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    technology_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomeTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonial_cards';
  info: {
    displayName: 'testimonial-card';
  };
  attributes: {
    authorFrom: Schema.Attribute.String;
    authorImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    authorName: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.form': ContactForm;
      'home.banner': HomeBanner;
      'home.experience-card': HomeExperienceCard;
      'home.project-card': HomeProjectCard;
      'home.technology-card': HomeTechnologyCard;
      'home.testimonial-card': HomeTestimonialCard;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
