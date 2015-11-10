/**
 * Created by Leandro on 05/11/2015.
 */
angular.module('tabela', []);
angular.module('tabela').controller('IndexController3', IndexController3);

IndexController3.$inject = ['$scope'];

function IndexController3($scope) {

    var listaDeCarros = [
        {marca: "Ford", modelo: "Ka"},
        {marca: "Fiat", modelo: "Uno"},
        {marca: "Chev", modelo: "teste"}
    ];

    $scope.listaDeCarros = listaDeCarros;

    $scope.adicionar = function () {
        var carro = {marca: "Marca"+$scope.listaDeCarros.length, modelo: "Teste"+$scope.listaDeCarros.length};
        $scope.listaDeCarros.push(carro);
    }
}