// Context menu event listener for highlights
window.addEventListener("contextmenu", e => {
  e.preventDefault();
  const origin = {
    left: e.pageX,
    top: e.pageY
  };
  setPosition(origin);
  return false;
});

menu_close.addEventListener("click", function(){
    //console.log("close");
    //if(menuVisible)toggleMenu("hide");
    menu.style.display = "none";
});

menu_note.addEventListener('click', function(){
    //console.log("take a note"); 
    highlight_text();
});

menu_discuss.addEventListener('click', function(){
    //console.log("discuss with peers");
    set_discussion_post();
});

document.addEventListener('selectionchange', () => { 
  //let element = document.createElement("span");
 //window.getSelection().getRangeAt(0).surroundContents(element);
  const serializer = new XMLSerializer();
  document_fragment_string = serializer.serializeToString(window.getSelection().getRangeAt(0).cloneContents());
  var html = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            html = container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            html = document.selection.createRange().htmlText;
        }
    }
    //console.log(html);
});

// Submit an annotation
btn_submit_note.addEventListener('click',function(){
    post_annotation();
});

// Submit a discussion forum post
btn_submit_message.addEventListener('click',function(){
    post_discussion_forum();
    
});

// Settings button clicked - Show section
btn_settings.addEventListener('click',function(){
    hide_all_views();
    section_authentification.style.display = "block";
});

// Annotation button clicked - Show section
btn_note.addEventListener('click',function(){
    
    prompt_delivery();
    
    hide_all_views();
    section_annotation.style.display = "block";
    set_annotation_content(annotation_index);
});

// Discussion forum button clicked - Show section
btn_forum.addEventListener('click',function(){
    
    prompt_delivery();
    
    hide_all_views();
    section_forum.style.display = "block";
    set_forum_content(forum_index);
});

// Tutorial buttons - Show title and description for each step 
btn_1.addEventListener('click',function(){
    set_tutorial_content(1);
});

btn_2.addEventListener('click',function(){
    set_tutorial_content(2);
});

btn_3.addEventListener('click',function(){
    set_tutorial_content(3);
});

btn_4.addEventListener('click',function(){
    set_tutorial_content(4);
});

btn_5.addEventListener('click',function(){
    set_tutorial_content(5);
});

input_per1.addEventListener('click',function(){
    set_user_persona("asset/per1.png");
});

input_per2.addEventListener('click',function(){
    set_user_persona("asset/per2.png");
});

input_per3.addEventListener('click',function(){
    set_user_persona("asset/per3.png");
});

input_per4.addEventListener('click',function(){
    set_user_persona("asset/per4.png");
});

input_per5.addEventListener('click',function(){
    set_user_persona("asset/per5.png");
});

input_per6.addEventListener('click',function(){
    set_user_persona("asset/per6.png");
});

input_per7.addEventListener('click',function(){
    set_user_persona("asset/per7.png");
});

input_per8.addEventListener('click',function(){
    set_user_persona("asset/per8.png");
});

input_per9.addEventListener('click',function(){
    set_user_persona("asset/per9.png");
});

input_marker_switch.addEventListener('click',function(){
   check_marker();
});

btn_decrement_forumindex.addEventListener('click',function(){
    forum_index = forum_index - 1;
    if(forum_index < 0){
        forum_index = 0;
    }
    console.log(forum_index);
    set_forum_content(forum_index);
});

btn_increment_forumindex.addEventListener('click', function(){
    forum_index = forum_index + 1;
    if((forum_index+5) > forum_list.length){
        forum_index = forum_index - 1;
    }
    console.log(forum_index);
    set_forum_content(forum_index);
});

btn_decrement_annotationindex.addEventListener('click',function(){
    annotation_index = annotation_index - 1;
    if(annotation_index < 0){
        annotation_index = 0;
    }
    console.log(annotation_index);
    set_annotation_content(annotation_index);
});

btn_increment_annotationindex.addEventListener('click',function(){
    annotation_index = annotation_index + 1;
    if((annotation_index+3) > annotation_list.length){
        annotation_index = annotation_index - 1;
    }
    console.log(annotation_index);
    set_annotation_content(annotation_index);
});

input_discussion_topic.addEventListener('click',function(){
    set_forum_content(forum_index);
    console.log(input_discussion_topic.value);
});




