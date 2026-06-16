using InternalService as service from '../../srv/internal-services';
annotate service.salesorderheader with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : createdAt,
            },
            {
                $Type : 'UI.DataField',
                Value : createdBy,
            },
            {
                $Type : 'UI.DataField',
                Value : lastChangedAt,
            },
            {
                $Type : 'UI.DataField',
                Value : lastChangedBy,
            },
            {
                $Type : 'UI.DataField',
                Value : salesorderdate,
            },
            {
                $Type : 'UI.DataField',
                Value : customerid,
            },
            {
                $Type : 'UI.DataField',
                Value : totalamount,
            },
            {
                $Type : 'UI.DataField',
                Value : salesordertype,
            },
            {
                $Type : 'UI.DataField',
                Value : salesorderstatus,
            },
            {
                $Type : 'UI.DataField',
                Value : salesorganization,
            },
            {
                $Type : 'UI.DataField',
                Value : distributionchannel,
            },
            {
                $Type : 'UI.DataField',
                Value : division,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'Sales Order Header',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
         {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet2',
            Label : 'Sales Order Items',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : createdAt,
        },
        {
            $Type : 'UI.DataField',
            Value : createdBy,
        },
        {
            $Type : 'UI.DataField',
            Value : lastChangedAt,
        },
        {
            $Type : 'UI.DataField',
            Value : lastChangedBy,
        },
        {
            $Type : 'UI.DataField',
            Value : salesorderdate,
        },
    ],
);

