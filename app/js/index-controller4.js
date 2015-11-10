/**
 * Created by Aluno on 06/11/2015.
 */
angular.module('validacao', ['ngMessages', 'ui.growl']);
angular.module('validacao').controller('IndexController4', IndexController4);
IndexController4.$inject = ['$scope', '$growl'];

function IndexController4($scope, $growl) {
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.entidade = {};
    $scope.listaDePessoas = [];

    function salvar(){
        if($scope.myForm.$invalid === true){
            $growl.box('Oberve','Verifique os campos inválidos',{class:'danger', $timeout: 3000}).open();
            return;
        }
        $scope.listaDePessoas.push($scope.entidade);
        limpar();
        $growl.box('Ok','Salvo!!',{class: 'success', $timeout: 3000}).open();
    }

    function limpar(){
        $scope.entidade = {};
    }
}