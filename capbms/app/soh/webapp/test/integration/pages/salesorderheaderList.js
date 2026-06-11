sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.soh.soh',
            componentId: 'salesorderheaderList',
            contextPath: '/salesorderheader'
        },
        CustomPageDefinitions
    );
});