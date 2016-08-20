angular.module('fotosService', ['ngResource'])
.factory('FotosResource', function($resource){
    var FotosResource = $resource('/v1/fotos/:fotoId', null, {
        update: { method: 'PUT' }
    });
    return FotosResource;
})
.factory('CadastroDeFotos', function(FotosResource, $q, $rootScope){
    return {
        salvar: function(foto){
            return $q(function(resolve, reject){
                if(foto._id) {
                    FotosResource.update({fotoId: foto._id}, foto, function(){
                        $rootScope.$broadcast('fotoCadastrada');
                        resolve({
                            mensagem: 'Foto alterada com sucesso!'
                        });
                    }, function(erro){
                        reject({
                            mensagem: 'Não  possível alterar a foto: ' + erro
                        });
                    });
                } else {
                    FotosResource.save(foto, function(){
                        $rootScope.$broadcast('fotoCadastrada');
                        resolve({
                            mensagem: 'Foto cadastrada com sucesso!'
                        });
                    }, function(erro){
                        reject({
                            mensagem: 'Não  possível cadastrar a foto: ' + erro
                        })
                    });
                }
            });
        },
        remover: function(foto){
            return $q(function(resolve, reject){
                FotosResource.remove({fotoId: foto._id}, function() {
                     resolve({
                         mensagem: 'Foto ' + foto.titulo + ' removida com sucesso!'
                     });
                }, function(erro) {
                     reject({
                        mensagem: 'Não foi possível apagar a foto ' + foto.titulo + ': ' + erro
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
                        mensagem: 'Erro ao listar fotos: ' + erro
                    });
                });
            });
        },
        buscarPorId: function(fotoId){
            return $q(function(resolve, reject){
                FotosResource.get({fotoId: fotoId},
                function(foto) {
                    resolve({
                        foto: foto
                    });
                }, function(erro) {
                    reject({
                        mensagem: 'Não foi possível obter a foto: ' + erro
                    });
                });
            });
        }
    };
});