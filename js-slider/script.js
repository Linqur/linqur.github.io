$(document).ready(function(){
	var prev = document.createElement('button');
	var next = document.createElement('button');
	prev.className = 'prev';
	prev.innerHTML = '&larr;';
	next.className = 'next';
	next.innerHTML = '&rarr;';
	$('.slider').append(prev);
	$('.slider').append(next);
	$('.item').first().addClass('active');
	for(var i = 0; i<$('.item').length;i++){
		$('.item')[i].style.order = i;
	}
});

$(document).on('click','.prev',function(){
	for(var i = 0; i<$('.item').length;i++){
		if($('.slider>.active')[0] == $('.item')[i]){
			if(i==0){
				$('.slider>.active').removeClass('active');
				$('.item')[$('.item').length-1].className = 'item active';
				break;
			}
			console.log(i);
			$('.slider>.active').removeClass('active');
			$('.item')[--i].className = 'item active';
			break;
		}
	}
});
$(document).on('click','.next',function(){
	for(var i = 0; i<$('.item').length;i++){
		if($('.slider>.active')[0] == $('.item')[i]){
			if(i==$('.item').length-1){
				$('.slider>.active').removeClass('active');
				$('.item')[0].className = 'item active';
				break;
			}
			console.log(i);
			$('.slider>.active').removeClass('active');
			$('.item')[++i].className = 'item active';
			break;

		}
		console.log($('.item')[1].style.order);
	}
});
