angular.module('trabalho3').factory('CursoResource', function($resource){
    var resource = $resource('rest/cursos/:CursoId',{CursoId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});