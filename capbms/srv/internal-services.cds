using { bms.cap as bms } from '../db/custom-schema';

@path :'internal-services'
service InternalService {
     @odata.draft.enabled : true
entity salesorderheader as projection on bms.salesorderheader;
entity salesorderitem as projection on bms.salesorderitem;
}
