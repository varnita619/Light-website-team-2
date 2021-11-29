 var video = document.getElementById('intro-video');
    $('#play-video').click(function() {
      if(video.paused) {
        video.play();
        playing=true;
        video.controls=true;
        $('#play-video').hide();
      }
    })
    video.onended = function() {
      $('#play-video').show();
      video.controls = false;
    }
    video.onpause = function() {
      $('#play-video').show();
      video.controls = false;
