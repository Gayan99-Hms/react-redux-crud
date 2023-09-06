
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/employees', 
    createProxyMiddleware({
      target: 'http://localhost:8080', // The address of your Spring Boot backend
      changeOrigin: true,
    })
  );
};
