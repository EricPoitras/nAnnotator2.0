// TO DO: Read discussion forum content from database
function set_forum_content(){
    
}

// TO DO: Read annotation content from database and store to annotation_list and display annotation_list in sidebar depending on config.js
function set_annotation_content(){
    
}

// TO DO: Post discussion forum message
function post_discussion_forum(){
    
}

// TO DO: Deliver Prompt 
function prompt_delivery(){
    // Construct the prompt and deliver toast
    var toastHTML = '<span>I am toast content</span><button class="btn-flat toast-action">Learn More</button>';
    M.toast({html: toastHTML});
}

function post_annotation(){
    annotation.title = input_title_annot.value;
    annotation.text = input_note_annot.value;
    annotation.url = config.url;
    annotation.user = config.user;
    var d = new Date();
    var time = d.getTime().toString();
    annotation.time = time;
    annotation.persona = config.persona;
    console.log(annotation);
    
    annotation_list.push({
        title: annotation.title,
        text: annotation.text, 
        persona: annotation.persona,
        url: annotation.url,
        sel: annotation.sel,
        user: annotation.user,
        session: annotation.session, 
        time: annotation.time
    });
    console.log(annotation_list);
}

function set_user_persona(src){
    persona_src = src;
    config.persona = src;
}

// Reset Sections
function hide_all_views(){
    section_authentification.style.display = "none";
    section_annotation.style.display = "none";
    section_forum.style.display = "none";
}

// Context menu display at mouse pointer
const toggleMenu = command => {
  menu.style.display = command === "show" ? "block" : "none";
};

const setPosition = ({ top, left }) => {
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  toggleMenu('show');
};

// Annotation tool highlighted text
 function highlight_text(){
    top = window.getSelection().getRangeAt(0).getBoundingClientRect().top.toString()+"px";
    left = window.getSelection().getRangeAt(0).getBoundingClientRect().right;
    left = left + 50;
    left = left + "px";
    /*let element = document.createElement("span");
    element.style.backgroundColor = "yellow";
    try{
        window.getSelection().getRangeAt(0).surroundContents(element);
    }catch{
        
    }*/
    var colour = "yellow";
    var range, sel;
    if (window.getSelection) {
        // IE9 and non-IE
        try {
            if (!document.execCommand("BackColor", false, colour)) {
                makeEditableAndHighlight(colour);
            }
        } catch (ex) {
            makeEditableAndHighlight(colour)
        }
    } else if (document.selection && document.selection.createRange) {
        // IE <= 8 case
        range = document.selection.createRange();
        range.execCommand("BackColor", false, colour);
    }
     
     getselectedtext();
}

function makeEditableAndHighlight(colour) {
    sel = window.getSelection();
    if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0);
    }
    document.designMode = "on";
    if (range) {
        sel.removeAllRanges();
        sel.addRange(range);
    }
    // Use HiliteColor since some browsers apply BackColor to the whole block
    if (!document.execCommand("HiliteColor", false, colour)) {
        document.execCommand("BackColor", false, colour);
    }
    document.designMode = "off";
}
        
function getselectedtext(){
    /*if (window.getSelection) {
        var selectedtext = window.getSelection().toString();
        console.log(selectedtext);
        input_note_annot.value = selectedtext;
    } else if (document.selection && document.selection.type == "Text") {
        var selectedtext = document.selection.createRange().text;
        console.log(selectedtext);
        input_note_annot.value = selectedtext;
    }*/
    var text = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            text = container.innerText;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            text = document.selection.createRange().innerText;
        }
    }
    console.log(text);
    annotation.sel = text;
    input_note_annot.value = text;
    
    hide_all_views();
    section_annotation.style.display = "block";
    set_annotation_content();
    $('.sidenav').sidenav('open');
    input_note_annot.focus();
}

// Media Player 
function initialiseMediaPlayer() {
   mediaPlayer = document.getElementById('media-video');
   mediaPlayer.controls = false;
}

function togglePlayPause() {
   var btn = document.getElementById('play-pause-button');
   if (mediaPlayer.paused || mediaPlayer.ended) {
      btn.title = 'pause';
      btn.innerHTML = '<i class="material-icons">pause</i>';
      btn.className = 'stop btn-floating btn-small waves-effect red waves-light';
      mediaPlayer.play();
   }
   else {
      btn.title = 'play';
      btn.innerHTML = '<i class="material-icons">play_arrow</i>';
      btn.className = 'play btn-floating btn-small waves-effect red waves-light';
      mediaPlayer.pause();
   }
}

function changeButtonType(btn, title_value, innerHTML_value, className_value) {
   btn.title = title_value;
   btn.innerHTML = innerHTML_value;
   btn.className = className_value;
}

function stopPlayer() {
   mediaPlayer.pause();
   mediaPlayer.currentTime = 0;
}

function changeVolume(direction) {
   if (direction === '+') mediaPlayer.volume += mediaPlayer.volume == 1 ? 0 : 0.1;
   else mediaPlayer.volume -= (mediaPlayer.volume == 0 ? 0 : 0.1);
   mediaPlayer.volume = parseFloat(mediaPlayer.volume).toFixed(1);
}

function toggleMute() {
   var btn = document.getElementById('mute-button');
   if (mediaPlayer.muted) {
      changeButtonType(btn, 'mute',  '<i class="material-icons">volume_mute</i>', 'mute btn-floating btn-small waves-effect red waves-light');
      mediaPlayer.muted = false;
   }
   else {
      changeButtonType(btn, 'unmute','<i class="material-icons">volume_up</i>', 'mute btn-floating btn-small waves-effect red waves-light');
      mediaPlayer.muted = true;
   }
}

function replayMedia() {
   resetPlayer();
   mediaPlayer.play();
}

function updateProgressBar() {
   var percentage = Math.floor((100 / mediaPlayer.duration) *
   mediaPlayer.currentTime);
   progressBar.style.width = percentage + "%";
   media_visualization_playhead.style.left = (percentage/100 * 445)+"px";
}

function resetPlayer() {
   progressBar.style.width = 0;
   mediaPlayer.currentTime = 0;
   changeButtonType(playPauseBtn, 'play');
}



