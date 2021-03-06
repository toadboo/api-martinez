angular.module("messageApp", ["ngRoute"])

.controller("mainCtrl", function($scope, messageSrvc){
  $scope.messages = [];

  messageSrvc.getAll().success(function(data){
    $scope.messages = data;
  })

  $scope.save = function(){
    console.log($scope.message);
    messageSrvc.save($scope.message).success(function(data){
        $scope.messages.push(data);
    })
  }
  $scope.delete = function(){
    console.log("borrando");
    messageSrvc.delete().success(function(data){
      messageSrvc.getAll().success(function(data){
        $scope.messages = data;
      })
    })
  }
})
