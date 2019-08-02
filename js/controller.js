// TO DO: Filter the data lists once read from Firebase for url AND annotations written by users

// TO DO: Set the content of prompts with Tracy and Laurel
function prompt_delivery(){
    // Construct the prompt and deliver toast
    var toastHTML = '<span>I am an example of a prompt</span><button class="btn-flat toast-action">Learn More</button>';
    M.toast({html: toastHTML});
}

function set_markers(){
    var remove_markers = media_visualization.getElementsByClassName("media-visualization-discussion");
    while(remove_markers[0]){
        remove_markers[0].parentNode.removeChild(remove_markers[0]);         
    }
    
    for(var i = 0; i < forum_list.length; i++){
        if(forum_list[i].topic == input_discussion_topic.value){
            var node = document.createElement("DIV");
            node.style.left = (forum_list[i].marker/100 * 445) + "px";
            node.classList.add("media-visualization-discussion");
            media_visualization.appendChild(node);
        }
    }
}

function set_forum_content(index){
    console.log(index);
    console.log(input_discussion_topic.value);
    
    var array_filter = [];
    
    for(var i = 0; i < forum_list.length; i++){
        if(forum_list[i].topic == input_discussion_topic.value){
            array_filter.push({
               user: forum_list[i].user,
               text: forum_list[i].text,
               topic: forum_list[i].topic,
               persona: forum_list[i].persona,
               url: forum_list[i].url,
               session: forum_list[i].session,
               time: forum_list[i].time,
               marker: forum_list[i].marker
            });
        }
    }
    console.log(array_filter);
    
    for(var i = 0; i < 5; i++){
        try{
            array_img[i].src = array_filter[i+index].persona;
            array_text[i].innerHTML = "<span style='font-weight:bold;'>"+array_filter[i+index].user +": </span>"+ array_filter[i+index].text;
            if(config.instructor.includes(array_filter[i+index].user)){
                array_cont[i].className = "";
                array_cont[i].classList.add("offset-s2","col","s10");
            }else{
                array_cont[i].className = "";
                array_cont[i].classList.add("col","s10");
            }
            array_cont[i].style.display = "block"; 
        }catch{
            array_cont[i].style.display = "none";   
        }
    }
    set_markers();
}
            
function set_discussion_topics(){
    var array = [];
    for(var i = 0; i < forum_list.length; i++){
        if(array.includes(forum_list[i].topic)){
            // do nothing, move on to next item
        }else{
            array.push(forum_list[i].topic);
        }
    }
    console.log(array);
    array.forEach(function(element){
        // create new option element
        var opt = document.createElement('option');

        // create text node to add to option element (opt)
        opt.appendChild( document.createTextNode(element) );

        // set value property of opt
        opt.value = element; 
        
        input_discussion_topic.appendChild(opt);
    });
    
}
        
function set_annotation_content(index){
    for(var i = 0; i < 3; i++){
        try{
        array_annot_title[i].textContent = annotation_list[i+index].title;
        array_annot_text[i].textContent = annotation_list[i+index].text;
        array_annot_user[i].src = annotation_list[i+index].persona;
        array_annot_cont[i].style.display = "block";
        }catch{
        array_annot_cont[i].style.display = "none";
        }
    }
}

function post_discussion_forum(){
    var percentage = Math.floor((100 / mediaPlayer.duration) *
   mediaPlayer.currentTime);
   set_marker_time(time_marker,percentage);
    set_marker_time(time_marker,percentage);
    forum.user = config.user;
    forum.text = input_message_forum.value;
    forum.topic = input_discussion_topic.value;
    forum.persona = config.persona;
    forum.url = config.url;
    forum.session = config.session;
    var d = new Date();
    var time = d.getTime().toString();
    forum.time = time;
    //console.log(forum);
    
    forum_list.push({
        user: forum.user,
        text: forum.text,
        topic: forum.topic,
        persona: forum.persona,
        url: forum.url,
        session: forum.session,
        time: forum.time,
        marker: forum.marker
    });
    //console.log(forum_list);
    set_forum_content(forum_index);
}

function set_discussion_post(){
    //console.log("post discussion forum");
    hide_all_views();
    section_forum.style.display = "block";
    $('.sidenav').sidenav('open');
    set_forum_content(forum_index);
}

function check_marker(){
    if(time_marker == true){
       time_marker = false;
   }else{
       time_marker = true;
   }
   var percentage = Math.floor((100 / mediaPlayer.duration) *
   mediaPlayer.currentTime);
   set_marker_time(time_marker,percentage);
}

function set_marker_time(isswitchon, value){
    if(isswitchon == true){
        forum.marker = value;
    }else{
        forum.marker = 'N/A';
    }
    //console.log(forum.marker);
}

function post_annotation(){
    annotation.session = config.session;
    annotation.title = input_title_annot.value;
    annotation.text = input_note_annot.value;
    annotation.url = config.url;
    annotation.user = config.user;
    var d = new Date();
    var time = d.getTime().toString();
    annotation.time = time;
    annotation.persona = config.persona;
    //console.log(annotation);
    
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
    //console.log(annotation_list);
    set_annotation_content(annotation_index);
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
    //console.log(text);
    annotation.sel = text;
    input_note_annot.value = text;
    
    hide_all_views();
    section_annotation.style.display = "block";
    set_annotation_content(annotation_index);
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
   var btn = document.getElementById('play-pause-button');
   changeButtonType(btn, 'play', "<i class='material-icons'>play_arrow</i>",'play btn-floating btn-small waves-effect red waves-light');
}



