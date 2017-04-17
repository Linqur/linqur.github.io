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

/*перебор значений селекта*/
  var opt =   document.getElementById('select').options;

  function disabled_select_buttons(){
    if ( !opt[0].selected || !opt[opt.length-1] ){
      document.getElementById('next').removeAttribute('disabled');
      document.getElementById('prev').removeAttribute('disabled');
    }
    if (opt[0].selected){
      document.getElementById('prev').setAttribute('disabled', 'true');
    }
    if (opt[opt.length-1].selected) {
      document.getElementById('next').setAttribute('disabled', 'true');
    }
  }

  document.getElementById('select').onclick = function(){
    disabled_select_buttons();
  }

  document.getElementById('next').onclick = function() {
  document.getElementById('next').removeAttribute('disabled');
  document.getElementById('prev').removeAttribute('disabled');
  for( i = 0 ; i < opt.length ; i++ ){
    if( opt[i].selected ){
      opt[i+1].selected = true;
      disabled_select_buttons();
      break;
    }
  }
}
document.getElementById('prev').onclick = function() {
  document.getElementById('next').removeAttribute('disabled');
  document.getElementById('prev').removeAttribute('disabled');
  for( i = 0 ; i < opt.length ; i++ ){
    if(  opt[i].selected ){
      opt[i-1].selected = true;
      disabled_select_buttons();
      break;
    }
  }
}
/*перебор значений селекта*/
