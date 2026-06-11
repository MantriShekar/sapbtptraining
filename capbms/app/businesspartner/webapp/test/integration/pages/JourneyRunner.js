sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/bp/businesspartner/test/integration/pages/BusinessPartnersList",
	"com/bp/businesspartner/test/integration/pages/BusinessPartnersObjectPage"
], function (JourneyRunner, BusinessPartnersList, BusinessPartnersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/bp/businesspartner') + '/test/flp.html#app-preview',
        pages: {
			onTheBusinessPartnersList: BusinessPartnersList,
			onTheBusinessPartnersObjectPage: BusinessPartnersObjectPage
        },
        async: true
    });

    return runner;
});

