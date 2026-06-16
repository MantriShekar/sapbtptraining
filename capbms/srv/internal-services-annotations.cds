using InternalService from './internal-services';

annotate InternalService.salesorderheader with @UI.LineItem : [

    { Value: salesorderid, Label: 'Sales Order ID' },
    { Value: salesorderdate, Label: 'Date' },
    { Value: customerid, Label: 'Customer' },
    { Value: totalamount, Label: 'Amount' },
    { Value: salesorderstatus, Label: 'Status' }

];
// annotate BusinessPartnerService.BusinessPartners with @UI.LineItem : [
//     { Value: businessPartnerNumber },
//     { Value: vendorCode },
//     { Value: customerCode },
//     { Value: businessPartnerName1 }
// ];