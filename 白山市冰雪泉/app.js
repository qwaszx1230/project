angular.module('App', [])
  // 模块和控制器
  .run(["$rootScope", function($rootScope) {
    console.log('启动成功！')
  }])
  .controller("AppController", ["$rootScope", "$scope",function($rootScope, $scope) {
      //默认挂载
      $scope.job = "策划经理";
      $scope.submit = function(){
        console.log(1111)
        alert("保存成功！");
        $('form').submit(function(e){
            e.preventDefault();
            var data = $(this).serialize();
            console.log(data);
             alert("保存成功！");
        })
        }
  }]);
