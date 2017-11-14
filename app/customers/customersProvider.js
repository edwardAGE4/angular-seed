'use strict';


var liste_customer;


app.service('customersProvider',function(){
  
    //Initialisation de la liste de customers
    this.initCustomer=function(customer){
     liste_customer=customer;
   }
     //retour de la liste de customers
    this.returnCustomer=function(){
     return liste_customer;
   }
    
    //création d'un nouvel objet customer
    this.newcust = function(){
        var cust =   {
                "_id": "",
                "index": 0,
                "age": 0,
                "eyeColor": "",
                "name": "",
                "gender": "",
                "company": "",
                "email": "",
                "phone": "",
                "address": "",
                "about": ""
            }
        return cust;
    }
    
    //Ajout d'un nouveau customer
    this.new=function(Newcustomer){
         liste_customer.push(Newcustomer);
         return liste_customer;
   }
    
    //Modification
    this.update=function(Newcustomer){
         //liste_customer.push(Newcustomer);
         liste_customer.forEach(function(customer) {
           if(customer.index == Newcustomer.index){customer = Newcustomer};
         });
         return liste_customer;
   }
    
    //suppression de customers
     this.rmd=function(Newcustomer){
         var i=0,j=0;
         //Parcour de la liste pour rcupérer l'index
         liste_customer.forEach(function(customer) {
            
              if(customer.index == Newcustomer.index){j=i;}
             i++;
         });
         
         //suppression
         liste_customer.splice(j,1);
         return liste_customer;
   }
    
    //auto incrément d'index
    this.last_index=function(){
         var Vindex = -1;
         liste_customer.forEach(function(customer) {
              Vindex = customer.index;
         });
         return Vindex +1;
   }
});