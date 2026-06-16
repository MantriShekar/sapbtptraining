sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], (BaseController, MessageToast) => {
  "use strict";

  return BaseController.extend("com.fee.managefeed.controller.Home", {
      onInit() {
      //  sap.ui.getCore().byId("idSmartTable").getTable().setMode("MultiSelect");
       this.byId("idSmartTable").attachInitialise(() => {
        this.byId("idSmartTable").getTable().setMode("MultiSelect");
    });
      },
     
      //  onbackpress: function (oEvent) {

      //   this.getOwnerComponent().getRouter().navTo("RouteView1", {  
      //     MessageToast.show("Navigating back to View1") 
      //   })
      // }
  });
});