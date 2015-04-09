'use strict'; //"operatingcashflow","espdiluted",
 var fundamentalOptions = ['assets', 'bookvalue' ,"capitalexpenditures" ,"cash","costofgoodssold","dps",'epsbase', "floatshares","goodwill","incomeaftertax",'incomebeforetax', "institutionalown", "inventory","liability","longtermdebt",'netincome' , "numofemployees" ,"operatingincome","revenue","shorttermdebt","totaloperatingexpense"]
 var array = ["Assets","Book Value","Capital Expenditures","Cash","Cost of Good Sold","DPS","EPS Base","Float Shares","Good Will","Income After Tax","Income Before Tax","Institutional Own","Inventory","Liability","Long Term Debt","Net Income","Number of Employees","Operating Income","Revenue","Short Term Debt","Total Operating Expense"];

 var fundata = new Array()
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

			if ( ek / 1000000000 > 1){
			ek =  (ek / 1000000000).toFixed(2) + " bn"
			}

			else if( ek / 1000000 >1 && ek / 1000000000 < 1){
			ek = (ek / 1000000).toFixed(2) + " M"
			}
			var curr = {
				'label': tempName,
				'val': ek //data.response.data[0][1]
			}
			
			//console.log(curr)
			//fundata.push(data.response.data[0][1])
			fundata.push(curr);
			console.log(fundata)
			
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
};
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
				Runner.loadData(AppData, $('#autocomplete')[0].value.toUpperCase());
				return;
			}
		})
	}
});