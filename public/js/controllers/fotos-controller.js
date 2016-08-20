angular.module('alurapic')
.controller('FotosController', function ($scope, CadastroDeFotos) {
    CadastroDeFotos.listar()
    .then(function(dados){
        $scope.fotos = dados.fotos;
    })
    .catch(function(dados){
        $scope.mensagem =  dados.mensagem;
    });

    $scope.remover = function(foto){
        CadastroDeFotos.remover(foto)
        .then(function(dados){
             var indiceDaFoto = $scope.fotos.indexOf(foto);
             $scope.fotos.splice(indiceDaFoto, 1);
             $scope.mensagem = dados.mensagem;
        })
        .catch(function(dados){
             $scope.mensagem = dados.mensagem;
        });
    };
});