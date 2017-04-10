/**
 * Created by Nischay M on 04/04/2017.
 */
(function () {
    angular
        .module("genXapp")
        .controller("FlowController", FlowController);

    function FlowController() {

        let vm = this;
        vm.addFlow = false;
        vm.addToFlows = addToFlows;
        vm.newFlow = "";
        vm.flows = ['Flow1', 'Flow2', 'Flow3'];

        function addToFlows() {

            vm.flows.push(vm.newFlow);
            vm.addFlow = false;
            vm.newFlow = "";
        }
    }
})();
