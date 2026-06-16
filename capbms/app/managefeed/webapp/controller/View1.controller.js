sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.fee.managefeed.controller.View1", {
        onInit() {
        },

        onPress: function (oEvent) {  
            this.getOwnerComponent().getRouter().navTo("RouteView2", {
                query: "Hello World"
            });
            MessageToast.show("Navigating to Home view with query parameter 'Hello World'");
        }  ,
        onDestPress : function (oEvent) { 
           //  MessageToast.show("You are going to Dest View"); 
            this.getOwnerComponent().getRouter().navTo("RouteView3", {
                query1: "Hello World"
            });
            MessageToast.show("Navigating to Destination view with query parameter 'Hello World'");
        }  
    });
});