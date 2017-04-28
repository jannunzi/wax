/**
 * Created by Nischay M on 04/04/2017.
 */
(function () {
    angular
        .module("genXapp")
        .controller("FlowController", FlowController);

    function FlowController($modal, $scope, FileFactory, $routeParams) {
        $scope.addFlow = false;
        $scope.addToFlows = addToFlows;
        $scope.newFlow = "";
        $scope.flows = ['Flow1', 'Flow2', 'Flow3'];

        //user/:uid/website/:wid/flow
        var vm = this;
        var uid = ($routeParams.uid);
        var wid = ($routeParams.wid);
        vm.uid = uid;
        vm.wid = wid;

        function addToFlows() {

            $scope.flows.push({name: $scope.newFlow});
            $scope.addFlow = false;
            $scope.newFlow = "";
        }

        FileFactory.getFileEntries(function(entries) {
            $scope.$apply(function() {
                $scope.files = entries;
                $scope.flows = entries;
                console.log($scope.files);
            });
        });
        $scope.ok = ok;

        function ok(index) {
            // $scope.selected.file = $scope.files[index];
            FileFactory.getContent($scope.files[index], function(content) {
                console.log(content);
                $scope.editor.load(content);
            });
        }

        $scope.editor = {
            // ng-click Callbacks
            //
            // Open the FileOpenDialog and let the user select a new file for open
            //

            // fileOpen: function(){
            //     var modalInstance = $modal.open({
            //         templateUrl:'src/controllers/FileOpenController.html',
            //         controller: 'FileOpenController'
            //     });
            //
            //     modalInstance.result.then(
            //         // [OK]
            //         function (content) {
            //             $scope.editor.load(content);
            //         },
            //         // [Cancel]
            //         function () {
            //
            //         }
            //     );
            // },

            //------------------------------------------------------------------------
            // Configuration of the editor

            canvas : {
                // callback if a DOM node from the palette is dropped inside the canvas
                //
                onDrop: function(droppedDomNode, x, y, shiftKey, ctrlKey){
                    let type = $(droppedDomNode).data("shape");
                    let figure = eval("new "+type+"();");//new draw2d.shape.basic.Circle({x: x, y: y});//eval("new "+type+"();");


                    let label = new draw2d.shape.basic.Label({text:"New Label"});
                    label.installEditor(new draw2d.ui.LabelEditor({
                        // called after the value has been set to the LabelFigure
                        onCommit: $.proxy(function(value){
                            alert("new value set to:"+value);
                        },this),
                        // called if the user abort the operation
                        onCancel: function(){
                        }
                    }));

                    // adding a label for every shape
                    figure.add(label, new draw2d.layout.locator.TopLocator());

                    // create a command for the undo/redo support
                    let command = new draw2d.command.CommandAdd(this, figure, x, y);
                    this.getCommandStack().execute(command);

                },
            },

            // provide all figures to show in the left hand palette
            // Used by the directives/canvas.js
            palette: {
                figures: [
                    {class:"draw2d.shape.node.Start", name: 'Start'},
                    {class:"draw2d.shape.node.Between"  , name: 'Between'},
                    {class:"draw2d.shape.node.End"  , name: 'End'}
                ]
            }
        };

    }
})();
