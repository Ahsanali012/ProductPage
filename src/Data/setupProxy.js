const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/getall?page=1&itemStatus=Published&resultsPerPage=10',
    createProxyMiddleware({
      target: 'https://dev-be.sulhuf.com:3000/itemsmaster',
      changeOrigin: true,
    })
  );

  app.use(
    '/getbyid/<_id>',
    createProxyMiddleware({
      target: 'https://dev-be.sulhuf.com:3000/itemsmaster',
      changeOrigin: true,
    })
  );
};