/*список в имитации селекта*/
var list = document.getElementById('drop_list');
document.getElementById('droper_list').onclick = function() {
  if( list.className == 'drop-list hidden' ){
    $(list).removeClass('hidden');
    $(list).addClass('active');
  }
  else{
    $(list).removeClass('active');
    $(list).addClass('hidden');
  }
}

document.getElementById('drop_list').onclick = function() {
  $(list).removeClass('active');
  $(list).addClass('hidden');
}
/*список в имитации селекта*/

/*пере*/
document.getElementById('next').onclick = function() {
  var opt = document.getElementsByClassName('long_pregnant');
  for( i = 0 ; i < opt.length ; i++ ){

    if( opt[i].selected ){
      if( opt[opt.length-1].selected ){
        document.getElementById('next').setAttribute('disabled', 'true');
        break;
      }
      opt[i].removeAttribute('selected');
      opt[i+1].setAttribute('selected', '');
      document.getElementById('next').removeAttribute('disabled');
      document.getElementById('prev').removeAttribute('disabled');
      break;
    }
  }
}
document.getElementById('prev').onclick = function() {
  var opt = document.getElementsByClassName('long_pregnant');
  for( i = 0 ; i < opt.length ; i++ ){
    if(  opt[0].selected ) {
      document.getElementById('prev').setAttribute('disabled', 'true');
      break;
    }
    if(  opt[i].selected ){
      opt[i].removeAttribute('selected');
      opt[i-1].setAttribute('selected', '');
      document.getElementById('prev').removeAttribute('disabled');
      document.getElementById('next').removeAttribute('disabled');
      break;
    }
  }
}
/**/
