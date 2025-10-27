import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::project.project', ({ strapi }) => ({
  async find(ctx) {
    const entry = await strapi.db.query('api::project.project').findOne({
      populate: {
         project_banner_image: true,
        project_card: {
          populate: {
            project_image: true,
          },
        },
      },
    });

    return { data: entry };
  },
}));
