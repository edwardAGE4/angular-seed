'use strict';

angular.module('myApp.customers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/customers', {
    templateUrl: 'customers/customers.html',
    controller: 'CustomersCtrl'
  });
}])



//controleur de customers

.controller('CustomersCtrl', ['$scope', function($scope) {
    
    $scope.customers = [
  {
    "_id": "553634f5cc69d84bc3c46ef8",
    "index": 0,
    "guid": "6dfe7718-301e-46e2-b2ac-248ca634a8bd",
    "isActive": true,
    "balance": "$3,294.45",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "blue",
    "name": "Mullins Hull",
    "gender": "male",
    "company": "YOGASM",
    "email": "mullinshull@yogasm.com",
    "phone": "+1 (915) 533-2300",
    "address": "549 Heyward Street, Dexter, Kansas, 9109",
    "about": "Lorem officia laboris proident ut aliquip veniam elit aliquip velit. Nulla ullamco aute aute sit mollit minim esse occaecat ex. Occaecat elit enim tempor eu pariatur voluptate enim consequat cillum elit. Veniam ea voluptate elit Lorem. Anim proident cillum pariatur aliqua voluptate elit. Nulla culpa esse veniam sunt nostrud veniam occaecat reprehenderit anim anim. Culpa id est pariatur magna sint fugiat in ad ipsum commodo.\r\n",
    "registered": "2014-10-25T22:22:37 -02:00",
    "latitude": 76.192437,
    "longitude": 140.135616,
    "tags": [
      "exercitation",
      "non",
      "anim",
      "laborum",
      "proident",
      "nostrud",
      "exercitation"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vonda Williams"
      },
      {
        "id": 1,
        "name": "Stein Figueroa"
      },
      {
        "id": 2,
        "name": "Glenda Hebert"
      }
    ],
    "greeting": "Hello, Mullins Hull! You have 10 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "553634f543c607eb608c2344",
    "index": 1,
    "guid": "69b78cb2-45b5-404c-b4b6-d0d4597b95c0",
    "isActive": false,
    "balance": "$3,389.97",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "brown",
    "name": "Corinne Hodge",
    "gender": "female",
    "company": "ZAJ",
    "email": "corinnehodge@zaj.com",
    "phone": "+1 (911) 569-3441",
    "address": "624 Ash Street, Abrams, New Hampshire, 9043",
    "about": "Consectetur cillum do fugiat et deserunt ea dolor dolore aliquip exercitation elit commodo aliquip amet. Enim magna sit consequat officia ea aliquip cillum. Eu velit veniam voluptate irure adipisicing ad ut culpa. Duis reprehenderit mollit et cupidatat deserunt. Velit laborum aute dolore id dolore qui do cupidatat non amet dolore nostrud.\r\n",
    "registered": "2015-04-02T01:20:35 -02:00",
    "latitude": -15.721029,
    "longitude": 0.015837,
    "tags": [
      "mollit",
      "nisi",
      "nisi",
      "tempor",
      "est",
      "esse",
      "elit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Hurley Howell"
      },
      {
        "id": 1,
        "name": "Noreen Nixon"
      },
      {
        "id": 2,
        "name": "Dillon Castro"
      }
    ],
    "greeting": "Hello, Corinne Hodge! You have 10 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "553634f5f456782a9907f192",
    "index": 2,
    "guid": "4f0d4e6c-fecf-42c3-8a71-a80fd178548e",
    "isActive": true,
    "balance": "$1,621.60",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "blue",
    "name": "Mclaughlin Pittman",
    "gender": "male",
    "company": "TOURMANIA",
    "email": "mclaughlinpittman@tourmania.com",
    "phone": "+1 (886) 456-2112",
    "address": "306 Clinton Avenue, Bethany, Maine, 2387",
    "about": "Duis incididunt sint consectetur sint magna aliquip non. Non cupidatat deserunt et non amet velit. Aliqua exercitation duis mollit officia qui nulla. Aliquip aliquip eiusmod velit adipisicing cillum. Ipsum eiusmod do Lorem culpa sunt reprehenderit id. Esse cillum incididunt cillum aute cupidatat voluptate laborum deserunt aliquip ut cupidatat.\r\n",
    "registered": "2014-02-03T18:31:40 -01:00",
    "latitude": -10.161249,
    "longitude": -147.434547,
    "tags": [
      "ad",
      "sit",
      "eu",
      "eiusmod",
      "fugiat",
      "minim",
      "voluptate"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Goodwin Bean"
      },
      {
        "id": 1,
        "name": "Brooks Waters"
      },
      {
        "id": 2,
        "name": "Larsen Jones"
      }
    ],
    "greeting": "Hello, Mclaughlin Pittman! You have 5 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "553634f5e497b97a62dccaf2",
    "index": 3,
    "guid": "7e5c5f85-77a7-4224-a475-b33debac2973",
    "isActive": true,
    "balance": "$3,243.31",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "blue",
    "name": "Spears Hicks",
    "gender": "male",
    "company": "PROVIDCO",
    "email": "spearshicks@providco.com",
    "phone": "+1 (947) 528-2042",
    "address": "357 Ainslie Street, Brethren, New Mexico, 640",
    "about": "Cillum reprehenderit amet nisi excepteur magna. Ipsum voluptate commodo reprehenderit deserunt enim non anim. Do eu ex cupidatat nisi reprehenderit ex pariatur dolore occaecat do excepteur laboris.\r\n",
    "registered": "2014-05-06T19:15:12 -02:00",
    "latitude": -5.263476,
    "longitude": 63.16536,
    "tags": [
      "eu",
      "irure",
      "est",
      "labore",
      "id",
      "enim",
      "reprehenderit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Nguyen Potts"
      },
      {
        "id": 1,
        "name": "Jordan Macias"
      },
      {
        "id": 2,
        "name": "Shannon Copeland"
      }
    ],
    "greeting": "Hello, Spears Hicks! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "553634f50c1568ea799e50ea",
    "index": 4,
    "guid": "8f0f1b6a-0c80-4cef-ab7c-e4a3095835e5",
    "isActive": true,
    "balance": "$2,693.05",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "blue",
    "name": "Malinda Carrillo",
    "gender": "female",
    "company": "ANDRYX",
    "email": "malindacarrillo@andryx.com",
    "phone": "+1 (885) 445-2568",
    "address": "187 Central Avenue, Kimmell, Utah, 9905",
    "about": "Est ea excepteur pariatur dolor enim mollit magna qui. Mollit tempor nisi pariatur ad mollit eiusmod est adipisicing id excepteur reprehenderit dolor. Lorem velit adipisicing aute velit ea pariatur nisi eu eiusmod. Esse qui exercitation aliqua ullamco esse ea dolore eu ullamco esse enim mollit irure occaecat. Consequat cupidatat ullamco qui commodo sint dolor. Nostrud ea proident deserunt commodo mollit id voluptate.\r\n",
    "registered": "2014-07-08T16:25:48 -02:00",
    "latitude": 42.940865,
    "longitude": -82.01952,
    "tags": [
      "consequat",
      "fugiat",
      "tempor",
      "laboris",
      "eu",
      "minim",
      "eu"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Meredith Chang"
      },
      {
        "id": 1,
        "name": "Patsy Baldwin"
      },
      {
        "id": 2,
        "name": "Welch Fitzpatrick"
      }
    ],
    "greeting": "Hello, Malinda Carrillo! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  }
];
    
}]);