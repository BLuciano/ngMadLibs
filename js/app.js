angular.module('myApp', ['ngMessages'])
  .controller('myCtrl', function($scope){
    var setValues = function(){
      $scope.inputs = {
        name : '',
        jobTitle : '',
        tediousTask : '',
        dirtyTask : '',
        celebrity : '',
        uselessSkill : '',
        adjective : '',
        obnoxiuousCelebrity : '',
        hugeNumber : ''
      };
      $scope.gender = 'male';
      $scope.heShe = 'he';
      $scope.hisHer = 'his';
      $scope.formValid = false;
    };

    setValues();

    $scope.submit = function(){
      if(!$scope.userForm.$error.required){
        $scope.formValid = true;
      }
    };

    $scope.reset = function reset(){
      setValues();
    };
  });