
app.controller('EditorController',[ '$scope', "$modal", function($scope,  $modal) {
	

    $scope.editor = {
    		// ng-click Callbacks
            //
            // Open the FileOpenDialog and let the user select a new file for open
    		//
    		fileOpen: function(){
    		    var modalInstance = $modal.open({
    		      templateUrl:'src/controllers/FileOpenController.html',
    		      controller: 'FileOpenController'
    		    });
    		    
    		    modalInstance.result.then(
    		        // [OK]
    		    	function (content) {
    		    	    $scope.editor.load(content);
	    		    }, 
	    		    // [Cancel]
	    		    function () {
	    		        
	    		    }
	    	   );
    		},
    		//------------------------------------------------------------------------
    		
    		
    		// Configuration of the editor
    		//
    		// 
            canvas : {
                // callback if a DOM node from the palette is dropped inside the canvas
                //
                onDrop: function(droppedDomNode, x, y, shiftKey, ctrlKey){
                    var type = $(droppedDomNode).data("shape");
                    var figure = eval("new "+type+"();");//new draw2d.shape.basic.Circle({x: x, y: y});//eval("new "+type+"();");
                    // create a command for the undo/redo support
                    var command = new draw2d.command.CommandAdd(this, figure, x, y);
                    this.getCommandStack().execute(command);
                },
            },
 
            // provide all figures to show in the left hand palette
            // Used by the directives/canvas.js
            palette: {
                    figures: [
                        {class:"draw2d.shape.basic.Circle", name:"Circle"},
                        {class:"draw2d.shape.basic.Rectangle", name:"Rectangle"},
                        {class:"draw2d.shape.basic.Line", name: "Line"},
                        {class:"draw2d.shape.basic.PolyLine", name:"PLine"},
                        {class:"draw2d.shape.basic.Polygon"  , name:"Polygon"},
                    ]
            }
    };
}]);
