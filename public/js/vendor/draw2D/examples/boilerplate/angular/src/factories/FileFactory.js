app.factory('FileFactory', ["$timeout",function fileStorage($timeout) {
    return {
    	// get all available files
    	//
        getFileEntries : function(successCallback, errorCallback){
        	$timeout(function(){
	        	successCallback( DemoData);
        	},0);
        },
        
        // load the file content from the given file description
        //
        getContent : function(fileEntry, onSuccessCallback, onErrorCallback){
            $timeout(function(){
                onSuccessCallback(fileEntry.content);
            },0);
        }
    };
}]);
