
avalon.ready(function(){
	var vm=avalon.define({
		$id:'visible',
		wait:false,
		index:1,
		toggle: function(index){
			vm.index=index;
		}
	});
	setTimeout(function(){
		vm.wait=true;
	},5000);
	avalon.scan();
});