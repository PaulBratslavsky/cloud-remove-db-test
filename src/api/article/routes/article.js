'use strict';

/**
 * article router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::article.article', {
  config: {
    find: {
      middlewares: ["api::article.article-middleware"],
    },
    findOne: {
      middlewares: ["api::article.article-middleware"],
    },
    update: {
      policies: ["api::article.is-article-author"],
    },
    delete: {
      policies: ["api::article.is-article-author"],
    },
  },
});
