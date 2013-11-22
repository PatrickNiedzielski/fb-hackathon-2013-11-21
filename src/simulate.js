
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
  
	function runSimulation(p1_code, p2_code, inputFunc, errorFunc){		
		var p1_lines = 1;
		for(var i=0; i < p1_code.length; i++){
			if(p1_code.charAt(i) == "\n"){
				p1_lines++;
			}	
		}
		
		var p2_lines = 1;
		for(var i=0; i < p2_code.length; i++){
			if(p2_code.charAt(i) == "\n"){
				p2_lines++;
			}	
		}
		jsrepl.off("input");
		jsrepl.once("input", function(inp){
			inp(p1_lines + "\n" + p1_code + "\n" + p2_lines + "\n" + p2_code + "\n");
			jsrepl.on("input", function(inp){inp("[none]\n");});
		});
		
		var inputBufferReading = false;
		var inputBuffer = "";
		jsrepl.off("output");
		jsrepl.on("output", function(out){
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
	
		
		jsrepl.eval(simulationCode);
	}