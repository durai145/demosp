define([],
  function () {

    return ['$scope', 'toaster', 'SchemaGeneratorService', '$state', '$window', function ($scope, toaster, SchemaGeneratorService, $state, $window) {
      $scope.$watch('$viewContentLoaded', function () {
        require(['vs/editor/editor.main'], function () {
          var editor = monaco.editor.create(document.getElementById('ScriptId'), {
            value: [
              $window.sessionStorage.getItem("ussScript")
            ].join('\n'),
            language: 'javascript',
            theme: 'vs-dark'
          });
          $scope.editor = editor;

          var htmlEditor = monaco.editor.create(document.getElementById('HtmlId'), {
            value: [
              $window.sessionStorage.getItem("ussHtml")
            ].join('\n'),
            language: 'html',
            theme: 'vs-dark'
          });
          $scope.htmlEditor = htmlEditor;
        });
      });

      function ExecScript() {
        var script = document.createElement("script");
        script.type = 'text/javascript';
        var ScriptId = document.getElementById('ScriptId');
        script.text = $scope.editor.getValue();
        document.getElementById('middleid').appendChild(script);
      }

      function ExecHtml() {
        $scope.htmlEditor.getValue();
        var childObj = document.createElement("div");
        childObj.innerHTML = $scope.htmlEditor.getValue();
        document.getElementById('middleid').appendChild(childObj);
      }

      function GenHtml() {
        var ussScript = $scope.editor.getValue();
        var ufiframegen = require("ufi.frameGen");
        var ufivalidate = require("ufi.validate");
        var $ = require("jquery");
        var us = new ufiframegen.FG();
        var dynFGCall = (new Function("return function(us) {" + ussScript + "\n return USSContainer0 " + "};"))();
        var appendObj = dynFGCall(us);
        $scope.htmlEditor.setValue("<div class='pageLayout'> <div class='bcontainer'>" + appendObj.innerHTML + "</div></div>");
      }

      $scope.ExecScript = ExecScript;
      $scope.GenHtml = GenHtml;
      $scope.ExecHtml = ExecHtml;
    }];

  });