const cds = require('@sap/cds');
const cov2ap = require('@cap-js-community/odata-v2-adapter');
cds.on('bootstrap', app => {
    app.use(cov2ap());
});

cds.on('served', async () => {

    const srv = await cds.connect.to('JsonApiService')
    const jsonApi = await cds.connect.to('JSON_API')

    srv.on('READ', 'Users', async () => {
        return jsonApi.send({
            method: 'GET',
            path: '/users'
        })
    })

})

module.exports = cds.server
const { createProxyMiddleware } = require('http-proxy-middleware');

cds.on('bootstrap', app => {

  app.use('/northwind', createProxyMiddleware({
    target: 'https://services.odata.org',
    changeOrigin: true,
    pathRewrite: {
      '^/northwind': '/V2/Northwind/Northwind.svc'
    }
  }));

});
