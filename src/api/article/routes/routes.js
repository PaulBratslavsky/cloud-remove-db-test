module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/articles/find-by-slug/:slug',
      handler: 'article.findBySlug',
      config: {
        policies: [],
        middlewares: [
          "api::article.article-middleware"
        ],
      }
    }
  ]
}