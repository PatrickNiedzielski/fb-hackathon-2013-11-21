
	var simulationCode = null;
	var levelCode = null;
	var runCode = null;
	
	var jsrepl = new JSREPL({  
	input: function(inp){inp("[none]\n")},  
	output: function(out){alert("Output: " + out);},  
	result: function(res){},
	error: function(err){alert("Error: " + err);},  
	progress: function(prog){}, 
	timeout: {
		time: 30000,  
		callback: function(){alert("Timeout."); return true; /*true = don't call again*/ }  
	}  
	});
	
	jsrepl.loadLanguage('python', function () { 

		//alert('Python loaded'); 
		//jsrepl.eval('print "hello"');
		jQuery.get('py/lib.py', function(data) {
			simulationCode = data;
			jQuery.get('py/run.py', function(data) {
				runCode = data;
				showGame();
			});
		});

		//runSimulation("abc\ndef", "def\nghi", function(inp){alert(inp);}, function(err){});
	});
  
	function loadLevelCode(level, startLevelFunc){
		jQuery.get(level, function(data) {
			levelCode = data;
			startLevelFunc();
		});
	}
  
	function runSimulation(playerScripts, inputFunc, errorFunc){		

		jsrepl.off("input");
		jsrepl.once("input", function(inp){

			var numLines = [0,0];

			for(var p = 0; p < 2; p++){
				for(var i=0; i < playerScripts[p].length; i++){
					if(playerScripts[p].charAt(i) == "\n"){
						numLines[p]++;
					}	
				}
			}

			inp("" + numLines[0] + "\n" + playerScripts[0] + "\n" + numLines[1] + "\n" + playerScripts[1] + "\n");
			jsrepl.on("input", function(inp){inp("[none]\n");});
		});
		
		var inputBufferReading = false;
		var inputBuffer = "";
		jsrepl.off("output");
		jsrepl.on("output", function(out){
			alert(out);
			while(out.length > 0){
				if(inputBufferReading && out.charCodeAt(0) == 0x11){
					inputBufferReading = false;
					out = out.substr(1);
				}else if(out.charCodeAt(0) == 0x11){
					inputBufferReading = true;
					out = out.substr(1);
				}else if(inputBufferReading){
					var index = out.indexOf(String.fromCharCode(0x11));
					if(index == -1){
						inputBuffer = inputBuffer + out;
						out = "";
					}else{
					
						inputFunc(inputBuffer + out.substring(0, index));
						inputBuffer = "";
						inputBufferReading = false;
						
						out = out.substring(index + 1);
					}
				}else{
					var index = out.indexOf(String.fromCharCode(0x11));
					if(index == -1){
						out = "";
					}else{
						out = out.substring(index);
					}
				}
			}
		});
		
		jsrepl.off("result");
		jsrepl.on("result", function(res){});
		
		jsrepl.off("error");
		jsrepl.on("error", function(err){
			errorFunc(err);
			//if(/^Exception: Collision$/g.test(err)){}
		});
	
		jsrepl.eval('print "hello world"');
		jsrepl.eval(simulationCode + levelCode + runCode);
	}