const cds = require('@sap/cds')

module.exports = cds.service.impl(async function () {

    
    const jsonApi = await cds.connect.to('JSON_API')

    this.on('READ', 'Users', async () => {

        const result = await jsonApi.send({
            method: 'GET',
            path: '/users'
        })

        return result
    })

})