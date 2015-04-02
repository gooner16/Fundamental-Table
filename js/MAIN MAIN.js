'use strict'; //"operatingcashflow","espdiluted",
 var fundamentalOptions = ['assets', 'bookvalue' ,"capitalexpenditures" ,"cash","costofgoodssold","dps",'epsbase', "floatshares","goodwill","incomeaftertax",'incomebeforetax', "institutionalown", "inventory","liability","longtermdebt",'netincome' , "numofemployees" ,"operatingincome","revenue","shorttermdebt","totaloperatingexpense"]

 var fundata = new Array()
 function Runner () {}																											

Runner.loadData = function loadData(AppData, stockId){
 	var checks = 0;
	//-----------------------------------------
	// /v1/fundamentals
	//-----------------------------------------
	for( var i=0; i< fundamentalOptions.length; i++) {
		var tempfund = fundamentalOptions[i]

	AppData.v1.fundamental.GET(stockId,tempfund)
	.then(function(data){

		
	fundata.push(data.response.data[0][1])
console.log(fundata)
	} ,
	 function(jqXHR){

		throw new Error('Failed to load data!',jqXHR);

	}).then(function(){

		checks ++;
		if(checks === 2){
			Runner.toggleOverhead();
		}

	});}
	AppData.v1.Tickerlist.GET('json')
	.then(function(data){
		console.log(data);
	});



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
				
				Runner.loadData(AppData, $('#autocomplete')[0].value);
				return;
			}
		})
	}
});