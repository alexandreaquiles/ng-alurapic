angular.module('alurapic')
.controller('FotosController', function ($scope, $resource) {
    var Fotos = $resource('v1/fotos/:fotoId');
    Fotos.query(function(fotos){
        $scope.fotos = fotos;
    }, function(erro){
        console.log(erro);
    });

    $scope.remover = function(foto){
        Fotos.remove({fotoId: foto._id}, function() {
             var indiceDaFoto = $scope.fotos.indexOf(foto);
             $scope.fotos.splice(indiceDaFoto, 1);
             $scope.mensagem =  ('Foto ' + foto.titulo + ' removida com sucesso!');
        }, function(erro) {
             $scope.mensagem = ('Não foi possível apagar a foto ' + foto.titulo);
        });
    };
});