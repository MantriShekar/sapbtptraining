using { bms.cap as bms } from '../db/custom-schema';
//@path: '/BusinessPartners'
@path :'businesspartner-services'

service BusinessPartnerService {
    @odata.draft.enabled: true
entity BusinessPartners {

    
    key businessPartnerNumber: String(10);
        vendorCode         : String(20);
        customerCode       : String(20);
        businessPartnerName1 : String(100);
}
}


// Purpose of this entity is to create schema in HDI Container and to connect to the remote service "BusinessPartners" in SAP S/4HANA system using CDS connect and to fetch the data from that service and to display in Fiori Elements List Report Application.