angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){
    if($routeParams.fotoId){
        $http.get('/v1/fotos/' + $routeParams.fotoId)
        .success(function(foto) {
            $scope.foto = foto;
        })
        .error(function(erro) {
            $scope.mensagem = 'Não foi possível obter a foto'
        });
    }
    $scope.salvar = function(){
        if($scope.formulario.$valid){
            var foto = $scope.foto;
            if($routeParams.fotoId) {
                $http.put('/v1/fotos/'+foto._id, foto)
                .success(function(){
                    $scope.mensagem = 'Foto alterada com sucesso!';
                })
                .error(function(erro){
                    $scope.mensagem = 'Não  possível alterar a foto: ' + erro;
                });
            } else {
                $http.post('/v1/fotos', foto)
                .success(function(){
                    $scope.mensagem = 'Foto cadastrada com sucesso!';
                })
                .error(function(erro){
                    $scope.mensagem = 'Não  possível cadastrar a foto: ' + erro;
                });
            }
        }
    }
});