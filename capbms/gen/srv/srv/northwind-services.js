// Declaring a Constant variable and fetch cds model

//const cds = require("@sap/cds");

//exporting the function module for calling with cds connect to

//module.exports =  async function () {
    
    //asynchronized calling is happened with call to connect "Northwind" in root package.json
//    const northwind = await cds.connect.to('Northwind');  // Goes and checks in package.json

//    this.on('READ','Products', req => {
//        return northwind.run(req.query);
//    });
//}
 
// decalaring a const variables and fetch cds  module
const cds = require('@sap/cds');
 
 
// NEW
const { SELECT } = cds.ql;
 
 
//   exporting the function module for calling with cds connect to
module.exports = async function () {
 
  //  asynchronised calling is happened with call to connect "Northwind" in root package json
 
  const northwind = await cds.connect.to('Northwind');
 
  //   event call function with req query to get response returns
  this.on('READ', 'Invoices', req => {
 
 
    // return northwind.run(req.query);
 
    // NEW
    return northwind.run(
      SELECT.from('Invoices').columns(
        'OrderID',
        'CustomerID',
        'CustomerName',
        'ProductID',
        'ProductName',
        'Quantity',
        'UnitPrice'
      ).where({ CustomerID: 'ALFKI' })
    );
  });
 
  this.on('READ', 'Customers', req => {
    return northwind.run(req.query);
  });
 
  this.on('READ', 'Suppliers', req => {
    return northwind.run(req.query);
  });
//  this.before('CREATE', 'Employees', req => {

//     console.log(req.data);

// })
 
// if(!req.data.email){

//         req.reject(400,'Email is mandatory');

//     }
 
};
