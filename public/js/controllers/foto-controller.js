angular.module('alurapic').controller('FotoController', function($scope, $routeParams, FotosResource){
    if($routeParams.fotoId){
        FotosResource.get({fotoId: $routeParams.fotoId},
        function(foto) {
            $scope.foto = foto;
        }, function(erro) {
            $scope.mensagem = 'Não foi possível obter a foto'
        });
    }
    $scope.salvar = function(){
        if($scope.formulario.$valid){
            var foto = $scope.foto;
            if($routeParams.fotoId) {
                FotosResource.update({fotoId: foto._id}, foto, function(){
                    $scope.mensagem = 'Foto alterada com sucesso!';
                }, function(erro){
                    $scope.mensagem = 'Não  possível alterar a foto: ' + erro;
                });
            } else {
                FotosResource.save(foto, function(){
                    $scope.mensagem = 'Foto cadastrada com sucesso!';
                }, function(erro){
                    $scope.mensagem = 'Não  possível cadastrar a foto: ' + erro;
                });
            }
        }
    }
});