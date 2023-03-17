'use strict';

const utils = require('@strapi/utils');
const { PolicyError } = utils.errors;

/**
 * `isArticleAuthor` policy
 */

module.exports = async (policyContext, config, { strapi }) => {
  // Add your own logic here.
  strapi.log.info('In isArticleAuthor policy.');

  const user = policyContext.state.user;
  const articleId = policyContext.params.id;

  if (!user || !articleId) throw new PolicyError('Missing valid credentials.', 403);

  const article = await strapi.entityService.findOne('api::article.article', articleId, {
    populate: { user: true }
  });

  function isArticleAuthor(article) {
    return article.user?.id === user.id;
  }

  if (article) {
    if (isArticleAuthor(article)) return true;
    throw new PolicyError('You are not the author of this article.', 403);
  }
};
