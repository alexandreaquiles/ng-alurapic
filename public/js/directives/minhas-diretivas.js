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
});