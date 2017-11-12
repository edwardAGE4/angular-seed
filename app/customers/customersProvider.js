'use strict';


var customer = [
  {
    "_id": "553634f5cc69d84bc3c46ef8",
    "index": 0,
    "age": 37,
    "eyeColor": "blue",
    "name": "Mullins Hull",
    "gender": "male",
    "company": "YOGASM",
    "email": "mullinshull@yogasm.com",
    "phone": "+1 (915) 533-2300",
    "address": "549 Heyward Street, Dexter, Kansas, 9109",
    "about": "Lorem officia laboris proident ut aliquip veniam elit aliquip velit. Nulla ullamco aute aute sit mollit minim esse occaecat ex. Occaecat elit enim tempor eu pariatur voluptate enim consequat cillum elit. Veniam ea voluptate elit Lorem. Anim proident cillum pariatur aliqua voluptate elit. Nulla culpa esse veniam sunt nostrud veniam occaecat reprehenderit anim anim. Culpa id est pariatur magna sint fugiat in ad ipsum commodo.\r\n"
  },
  {
    "_id": "553634f543c607eb608c2344",
    "index": 1,
    "age": 31,
    "eyeColor": "brown",
    "name": "Corinne Hodge",
    "gender": "female",
    "company": "ZAJ",
    "email": "corinnehodge@zaj.com",
    "phone": "+1 (911) 569-3441",
    "address": "624 Ash Street, Abrams, New Hampshire, 9043",
    "about": "Consectetur cillum do fugiat et deserunt ea dolor dolore aliquip exercitation elit commodo aliquip amet. Enim magna sit consequat officia ea aliquip cillum. Eu velit veniam voluptate irure adipisicing ad ut culpa. Duis reprehenderit mollit et cupidatat deserunt. Velit laborum aute dolore id dolore qui do cupidatat non amet dolore nostrud.\r\n"
  },
  {
    "_id": "553634f5f456782a9907f192",
    "index": 2,
    "age": 20,
    "eyeColor": "blue",
    "name": "Mclaughlin Pittman",
    "gender": "male",
    "company": "TOURMANIA",
    "email": "mclaughlinpittman@tourmania.com",
    "phone": "+1 (886) 456-2112",
    "address": "306 Clinton Avenue, Bethany, Maine, 2387",
    "about": "Duis incididunt sint consectetur sint magna aliquip non. Non cupidatat deserunt et non amet velit. Aliqua exercitation duis mollit officia qui nulla. Aliquip aliquip eiusmod velit adipisicing cillum. Ipsum eiusmod do Lorem culpa sunt reprehenderit id. Esse cillum incididunt cillum aute cupidatat voluptate laborum deserunt aliquip ut cupidatat.\r\n"
  },
    
  {
    "_id": "553634f5e497b97a62dccaf2",
    "index": 3,
    "age": 26,
    "eyeColor": "blue",
    "name": "Spears Hicks",
    "gender": "male",
    "company": "PROVIDCO",
    "email": "spearshicks@providco.com",
    "phone": "+1 (947) 528-2042",
    "address": "357 Ainslie Street, Brethren, New Mexico, 640",
    "about": "Cillum reprehenderit amet nisi excepteur magna. Ipsum voluptate commodo reprehenderit deserunt enim non anim. Do eu ex cupidatat nisi reprehenderit ex pariatur dolore occaecat do excepteur laboris.\r\n"
  },
    
  {
    "_id": "553634f50c1568ea799e50ea",
    "index": 4,
    "age": 27,
    "eyeColor": "blue",
    "name": "Malinda Carrillo",
    "gender": "female",
    "company": "ANDRYX",
    "email": "malindacarrillo@andryx.com",
    "phone": "+1 (885) 445-2568",
    "address": "187 Central Avenue, Kimmell, Utah, 9905",
    "about": "Est ea excepteur pariatur dolor enim mollit magna qui. Mollit tempor nisi pariatur ad mollit eiusmod est adipisicing id excepteur reprehenderit dolor. Lorem velit adipisicing aute velit ea pariatur nisi eu eiusmod. Esse qui exercitation aliqua ullamco esse ea dolore eu ullamco esse enim mollit irure occaecat. Consequat cupidatat ullamco qui commodo sint dolor. Nostrud ea proident deserunt commodo mollit id voluptate.\r\n"
  }
]


app.service('customersProvider',function(){
  
    this.initCustomer=function(){
       return customer;
   }
    
    this.new=function(Newcustomer){
         customer.push(Newcustomer);
         return customer;
   }
});