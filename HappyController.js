angular.module('MyHappyApp')
  .controller('HappiesController', function ($scope) {

  $scope.allSigns = [
    {sign:  "Happy", done: false},
    {sign:  "Sad", done: false},
    {sign:  "Neutral", done: false}
  ];

  $scope.all = [];


  $scope.addMood = function () {
    $scope.all.push($scope.feeling);
    $scope.feeling = "";
    console.log($scope.all);
  }
});
