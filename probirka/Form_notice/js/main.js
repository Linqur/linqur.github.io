/*маска телефона*/
$(document).on('ready', function() {
  $('#phone').mask('+7(999) 999-9999');
});
/*маска телефона*/

/*дисейбл кнопки*/
document.getElementById('check').onclick = function(){
  var sub = document.getElementById('sub');
  if(this.checked){
    sub.removeAttribute('disabled');
  }
  else{
    sub.setAttribute('disabled', 'true');
  }
}
/*дисейбл кнопки*/
