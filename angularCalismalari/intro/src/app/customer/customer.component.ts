import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  customers:Customer[]=[]
  selectedCustomer:Customer | undefined;


  ngOnInit()  {
    this.customers = [
        {id:1,firstName:"Engin",lastName:"Demiroğ", age:33},
        {id:2,firstName:"Ömer Faruk",lastName:"Çelenk", age:21},
        {id:3,firstName:"Luna",lastName:"Çelenk", age:3},
        {id:4,firstName:"Melih",lastName:"Unuttum", age:20}

    ]
  }

  selectCustomer(customer:Customer){
    this.selectedCustomer = customer
  }


}
