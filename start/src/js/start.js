
avalon.ready(function(){
	/*avalon.define({
		$id:'first',
		name:'my first demo',
		color:'as you like'
	});
	avalon.define({
		$id:'second',
		name:'test nest',
		color:'i like purple'
	});
	avalon.define({
		$id:'third',
		name:'test nest without color'
	});
	avalon.define({
		$id:'special',
		name:'test ms-important'
	});
	var controller=avalon.define({
		$id:'fourth',
		name:'test ms-skip',
	});
	controller.color='it will not appear in my page';
	avalon.scan();
	console.log(controller);*/

	/*avalon.define({
		$id:'prop',
		content:'<h1>test ms-text and ms-html</h1>'
	});*/

	avalon.define({
		$id:'value',
		content:'ms-value'
	});
	avalon.scan();
});
avalon.filters.findName=function(str){
	return {
		'Cynthia':'李岳阳',
		'Viki':'静'
	}[str];
};