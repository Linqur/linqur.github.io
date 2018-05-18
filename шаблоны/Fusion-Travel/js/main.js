document.getElementById('list').onmouseover=function navi_vision() {
  document.getElementById('nav-list').className='navi-ol-vision';
}

document.getElementById('nav-list').onclick=function navi_hidden(){
  document.getElementById('nav-list').className='navi-ol-hidden';
}

document.getElementById('list').onmouseout=function navi_hidden(){
  document.getElementById('nav-list').className='navi-ol-hidden';
}
document.getElementById('OpenVideo').onclick=function video_vision(){
  document.getElementById('video').className='video-screen vision';
}
document.getElementById('video').onclick=function video_hidden(){
  document.getElementById('video').className='video-screen hidden';
  document.location.reload();
}
$(document).on('ready', function() {
  $(".regular").slick({
    infinite: true,
    dots:true
  });
});
$(document).ready(function(){
$("#navi").on("click","a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1000);
});
});
