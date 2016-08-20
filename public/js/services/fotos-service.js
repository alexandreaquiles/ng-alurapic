(function(){

angular.module('fotosService', ['ngResource'])
.factory('FotosResource', function($resource){
    var FotosResource = $resource('/v1/fotos/:fotoId', null, {
        update: 'PUT'
    });
    return FotosResource;
})
.factory('CadastroDeFotos', function(FotosResource, $q){
    return {
        salvar: function(){
            
        },
        remover: function(foto){
            return $q(function(resolve, reject){
                FotosResource.remove({fotoId: foto._id}, function() {
                     resolve({
                         mensagem: 'Foto ' + foto.titulo + ' removida com sucesso!'
                     });
                }, function(erro) {
                     reject({
                        mensagem: 'Não foi possível apagar a foto ' + foto.titulo
                     });
                });
            });
        },
        listar: function(){
            return $q(function(resolve, reject){
                FotosResource.query(function(fotos){
                    resolve({
                        fotos: fotos
                    });
                }, function(erro){
                    reject({
                        erro: erro
                    });
                });
            });
        },
        buscarPorId: function(){
            
        }
    };
});

})();