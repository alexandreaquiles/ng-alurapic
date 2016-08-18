angular.module('alurapic')
.controller('FotosController', function ($scope) {
    var fotos = [];
    fotos.push({ url: "http://www.fundosanimais.com/Minis/leoes.jpg", titulo: "Leão"});
    fotos.push({ url: "http://www.fundosanimais.com/Minis/cao.jpg", titulo: "Cão"});
    fotos.push({ url: "http://www.fundosanimais.com/Minis/gato-branco.jpg", titulo: "Gato Branco"});
    $scope.fotos = fotos;
});