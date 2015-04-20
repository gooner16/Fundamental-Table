'use strict'; //"operatingcashflow","espdiluted",
 var fundamentalOptions = ['assets', 'bookvalue' ,"capitalexpenditures" ,"cash","costofgoodssold","dps",'epsbase', "floatshares","goodwill","incomeaftertax",'incomebeforetax', "institutionalown", "inventory","liability","longtermdebt",'netincome' , "numofemployees" ,"operatingincome","revenue","shorttermdebt","totaloperatingexpense"]
 var array = ["Assets","Book Value","Capital Expenditures","Cash","Cost of Good Sold","DPS","EPS Base","Float Shares","Good Will","Income After Tax","Income Before Tax","Institutional Own","Inventory","Liability","Long Term Debt","Net Income","Number of Employees","Operating Income","Revenue","Short Term Debt","Total Operating Expense"];

var validTicker = 0
var fundata = new Array()

StockRender.AppRender.register({
	id: "49e90eee6ce1942a94136fc8db19319c",
	name: "Tables",
	version: "1.0.0",
	defaults: {
		terminal: {
			x: 0,
			y: 0,
			w: 100,
			h: 100
		}
	},
	beforeRender: function () {
		console.log('running beforeRender!');
	},
	ready: function(AppMemory, AppData) {
		/*Defining Variables*/
		var last_input;

		/*Reading User-Data*/
		AppMemory.read('last_input')
			.success(function(data){
				if(!data) {
					AppMemory.write('last_input','A');
					last_input = 'A';
				} else {
					last_input = data;
				}
			})
			.error(function(err, data){
				if(err) {
					console.log('AppMemory not retrieved',data);
					AppMemory.write('last_input','A');
					last_input = 'A';
				}
			});

		/*Running Program*/
		
		$('#autocomplete').keypress(function(e){
			if( e.which === 13 ) {
				fundata = new Array();

				//Local variable "input"
				var input = document.getElementById("autocomplete");

				//Call function again -- function in EnterStock.js
				validTicker = determineTicker(input.value.toUpperCase());

				if (validTicker == 1) {
					Runner.loadData(AppData, $('#autocomplete')[0].value.toUpperCase());
					return;
				};	
			}
		})

		///////////////////////////////////////////////*Settings*//////////////////////////////////////////////

	var isChanged;
	var changeSize; 
	
	$( "#inpText" ).change(function() {
		var newTextSize = document.getElementById('inpText').value;
 		console.log(newTextSize);
 		changeSize = newTextSize + 'px';
 		isChanged = true; //Don't know what it does yet
	});

	//this is the function for opening and closing the settings
	var count = 0;
	var click = 0;
	var fundChanged;
	$( "#opener" ).click(function() {
		count += 1;
		click = count % 2;
		console.log('click', click);
		if(click == 1){
			$("#settings").show();
			//$("#table1").hide();
		} 
		if(click == 0) {
			$("#settings").hide();
			//$("#table1").show();
			
			//Change of text size
			if(isChanged == true){
				console.log(changeSize);
				var pLength = document.getElementsByTagName('tr').length;
				for(var x = 0; x < pLength; x++){
			 		document.getElementsByTagName('tr')[x].style.fontSize = changeSize;
				}
				var emLength = document.getElementsByTagName('tr').length;
				for(var x = 0; x < emLength; x++){
					document.getElementsByTagName('tr')[x].style.fontSize = changeSize;
				}
				isChanged = false;
			}
			if(fundChanged == true){
		 		var rowNum = document.getElementById("table1").rows.length; 
				
				while(rowNum > 4) {
					 document.getElementById("table1").deleteRow(rowNum - 2);
					 rowNum = document.getElementById("table1").rows.length; 
					 stockLength = 0;
					 numAddedStocks = 0;
				}
				fundChanged = false;
			}

			//Change of row color
			Settings_rowColor();
		}
	});

	//this function is used for the dropdown list (modify if you need it, if not delete)
	$( "#fundimental" ).change(function() {
		var e = document.getElementById("fundimental");
		fund = e.options[e.selectedIndex].text;
		console.log(fund);
		fundChanged = true;
				Runner.loadFundimental(AppData);
			});
	//functions that determine which color wheel you changed
	$( "#inpColorScheme1" ).click(function() {
		Runner.colorType('scheme1');
	});
	$( "#inpColorScheme2" ).click(function() {
		Runner.colorType('scheme2');
	});
	$( "#btnTextColor" ).click(function() {
		Runner.colorType('text');
	});


	/////////////////////////////////////////////*Settings*//////////////////////////////////////////////
	}
	
});


 function Runner () {}																											
Runner.loadData = function loadData(AppData, stockId){

 	var checks = 0;
	//-----------------------------------------
	// /v1/fundamentals
	//-----------------------------------------
	for( var i=0; i< fundamentalOptions.length; i++) {

		// use closure from
		// http://stackoverflow.com/questions/19564172/for-loop-wont-pass-i-variable-to-jquery-function-inside-the-loop
		
		(function(i){
			var tempfund = fundamentalOptions[i];
			var tempName = array[i]
			AppData.v1.fundamental.GET(stockId,tempfund)
			.then(function(data){
	 		var ek = data.response.data[0][1]

			if ( ek / 1000000000 > 1 || ek / 1000000000 < -1){
			ek =	(ek / 1000000000).toFixed(2) + " bn"
			}

			else if( ek / 1000000 >1 || ek / 1000000 < -1){
			ek = (ek / 1000000).toFixed(2) + " M"
			}
			var curr = {
				'label': tempName,
				'val': ek //data.response.data[0][1]
			}
			
			fundata.push(curr);
			
			}, function(jqXHR){
				throw new Error('Failed to load data!',jqXHR);
			}).then(function(){
				checks ++;
				if(checks === 2){
					//Runner.toggleOverhead();
				}
			});
		})(i);
	}
	console.log(fundata)
	
};

///////////////////////////////////////////////*Settings*//////////////////////////////////////////////

var colorChangeType;
Runner.colorType = function colorType(type){
colorChangeType = type;
};
//changes the color of the rows
Runner.colorChange = function colorChange(){
	 var txtcolor;
	if(colorChangeType == 'text'){
	txtcolor = document.getElementById('btnTextColor').value;
	txtcolor = '#' + txtcolor;
	 var pLength = document.getElementsByTagName('tr').length;
		for(var x = 0; x < pLength; x++){
	 document.getElementsByTagName('tr')[x].style.color = txtcolor;
		}
	}
	 if(colorChangeType == 'scheme1'){
	txtcolor = document.getElementById('inpColorScheme1').value;
	txtcolor = '#' + txtcolor;
	var rowLength = document.getElementById('table1').rows.length;
	for(var x = 2; x < rowLength; x += 2){
		document.getElementById('table1').rows[x].style.background = txtcolor;
	}
	}
	 if(colorChangeType == 'scheme2'){
	txtcolor = document.getElementById('inpColorScheme2').value;
	txtcolor = '#' + txtcolor;
	var rowLength = document.getElementById('table1').rows.length;
	for(var x = 1; x < rowLength; x += 2){
		document.getElementById('table1').rows[x].style.background = txtcolor;
	}

	///////////////////////////////////////////////*Settings*//////////////////////////////////////////////

	}	 
}