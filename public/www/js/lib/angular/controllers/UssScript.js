define([],
function()
{

	return [ '$scope' , 'toaster','SchemaGeneratorService','$state', '$window', function($scope,toaster,SchemaGeneratorService,$state, $window){   
   $scope.$watch('$viewContentLoaded', function(){
     alert($window.sessionStorage.getItem("ussScript"));
    require(['vs/editor/editor.main'], function() {
      var editor = monaco.editor.create(document.getElementById('ScriptId'), {
        value: [
          $window.sessionStorage.getItem("ussScript")
        ].join('\n'),
        language: 'javascript'
        , theme : 'vs-dark'
      });
 //     alert(editor);
  //    console.log(editor);
    });
 
  //  monaco.editor.setTheme('vs-dark');
   });


   function ExecScript() {
       alert("ExecScript");
       var script = document.createElement("script");
       //scr.appendChild(commonHeader + vcommonFrameGen + commonTailer);
       script.type = 'text/javascript';
      var ScriptId=document.getElementById('ScriptId');
       script.text = ScriptId.value;
       document.getElementById('middleid').appendChild(script);

     }

     $scope.ExecScript=ExecScript;
	}];
	
});

/*[

 toasterService.pop('success', "title", "text");
      var url = "/authorize"; 
      var config =  { 
          headers: {
            "x-access-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIZWFlcmllIEdTTCIsImF1ZCI6Ind3dy5teXJvb21leHBlbnNlLmNvbSIsImlhdCI6IjYwbXMifQ.G37Yj8ljUjbOf-kSyc4j3-YAlbseb1KET9CMBgbJfaE"
           ,'Authorization': 'Basic dGVzdDp0ZXN0'
            ,      'Content-Type': 'application/x-www-form-urlencoded'
            ,'Access-Control-Allow-Origin': false

            
        }
      };
      var dataJson = 
      {
        "email" : "durai145@live.in"
        ,"password" : "1qaz2wsx"
        ,"grantType": "password"
            ,"clientId" : "CLIENTSP"
            ,"scope" : "GSA"
            ,"redirectURI" :"http://localhost:5000"
      };

    /*
    $.post(url , dataJson , function (resp,status,xhr){

        alert("resp" + status);

    },dataType);


  $http.post(url,dataJson,config).then(function (response) 
    { 
     // alert("resp");
      console.log(response);
      alert(JSON.stringify(response));
    },function(data){

      if(data.status == 302)
      {

        alert("Invalid request");
      }
     });
    };

]*/