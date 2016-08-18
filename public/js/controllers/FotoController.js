angular.module('alurapic').controller('FotoController', function($scope, $http){
    $scope.salvar = function(){
        if($scope.formulario.$valid){
            var foto = $scope.foto;
            $http.post('/v1/fotos', foto)
            .success(function(){
                $scope.mensagem = 'Foto cadastrada com sucesso!';
            })
            .error(function(erro){
                $scope.mensagem = 'Não  possível cadastrar a foto: ' + erro;
            });
        }
    }
});