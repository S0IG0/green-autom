const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.forismatic.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/api/1.0/',
            },
        })
    );
};
