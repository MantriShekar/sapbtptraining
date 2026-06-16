using {bms.cap as bms} from '../db/custom-schema';

@path    : 'internal-services'

//@(requires: 'authenticated-user')
//@requires: 'AdminRole'
@requires: 'ApproverRole'
service InternalService {
     @(
          odata.draft.enabled: true,
          // CRUD managed by SAP is enabled
          //  it will prohibit all the other user
          restrict           : [
               {
                    grant: '*',
                    to   : ['AdminRole']
               },
               {
                    grant: 'READ',
                    to   : ['ApproverRole']
               } // ensbled grant for only adminrole
          ]
     )

     entity salesorderheader as projection on bms.salesorderheader;

     entity salesorderitem   as projection on bms.salesorderitem;
}
