angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){
    var ddo = {};
    ddo.restrict = 'E';
    ddo.transclude = true;
    ddo.scope = {
        titulo: '@'
    };
    ddo.templateUrl = 'js/directives/meu-painel.html';
    return ddo;
})
.directive('minhaFoto', function(){
    var ddo = {};
    ddo.restrict = 'E';
    ddo.scope = {
        url: '@',
        titulo: '@'
    };
    ddo.templateUrl = 'js/directives/minha-foto.html';
    return ddo;
})
.directive('meuBotaoPerigo', function() {
    var ddo = {};
    ddo.restrict = "E";
    ddo.scope = {
        nome: '@',
        acao : '&'
    }
    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';
    return ddo;
})
.directive('foco', function(){
    var ddo = {};
    ddo.restrict = 'A';
    ddo.scope = {
        focado: '='
    };
    ddo.link = function(scope, element) {
        scope.$watch('focado', function(antigo, novo){
            if(scope.focado){
                element[0].focus();
                scope.focado = false;
            }
        });
    }
    return ddo;
});