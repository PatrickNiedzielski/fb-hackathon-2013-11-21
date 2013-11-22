	var simulationCode;
	
	var jsrepl = new JSREPL({  
	input: function(inp){inp("[none]\n")},  
	output: function(out){alert("Output: " + out);},  
	result: function(res){},
	error: function(err){alert("Error: " + err);},  
	progress: function(prog){}, 
	timeout: {  
		time: 30000,  
		callback: function(){alert("Timeout.");}  
	}  
	});
  
	jsrepl.loadLanguage('python', function () {  
		//alert('Python loaded'); 
		jsrepl.eval('print "hello"');
		jQuery.get('pythonCode.py', function(data) {
			simulationCode = data;
			//jsrepl.eval(simulationCode);
		});
	});
  



	var runSimulation = function(p1_code, p2_code){
		
		var p1_lines = 0;
		for(int i=0; i < p1_code.length; i++){
			if(p1_code.charAt(i) == "\n"){
				p1_lines++;
			}	
		}
		
		var p2_lines = 0;
		for(int i=0; i < p2_code.length; i++){
			if(p2_code.charAt(i) == "\n"){
				p2_lines++;
			}	
		}
		jsrepl.off("input");
		jsrepl.once("input", function(inp){
			inp(p1_lines + "\n" + p1_code + "\n" + p2_lines + "\n" + p2_code + "\n");
			jsrepl.on("input", function(inp){inp("[none]\n");});
		});
		
		jsrepl.eval(simulationCode);
		
		
	}