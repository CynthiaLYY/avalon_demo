
avalon.ready(function(){
	avalon.define({
		$id:'data_caching',
		number:"123",
		array:[4,5,6],
		obj:{name:'test_data',data:'obj'},
		func:function(){console.log('I am a function.');},
		boolean:true,
		show_data:function(){
			var ele=avalon(this);
			console.log(
				ele.data("number"),ele.data("array"),ele.data("obj"),ele.data("func"),ele.data("boolean"),
				this["data-obj"],this["data-array"]
			);
		}
	});
	avalon.scan();
});