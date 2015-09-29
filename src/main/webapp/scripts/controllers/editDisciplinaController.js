

angular.module('trabalho3').controller('EditDisciplinaController', function($scope, $routeParams, $location, DisciplinaResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.disciplina = new DisciplinaResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Disciplinas");
        };
        DisciplinaResource.get({DisciplinaId:$routeParams.DisciplinaId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.disciplina);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.disciplina.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Disciplinas");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Disciplinas");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.disciplina.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});