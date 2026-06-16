using { bms.cap as bms } from '../db/custom-schema';
@path :'json-api-services'
 @requires: 'ApproverRole'
service JsonApiService {
    
 //@cds.persistence.skip
    entity Users {
        key id       : Integer;
        name         : String;
        username     : String;
        email        : String;
    }

}