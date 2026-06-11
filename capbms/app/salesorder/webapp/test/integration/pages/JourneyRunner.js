sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/so/salesorder/test/integration/pages/salesorderheaderList",
	"com/so/salesorder/test/integration/pages/salesorderheaderObjectPage",
	"com/so/salesorder/test/integration/pages/salesorderitemObjectPage"
], function (JourneyRunner, salesorderheaderList, salesorderheaderObjectPage, salesorderitemObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/so/salesorder') + '/test/flp.html#app-preview',
        pages: {
			onThesalesorderheaderList: salesorderheaderList,
			onThesalesorderheaderObjectPage: salesorderheaderObjectPage,
			onThesalesorderitemObjectPage: salesorderitemObjectPage
        },
        async: true
    });

    return runner;
});

