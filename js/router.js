// Set Tutorial Content Step
function set_tutorial_content(step){
    switch(step){
        case 1:
            console.log("Tutorial step 1");
            set_tutorial_message("nAnnotator","How to get started...");
            reset_active_tutorial();        
            cont_btn_1.classList.add("active");
            break;
        case 2:
            console.log("Tutorial step 2");
            set_tutorial_message("Sign In","Choose Sign In to begin annotating the document.");
            reset_active_tutorial();
            cont_btn_2.classList.add("active");
            break;
        case 3:
            console.log("Tutorial step 3");
            set_tutorial_message("Notes","You can edit activities in the lesson by creating notes.");
            reset_active_tutorial();
            cont_btn_3.classList.add("active");
            break;
        case 4:
            console.log("Tutorial step 4");
            set_tutorial_message("Discussion Forum","You can review and discuss lesson activities using the discussion forum.");
            reset_active_tutorial();
            cont_btn_4.classList.add("active");
            break;
        case 5:
            console.log("Tutorial step 5");
            set_tutorial_message("Setting Up Your Account","Hover the mouse cursor over the annotate button and click the settings icon to the top.");
            reset_active_tutorial();
            cont_btn_5.classList.add("active");
            break;
        default:
            console.log("Error set_tutorial_content() step parameter not recognized.");
            break;
    }
}

// Set Tutorial Content Message
function set_tutorial_message(title,message){
    tutorial_title.textContent = title;
    tutorial_description.textContent = message;
}

// Reset Active Tutorial Step
function reset_active_tutorial(){
    cont_btn_1.classList.remove("active");
    cont_btn_2.classList.remove("active");
    cont_btn_3.classList.remove("active");
    cont_btn_4.classList.remove("active");
    cont_btn_5.classList.remove("active");
}