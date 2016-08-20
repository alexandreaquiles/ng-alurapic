angular.module('fotosService', ['ngResource'])
.factory('FotosResource', function($resource){
    return $resource('/v1/fotos/:fotoId', null, {
        update: 'PUT'
    });
});