// Document loads in the browser
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize sidebar 
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
    // Initialize tutorial message
    var elems2 = document.querySelectorAll('.tap-target');
    var instances2 = M.TapTarget.init(elems2);
    // Initialize drop down menu
    var elems3 = document.querySelectorAll('.dropdown-trigger');
    var instances3 = M.Dropdown.init(elems3);
    // Load tutorial message
    instances2[0].open();
      
    // Initialize custom media player
    initialiseMediaPlayer();
       
    // Media Player event listener to track progress
    mediaPlayer.addEventListener('timeupdate', (event)=>{
    //console.log(mediaPlayer);
    updateProgressBar();
    });
      
      mediaPlayer.addEventListener('volumechange', function() {
   var btn = document.getElementById('mute-button');
   if (mediaPlayer.muted) changeButtonType(btn, 'unmute','<i class="material-icons">volume_up</i>', 'mute btn-floating btn-small waves-effect red waves-light');
   else changeButtonType(btn, 'mute',  '<i class="material-icons">volume_mute</i>', 'mute btn-floating btn-small waves-effect red waves-light')
}, false);

mediaPlayer.addEventListener('play', function() {
   var btn = document.getElementById('play-pause-button');
   changeButtonType(btn, 'pause', "<i class='material-icons'>pause</i>",'pause btn-floating btn-small waves-effect red waves-light')
}, false);
mediaPlayer.addEventListener('pause', function() {
   var btn = document.getElementById('play-pause-button');
   changeButtonType(btn, 'play', "<i class='material-icons'>play_arrow</i>",'play btn-floating btn-small waves-effect red waves-light')
}, false);
  });

  // Initialize the sidebar 
  M.AutoInit();

//Initialize the session value 
config.url = window.location.href;
annotation.session = Math.random().toString(36).substring(7);







 