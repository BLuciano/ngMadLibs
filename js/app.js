angular.module('myApp', [])
  .controller('myCtrl', function($scope){
    $scope.inputs = {
      name : 'name',
      jobTitle : 'Job Title',
      tediousTask : 'Tedious Task',
      dirtyTask : 'Dirty Task',
      celebrity : 'Celebrity',
      uselessSkill : 'Useless Skill',
      adjective : 'Adjective',
      obnoxiuousCelebrity : 'Obnoxiuous Celebrity',
      hugeNumber : 'Huge Number'
    };
    $scope.gender = 'male';
    $scope.heShe = 'he';
    $scope.hisHer = 'his';
  });