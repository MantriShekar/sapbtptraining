// // const cds  = require('@sap/cds');

// // module.exports = cds.service.impl(async function() {
// // this.before('CREATE', 'salesorderheader', async (req) => {
// //     if(!req.data.salesordertype) {
// //         req.data.salesordertype = 'SO';
// //         console.log(req.data.salesordertype);
// //     }
// // });
// // this.before('CREATE', 'salesorderheader', async (req) => {

// //         req.data.salesordertype = 'Active';
// //         console.log(req.data.salesordertype);

// // });
// // });
// const cds = require('@sap/cds');

// module.exports = async function () {

// this.after('CREATE', 'salesorderheader', async (req) =>  {
//     if (!req.data.salesordertype) {
//  //     return req.data.salesordertype;
//     }
//       req.data.salesordertype = 'Standard';
//       console.log(req.data.salesordertype);
// } );

// this.before('CREATE', 'salesorderheader', async (req) =>  {
//     req.data.salesordertype = 'Active';
//     console.log(req.data.salesordertype);
// } );
// }
const cds = require('@sap/cds');

module.exports = cds.service.impl(function () {

    // This will run before a SalesOrderHeader is created
    // If you want to set Default  Validation and declare variable before PBO.
    //     this.before('CREATE', 'salesorderheader', async (req) => {
    //         // Set a default sales order type if not already provided
    //         if (!req.data.salesordertype) {
    //             req.data.salesordertype = 'Active';
    //         }
    // req.data.CUSTOMERID = '99999';
    //         console.log('salesordertype before CREATE:', req.data.salesordertype);
    //     });
    this.before('CREATE', 'salesorderheader', async (req) => {
        // Set a default sales order type if not already provided
        if (!req.data.salesordertype) {
            return req.reject('Sales order type is required');

        }
        console.log('salesordertype before CREATE:', req.data.salesordertype);
        //       if (req.data.salesorganization !== '1000') {  
        // return req.error('Invalid sales organization');
        //       }
        if (!req.data.salesorganization) {
            req.data.salesorganization = 'BMS';
        }
        return {
            salesorganization: req.data.salesorganization,
            message: 'Order Created'
        };

    });
    // this.before read event works for a  entity read mode to print or execute a data record or json object or validation
    // of the changes happened in the req.data.
    this.before('READ', 'salesorderheader', async (req) => {
        // Set a default sales order type if not already provided
        // req.data.CUSTOMERID = '99999';
        return req.data.CUSTOMERID;

        console.log('CUSTOMERID before READ:', req.data.CUSTOMERID);
    });

       this.on('CREATE', 'salesorderheader', async (req) => {
       
const result = await INSERT.into('salesorderheader')
           .entries(req.data);
        return result;
        //consoloe.log(req.data.customerid);
});
    

});