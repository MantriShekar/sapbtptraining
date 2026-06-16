using {bms.cap as bms} from '../db/custom-schema';

@path: '/northwind-services'
//@requires: 'AdminRole'
service NorthwindService {
 
  // entity Invoices {
  //     key InvoiceID : Integer;
  //     CustomerID    : String;
  //     OrderDate     : Date;
  //     TotalAmount   : Decimal(15,2);
  // }
 
 
  // NEW

  entity Invoices {
    key OrderID      : Integer;
        CustomerID   : String;
        CustomerName : String;
        ProductID    : Integer;
        ProductName  : String;
        Quantity     : Decimal(15, 2);
        UnitPrice    : Decimal(15, 2);
  }
 
 
  entity Customers {
    key CustomerID  : String;
        CompanyName : String;
        Country     : String;
  }
 
  entity Suppliers {
    key SupplierID  : Integer;
        CompanyName : String;
        Country     : String;
  }
 
}