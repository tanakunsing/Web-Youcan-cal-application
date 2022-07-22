var app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      template: '<img src="./image/ima35.png" id="ima-re">'
    })
    .when("/banana", {
      template: ""
    })
    .when("/tomato", {
      template: '<h1>กฎของโอห์ม</h1><p>{{data_om}}</p>'
    });
});
app.controller("ex-Controller", function ($scope) {

  $scope.data_om = " โอห์ม (George Simon Ohm) นักฟิสิกส์ชาวเยอรมัน ได้ตั้งกฎเกี่ยวกับวงจรไฟฟ้า ในปี ค.ศ. 1826 ซึ่งเป็นที่ทราบกันดีกว่า เป็นพื้นฐานทางไฟฟ้ากฎนี้มีใจความว่า “เมื่ออุณหภูมิของตัวนำคงที่ กระแสไฟฟ้าที่ผ่านตัวนำ จะเป็นปฏิภาคโดยตรงกับความต่างศักย์ไฟฟ้า ระหว่างปลายทั้งสอง ของตัวนำนั้น” จากกฎนี้ ถ้า I เป็นกระแสไฟฟ้าที่ผ่านตัวนำ ซึ่งมีความต่างศักย์ระหว่างปลายทั้งสองเป็น v ซึ่งจะเขียนความสัมพันธ์ได้เป็นV คือ ค่าความต่างศักย์ระหว่างจุดสองจุดใดๆ ในวงจรมีหน่วยเป็นโวลต์ (V) I  คือ ค่ากระแสไฟฟ้าที่ไหลระหว่างจุดทั้งสอง มีหน่วยเป็นแอมแปร์ (A)R คือ ค่าคงตัว หรือ ค่าคงที่ และเรียก R ว่าความต้านทานมีหน่วยเป็น โอห์ม (Ω)ความต้านทาน 1 โอห์ม คือ ความต้านของตัวนำ ซึ่งเมื่อต่อปลายทั้งสองข้างของตัวนำนั้นเข้ากับความต่างศักย์ 1 โวลต์ จะมีกระแสไฟฟ้าไหลผ่านตัวนำนั้น 1 แอมแปร์"
  $scope.items = ['4', '5', '6'];
  $scope.colorsh = ['น้ำตาล', 'แดง', 'ส้ม', 'เหลือง', 'เขียว', 'น้ำเงิน', 'ม่วง', 'เทา', 'ขาว', 'ทอง', 'เงิน'];
  $scope.v = "";
  $scope.I = "";
  $scope.R = "";
  $scope.p = "";
  $scope.io = 5555555555;
  $scope.fuc = function () {
    if ($scope.R == "") {
      $scope.R = $scope.v / $scope.I;
      $scope.p = $scope.v * $scope.I + "W";
    } else if ($scope.I == "") {
      $scope.I = $scope.v / $scope.R;
      $scope.p = ($scope.v * $scope.v) / $scope.R + "W";
    } else if ($scope.v == "") {
      $scope.v = $scope.I * $scope.R;
      $scope.p = ($scope.I * $scope.I) * $scope.R + "W";
    }
    $scope.dele = function () {
      $scope.v = "";
      $scope.I = "";
      $scope.R = "";
      $scope.p = "";
    }
  }

});
//-------- class of capacitor ------
var app = angular.module("test", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      template: '<div style="display: flex;padding-top : 20px "><div><p>แบบขนาน</p><img src="./image/ima21.png" style="padding-left: 100px;"></div><div><p>แบบอนุกรม</p><img src="./image/ima22.png" style="padding-left: 250px;padding-top:35px"></div></div>'
    })
    .when("/banana", {
      template: ""
    })
    .when("/tomato", {
      template: '<h1>กฎของโอห์มddddddddddddddd</h1>'
    });
});
app.controller("Controller-three", function ($scope) {
   $scope.c = [];
   $scope.Select2;
   $scope.ty = 0 ;
   $scope.v = 0;
   $scope.u = 0.0
   $scope.total = 0.0;
   $scope.cal = function (){
     if($scope.Select2 != "" && $scope.Select2 != undefined){
     for($scope.i = 0;$scope.i<4;$scope.i++){
       if($scope.c[$scope.i] != "" && $scope.c[$scope.i] != undefined){
         $scope.v +=1;
         $scope.ty += parseInt($scope.c[$scope.i]);
         $scope.total += 1 / parseInt($scope.c[$scope.i]);
         $scope.u = 1 / $scope.total;
       }
     }
    }else {
      $scope.Select2 ="เลือกหน่วย";
    }
   }
  });


//------------ class of resistor --- 
var app = angular.module("tap2", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      template: '<img src="./image/ima32.jpg" id="ima-re">'
    })
    .when("/ba", {
      template: ""
    })
    .when("/to", {
      template: '<h1>กฎ</h1>'
    });
});
app.controller("Controller", function ($scope) {
  $scope.total;
  $scope.tab = [];
  $scope.num = [];
  $scope.names = [
    { name: 'black', io: 0 },
    { name: 'brown', io: 1 },
    { name: 'red', io: 2 },
    { name: 'orange', io: 3 },
    { name: 'yellow', io: 4 },
    { name: 'green', io: 5 },
    { name: 'blue', io: 6 },
    { name: 'purple', io: 7 },
    { name: 'gray', io: 8 },
    { name: 'white', io: 9 },];
  $scope.tab4 = [
   
    { name: 'brown', io: "± 1%" },
    { name: 'red', io: "± 2%" },
  
    { name: 'green', io: "± 0.5%" },
    { name: 'blue', io: "± 0.25%" },
    { name: 'purple', io: "± 0.10%" },
    { name: 'gray', io: "± 0.05%" },

    { name: 'gold', io: "± 5%" },
    { name: 'silver', io: "± 10%" },];

  $scope.tet = function () {
    if ($scope.userSelect != "" && $scope.userSelect != undefined) {
      $scope.tab[0] = $scope.userSelect;
      for ($scope.i = 0; $scope.i < 10; $scope.i++) {
        if ($scope.tab[0] == $scope.names[$scope.i].name) {
          $scope.num[0] = $scope.names[$scope.i].io;
        }
      }

    }
    $scope.cal();
  }


  $scope.tet1 = function () {
    if ($scope.userSelect1 != "" && $scope.userSelect1 != undefined) {
      $scope.tab[1] = $scope.userSelect1;
      for ($scope.i = 0; $scope.i < 10; $scope.i++) {
        if ($scope.tab[1] == $scope.names[$scope.i].name) {
          $scope.num[1] = $scope.names[$scope.i].io;
        }
      }
    }
    $scope.cal();
  }
  $scope.tet2 = function () {
    if ($scope.userSelect2 != "" && $scope.userSelect2 != undefined) {
      $scope.tab[2] = $scope.userSelect2;
      for ($scope.i = 0; $scope.i < 10; $scope.i++) {
        if ($scope.tab[2] == $scope.names[$scope.i].name) {
          $scope.num[2] = Math.pow(10, $scope.names[$scope.i].io);
        }
      }
    }
    $scope.cal();
  }
  $scope.tet3 = function () {
    if ($scope.userSelect3 != "" && $scope.userSelect3 != undefined) {
      $scope.tab[3] = $scope.userSelect3;
      for ($scope.i = 0; $scope.i < 13; $scope.i++) {
        if ($scope.tab[3] == $scope.tab4[$scope.i].name) {
          $scope.num[3] = $scope.tab4[$scope.i].io;
        }
      }
    }

  }
  $scope.cal = function () {

    if ( $scope.num[0] != undefined && $scope.num[0] != "" ||  $scope.num[1] != undefined && $scope.num[1] != "" ) {
        
        $scope.q = String($scope.num[0]) + String($scope.num[1]) ;   
         $scope.total = $scope.q;
         if($scope.num[2] != undefined )
           $scope.total = parseInt($scope.q) * $scope.num[2];     
    }else {
      $scope.num[0] = "";
      $scope.num[1] = "";
    }
  
  }


});
