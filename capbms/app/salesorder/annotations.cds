using NorthwindService as service from '../../srv/northwind-services';
using from '../../srv/internal-services';
using from '../../db/custom-schema';

annotate InternalService.salesorderheader with @(
    UI.SelectionFields : [
        customerid,
        division,
        distributionchannel,
        salesorderid,
    ]
);

