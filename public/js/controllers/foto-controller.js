angular.module('alurapic').controller('FotoController', function($scope, $routeParams, CadastroDeFotos){
    if($routeParams.fotoId){
        CadastroDeFotos.buscarPorId($routeParams.fotoId)
        .then(function(dados) {
            $scope.foto = dados.foto;
        })
        .catch(function(dados) {
            $scope.mensagem = dados.mensagem;
        });
    }
    $scope.salvar = function(){
        if($scope.formulario.$valid){
            var foto = $scope.foto;
            CadastroDeFotos.salvar(foto)
            .then(function(dados){
                $scope.mensagem = dados.mensagem;
                $scope.focado = true;
            })
            .catch(function(dados){
                $scope.mensagem = dados.mensagem;
            });
        }
    }
});