angular.module('alurapic').controller('FotoController', function($scope, $resource, $routeParams){
    var Fotos = $resource('/v1/fotos/:fotoId', null, {
        'update': 'PUT'
    });
    if($routeParams.fotoId){
        Fotos.get({fotoId: $routeParams.fotoId},
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
                Fotos.update({fotoId: foto._id}, foto, function(){
                    $scope.mensagem = 'Foto alterada com sucesso!';
                }, function(erro){
                    $scope.mensagem = 'Não  possível alterar a foto: ' + erro;
                });
            } else {
                Fotos.save(foto, function(){
                    $scope.mensagem = 'Foto cadastrada com sucesso!';
                }, function(erro){
                    $scope.mensagem = 'Não  possível cadastrar a foto: ' + erro;
                });
            }
        }
    }
});