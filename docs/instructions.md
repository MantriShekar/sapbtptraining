

-- Create an folder "capbms"

-cmd : npm init
-cmd : npm i @sap/cds@latest    " Dependencies in Package.json
-cmd : npm i @sap/cds@latest    " Dependencies in Package.json
-cmd : npm i @cap-js/sqlite@latest --save dev  - Error
-cmd : npm i sqlite@3 --save-dev               - dev depencies will create
-cmd : npm i express@latest --save-dev         - dev depencies will create
npm i -g sqlite@latest 

//make it local git repository
-cmd : git init
-cmd : git status
-cmd : git add
-cmd : git status
-cmd : git commit -m
 rm -rf node_modules package-lock.json bun.lockb  // remove node module
npm uninstall -g @sap/cds @sap/cds-dk 
//Northwind and OData Services Integration
//1) Directly call using require in root package and cds.connect.to
//2) Destinations of bTP from SAP CAP srv layer through cds and js files.
//3) Working with sap Connectivity Packages npm modules
https://services.odata.org/v4/northwind/northwind.svc/Suppliers
DONE

BTP Connect : SAP GUI/SAP CC//S4Hana Cloud /SAP Business APi Hub
Vendot Entity and Busines Partner entity
7lj0CR5KqWlWPSBuFqLli0bOCGNshWCZ

1) Get API Key
2) Create field called businesspartner-services.cds and businesspartner-services.js
3) 
cds.require

cds import <filename>
- download json/edmx/xml
- csn

cds deploy --to sqlite:db.sqlite


mkdir srv

cf bind-service capbms shekarbms
cf create-service hana hdi-shared shekarbms
cf create-service-key shekarbms service-key
cds bind --to shekarbms:service-key
cds deploy --to hana // deploys to hana db and create hdi and service key

// To Create HDi Container
cf create-service hana hdi-shared zhdi

// Creating Service Key
cf create-service-key zhdi service-key
// cds binding 2 service and service-key
cds bind --to zhdi service-key
// It Create teh cdsrc.private.json file for hdi handling


// Automatically Deploy to HANA and create hdi and service key
cds deploy --to hana

// To Deploy specifically to your desired hdi container use cmd
cds deploy --to hana:<NAME_HDI>

// Add HANA dependencies 
 npm i @cap-js/hana@latest

 // Singular DB Kind
SQLITE
  "db": {
        "kind": "sqlite"
      },
CDS WATCH  for sqlite
HANA
 "db": {
        "kind": "hana"
      }, 
      CDS WATCH --PROFILE HYBRID    for hana   
FOR HYBRID DB RUNNING THROUGH CMD
 "db": {
        "kind": "sqlite"
      },
       "[production]": {
        "kind": "hana"
      },

      

        "analytics-db":{
        "kind": "hana",
        "model": "analytics-db/schema.cds",
        "credentials": {
          "binding": "capbms-analytics-db"
        }
      },


      //App Router

      -cmd : cds add approuter
      -cmd : cds add xsuaa
      -cmd : cds watch --profile hybrid --port 45678

      // Lets go with global app router config.

      -cmd :  npm i @sap/approuter@latest
      -cmd : cds add xsuaa
      -cmd : npm i @sap/xssec@latest


      // How xsuaa grants and role access works
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
// These works on the base of xs-security files role collections we craft



// In Package .json modify production

 "[production]": {
          "kind": "hana",
          "auth": "xsuaa",
          "strategy": "JWT"
        }