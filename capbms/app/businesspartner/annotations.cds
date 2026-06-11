using BusinessPartnerService as service from '../../srv/businesspartner-services';
annotate service.BusinessPartners with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'BusinessPartnerID',
                Value : businessPartnerNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'vendorcode',
                Value : vendorCode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'customercode',
                Value : customerCode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'businessPartnerName1',
                Value : businessPartnerName1,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'BusinessPartnerID',
            Value : businessPartnerNumber,
        },
        {
            $Type : 'UI.DataField',
            Label : 'vendorcode',
            Value : vendorCode,
        },
        {
            $Type : 'UI.DataField',
            Label : 'customercode',
            Value : customerCode,
        },
        {
            $Type : 'UI.DataField',
            Label : 'businessPartnerName1',
            Value : businessPartnerName1,
        },
    ],
);

