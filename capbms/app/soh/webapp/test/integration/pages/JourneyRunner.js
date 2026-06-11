sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/soh/soh/test/integration/pages/salesorderheaderList",
	"com/soh/soh/test/integration/pages/salesorderheaderObjectPage",
	"com/soh/soh/test/integration/pages/salesorderitemObjectPage"
], function (JourneyRunner, salesorderheaderList, salesorderheaderObjectPage, salesorderitemObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/soh/soh') + '/test/flp.html#app-preview',
        pages: {
			onThesalesorderheaderList: salesorderheaderList,
			onThesalesorderheaderObjectPage: salesorderheaderObjectPage,
			onThesalesorderitemObjectPage: salesorderitemObjectPage
        },
        async: true
    });

    return runner;
});

