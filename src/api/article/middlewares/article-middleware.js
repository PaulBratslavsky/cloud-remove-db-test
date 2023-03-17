'use strict';

const populate = {
  user: {
    fields: ["firstName", "lastName", "bio", "email"],
  },
  cover: {
    fields: ["name", "alternativeText", "caption", "width", "height", "url"],
  },
  blocks: {
    populate: {
      file: {
        fields: ["name", "alternativeText", "caption", "width", "height", "url"],
      }
    }
  }
}

/**
 * `article` middleware
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query = { populate };
    strapi.log.info('Article middleware.');
    await next();
  };
};
