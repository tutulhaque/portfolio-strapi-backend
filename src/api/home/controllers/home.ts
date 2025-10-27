/**
 * home controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::home.home', ({ strapi }) => ({
  async find(ctx) {
    try {
      const entry = await strapi.db.query('api::home.home').findOne({
        populate: {
          banner: {
            populate: {
              banner_image: true,
            },
          },
          experience: {
            populate: {
              experience_icon: true,
            },
          },
          home_projects: {
            populate: {
              project_image: true,
            },
          },
          technology: {
            populate: {
              technology_image: true,
            },
          },
          testimonials: {
            populate: {
              authorImage: true,
            },
          },
          single_image: true, // your top-level image field
        },
      });

      return { data: entry };
    } catch (error) {
      strapi.log.error('Error fetching home data:', error);
      return ctx.internalServerError('Failed to fetch home data');
    }
  },
}));
