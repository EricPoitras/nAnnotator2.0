// Variables
var persona_src = '';
var time_marker = false;
var forum_index = 0;
var annotation_index = 0;

// Buttons
var btn_menu = document.getElementById("btn_menu");
var btn_settings = document.getElementById("btn_settings");
var btn_note = document.getElementById("btn_note");
var btn_forum = document.getElementById("btn_forum");
var btn_close = document.getElementById("btn_close");
var btn_submit_note = document.getElementById("btn_submit_note");
var btn_submit_message = document.getElementById("btn_submit_message");

var btn_decrement_forumindex = document.getElementById("btn_decrement_forumindex");
var btn_increment_forumindex = document.getElementById("btn_increment_forumindex");
var btn_decrement_annotationindex = document.getElementById("btn_decrement_annotationindex");
var btn_increment_annotationindex = document.getElementById("btn_increment_annotationindex");

// Inputs
var input_title_annot = document.getElementById("input_title_annot");
var input_note_annot = document.getElementById("input_note_annot");
var input_message_forum = document.getElementById("input_message_forum");
var input_marker_switch = document.getElementById("input_marker_switch");
var input_discussion_topic = document.getElementById("input_discussion_topic");

// Sections
var section_authentification = document.getElementById("section_authentification");
var section_forum = document.getElementById("section_forum");
var section_annotation = document.getElementById("section_annotation");

// Containers
var cont_annotation = document.getElementById("cont_annotation");
var cont_forum = document.getElementById("cont_forum");
var cont_message1 = document.getElementById("cont_message1");
var cont_message2 = document.getElementById("cont_message2");
var cont_message3 = document.getElementById("cont_message3");
var cont_message4 = document.getElementById("cont_message4");
var cont_message5 = document.getElementById("cont_message5");

var cont_annotation1 = document.getElementById("cont_annotation1");
var cont_annotation2 = document.getElementById("cont_annotation2");
var cont_annotation3 = document.getElementById("cont_annotation3");

// Tutorial Content
var tutorial_title = document.getElementById("tutorial_title");
var tutorial_description = document.getElementById("tutorial_description");

// Tutorial Pagination
var btn_1 = document.getElementById("btn_1");
var btn_2 = document.getElementById("btn_2");
var btn_3 = document.getElementById("btn_3");
var btn_4 = document.getElementById("btn_4");
var btn_5 = document.getElementById("btn_5");

// Container Pagination Components
var cont_btn_1 = document.getElementById("cont_btn_1");
var cont_btn_2 = document.getElementById("cont_btn_2");
var cont_btn_3 = document.getElementById("cont_btn_3");
var cont_btn_4 = document.getElementById("cont_btn_4");
var cont_btn_5 = document.getElementById("cont_btn_5");

// Settings User Persona
var input_per1 = document.getElementById("input_per1");
var input_per2 = document.getElementById("input_per2");
var input_per3 = document.getElementById("input_per3");
var input_per4 = document.getElementById("input_per4");
var input_per5 = document.getElementById("input_per5");
var input_per6 = document.getElementById("input_per6");
var input_per7 = document.getElementById("input_per7");
var input_per8 = document.getElementById("input_per8");
var input_per9 = document.getElementById("input_per9");

// Context menu
const menu = document.querySelector(".menu");
//let menuVisible = false;
var menu_note = document.getElementById("menu_note");
var menu_discuss = document.getElementById("menu_discuss");
var menu_close = document.getElementById("menu_close");
var top;
var left;
var document_fragment_string;

// Media Player
var mediaPlayer;
var progressBar = document.getElementById('progress-bar');
var media_visualization = document.getElementById("media-visualization");
var media_visualization_playhead = document.getElementById("media-visualization-playhead");

// HTML Elements Annotation
var img_message1 = document.getElementById("img_message1");
var img_message2 = document.getElementById("img_message2");
var img_message3 = document.getElementById("img_message3");
var img_message4 = document.getElementById("img_message4");
var img_message5 = document.getElementById("img_message5");

var user_message1 = document.getElementById("user_message1");
var user_message2 = document.getElementById("user_message2");
var user_message3 = document.getElementById("user_message3");
var user_message4 = document.getElementById("user_message4");
var user_message5 = document.getElementById("user_message5");

var text_message1 = document.getElementById("text_message1");
var text_message2 = document.getElementById("text_message2");
var text_message3 = document.getElementById("text_message3");
var text_message4 = document.getElementById("text_message4");
var text_message5 = document.getElementById("text_message5");

var array_img = [img_message1, img_message2, img_message3, img_message4, img_message5];
var array_text = [text_message1, text_message2, text_message3, text_message4, text_message5];
var array_cont = [cont_message1, cont_message2, cont_message3, cont_message4, cont_message5];
   
// HTML Elements Discusssion Forum

var title_annotation1 = document.getElementById("title_annotation1");
var title_annotation2 = document.getElementById("title_annotation2");
var title_annotation3 = document.getElementById("title_annotation3");

var text_annotation1 = document.getElementById("text_annotation1");
var text_annotation2 = document.getElementById("text_annotation2");
var text_annotation3 = document.getElementById("text_annotation3");

var user_annotation1 = document.getElementById("user_annotation1");
var user_annotation2 = document.getElementById("user_annotation2");
var user_annotation3 = document.getElementById("user_annotation3");

var array_annot_title = [title_annotation1,title_annotation2,title_annotation3];
var array_annot_text = [text_annotation1, text_annotation2, text_annotation3];
var array_annot_user = [user_annotation1, user_annotation2, user_annotation3];
var array_annot_cont = [cont_annotation1, cont_annotation2, cont_annotation3];





