"use strict";
//window.parent =[];
var app = angular.module('draw2dApp', ["draw2d", 'ui.bootstrap']);


app.controller('myctrl', function($scope, $rootScope){

    $scope.var = "me";
    $scope.click = function(){
        $rootScope.$broadcast('reset',{});
    };
    $scope.undo = function(){
        $rootScope.$broadcast('undo',{});
    };
    $scope.redo = function(){
        $rootScope.$broadcast('redo',{});
    }
});

app.directive("drawing", function(){

    return {
        restrict: "A",
        link: function(scope, element){

            var parent = [];
            var redoParent = [];
            var stack=[];

            var ctx = element[0].getContext('2d');

            // variable that decides if something should be drawn on mousemove
            var drawing = false;

            // the last coordinates before the current move

            var lastX;
            var lastY;
            scope.$on('reset',function(event, data){
                scope.reset();
            });

            element.bind('mousedown', function(event){
                if(event.offsetX!==undefined){
                    lastX = event.offsetX;
                    lastY = event.offsetY;
                } else {
                    lastX = event.layerX - event.currentTarget.offsetLeft;
                    lastY = event.layerY - event.currentTarget.offsetTop;
                }

                stack = [];
                // begins new line
                ctx.beginPath();
                drawing = true;
            });

            element.bind('mousemove', function(event){
                if(drawing){
                    // get current mouse position
                    if(event.offsetX!==undefined){
                        var currentX = event.offsetX;
                        var currentY = event.offsetY;
                    } else {
                        var currentX = event.layerX - event.currentTarget.offsetLeft;
                        var currentY = event.layerY - event.currentTarget.offsetTop;
                    }

                    stack.push({lastX, lastY, currentX, currentY});
                    draw(lastX, lastY, currentX, currentY);

                    // set current coordinates to last one
                    lastX = currentX;
                    lastY = currentY;
                }

            });

            element.bind('mouseup', function(event){
                // stop drawing
                drawing = false;
                parent.push(stack);
            });

            // canvas reset
            scope.reset = function() {
                //parent = [];
                for(let i=0; i<parent.length; i++) {
                    parent.pop();
                }
                redoParent = [];
                stack=[];
                element[0].width = element[0].width;
            };

            scope.undo = function (event) {

                // reset
                element[0].width = element[0].width;
                //parent.splice(-1,1);
                if (parent.length>0) {
                    redoParent.push(parent.splice(-1, 1));
                    for (let j = 0; j < parent.length; j++) {
                        ctx.beginPath();
                        let s = parent[j];
                        for (let i = 0; i < s.length; i++) {

                            draw(s[i].lastX, s[i].lastY, s[i].currentX, s[i].currentY);
                        }
                    }
                }
            };

            scope.redo = function (event) {

                if(redoParent.length > 0) {


                    parent.push(redoParent.pop()[0]);

                    // reset
                    element[0].width = element[0].width;

                    // draw again
                    for (let j = 0; j < parent.length; j++) {
                        ctx.beginPath();
                        let s = parent[j];
                        for (let i = 0; i < s.length; i++) {

                            draw(s[i].lastX, s[i].lastY, s[i].currentX, s[i].currentY);
                        }
                    }
                }
            };

            function draw(lX, lY, cX, cY){

                // line from
                ctx.moveTo(lX,lY);
                // to
                ctx.lineTo(cX,cY);
                // color
                ctx.strokeStyle = "#4bf";
                ctx.lineWidth=2;
                // draw it
                ctx.stroke();
            }
        }
    };
});
