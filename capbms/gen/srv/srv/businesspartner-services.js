const cds = require('@sap/cds');
 
 
// NEW
const { SELECT } = cds.ql;
 
 
//   exporting the function module for calling with cds connect to
module.exports = async function () {
 const BusinessPartners = await cds.connect.to('BusinessPartners');
  //   event call function with req query to get response returns
  this.on('READ', 'BusinessPartners', req => {
 
    // return northwind.run(req.query);
 
    // NEW
    //return BusinessPartners.run(
    //  SELECT.from('BusinessPartners').columns(
    //    'businessPartnerNumber',
    //    'vendorCode',
     //   'customerCode',
     //   'businessPartnerName1'
     // )
     return BusinessPartners.run(req.query
    );
  });

 
 
 
};

 
