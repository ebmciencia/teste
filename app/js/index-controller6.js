/**
 * Created by Aluno on 10/11/2015.
 */

angular.module('senai',['ngMessages','ui.growl', 'ui.grid', 'ngMaterial']);

angular.module('senai')
    .controller('IndexController6', IndexController6);

IndexController6.$inject = ['$scope', 'AlertService', '$filter'];

function IndexController6($scope, AlertService , $filter){
    $scope.entidade = {};
    $scope.listaDePessoas = [];
    $scope.limpar = limpar;
    $scope.salvar = salvar;
    $scope.excluirItemGrid = excluirItemGrid;

    $scope.gridStyle = {};
    $scope.gridStyle.width = '100%';
    $scope.gridStyle.height = '200px';

    $scope.gridOptions = {
        data: 'listaDePessoas',
        columnDefs:[{name: 'Nome', field:'itNome', width: 150, cellTemplate: 'app/templates/cell-template.html'},
                    {name: 'Nascimento', field:'itNascimento' ,width: 150, cellTemplate: 'app/templates/cell-template.html'},
                    {name: 'Email', field:'itEmail', width: 150, cellTemplate: 'app/templates/cell-template.html'},
                    {name: 'Excluir', field:'excluir', width: 150, cellTemplate: 'app/templates/cell-template-btn-excluir.html'}
        ],
        enableRowSelect:true,
        enableColumnMenus: false,
        rowTemplate: 'app/templates/row-template.html'
    };

    function getRowStyle(registro){
        var rowStyle
    }

    function excluirItemGrid(row){
        $scope.listaDePessoas.splice(row, 1);
        alert(row);
    }

    function salvar(){
        if($scope.myForm.$invalid === true){
            AlertService.showError('teste ','teste de erro');

            /*
             $growl.box('Observe', 'Verifique os campos inválidos', {
             class: 'danger',
             timeout: 3000
             }).open();
             */
            return;
        }

        $scope.listaDePessoas.push($scope.entidade);

        $scope.dataStr = $filter('date')($scope.entidade.nascimento, 'dd/MM/yyyy');

        limpar();

        AlertService.showOk('OK','Registro salvo 123');
        /*
         $growl.box('Ok', 'Registro salvo com sucesso', {
         class: 'success',
         timeout: 3000
         }).open();
         */
    }

    function limpar(){
        $scope.entidade = {};
    }


}