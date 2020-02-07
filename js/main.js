// TODO Add screen querries


// Tab Ruling
function homePress() {
    // REQUIRES IF STATEMENT
    $("#home").css("display", "flex");

    $("#marion").css("display", "flex");
    $("#delaware").css("display", "flex")

    $("#orderDelaware").hide();
    $("#orderMarion").hide();


}

function marionPress() {
    // REQUIRES IF STATEMENT
    $("#orderMarion").css("display", "flex");

    // Does not require if statement
    $("#orderDelaware").hide();
    $("#home").hide();

    $("#marion").css("display", "flex");
    $("#delaware").hide();
}

function delawarePress() {
    // REQUIRES IF STATEMENT
    $("#orderDelaware").css("display", "flex");

    // Does not require if statement
    $("#orderMarion").hide();
    $("#home").hide();

    $("#marion").hide();
    $("#delaware").css("display", "flex");
}

// Accordion Ruling
// let acc = $(".accordion");
// var i;

function accordion() {
    console.log("I was Clicked!");
    // Removing any active tags

    $(".accordion").css("border-bottom", "none");
    $(".accordion").css("border-left", "5px solid #0A710A")
        // Toggling the panel
    $(".panel").hide();
    $(".accordion").removeClass("active");

    $(this).addClass("active");
    $(this).css("border-left", "none");
    $(this).css("border-bottom", "2.5px solid #0A710A");
    $(this).next().css("display", "flex");

}

var acc = $(".accordion");
var accMenu = $(".accordionMenu");
var i;
var j;


for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        console.log("I was also clicked!");

        // Removing any active tags
        if ($(this).hasClass("active")) {
            // Chaning the styling for the accordion
            $(".accordion").css("border-bottom", "none");
            $(".accordion").css("border-left", "5px solid #0A710A")
            $(".accordionMenu").css("border-bottom", "none");
            $(".accordionMenu").css("border-left", "5px solid #0A710A")
                // Hiding and removing the active panel
            $(".panel").hide();
            $(".accordion").removeClass("active");
            $(".accordion").css("border-bottom", "none");
            $(".accordion").css("border-left", "5px solid #0A710A")
            $(".accordionMenu").css("border-bottom", "none");
            $(".accordionMenu").css("border-left", "5px solid #0A710A")
            $(".panel").hide();
            $(".accordion").removeClass("active");
        } else {


            // Chaning the styling for the accordion
            $(".accordion").css("border-bottom", "none");
            $(".accordion").css("border-left", "5px solid #0A710A")
            $(".accordionMenu").css("border-bottom", "none");
            $(".accordionMenu").css("border-left", "5px solid #0A710A")
                // Hiding and removing the active panel
            $(".panel").hide();
            $(".accordion").removeClass("active");
            $(".accordion").css("border-bottom", "none");
            $(".accordion").css("border-left", "5px solid #0A710A")
            $(".accordionMenu").css("border-bottom", "none");
            $(".accordionMenu").css("border-left", "5px solid #0A710A")
            $(".panel").hide();
            $(".accordion").removeClass("active");

            // Opening the panel
            $(this).addClass("active");
            $(this).css("border-left", "none");
            $(this).css("border-bottom", "2.5px solid #0A710A");
            $(this).next().css("display", "flex");
        }
    });
}

for (j = 0; j < accMenu.length; j++) {
    // This for loop goes through for accordions embedded in accordions for the menus
    accMenu[j].addEventListener("click", function() {
        console.log("I was also clicked!");
        // Removing any active tags

        $(this).addClass("active");
        $(this).css("border-left", "none");
        $(this).css("border-bottom", "2.5px solid #0A710A");
        $(this).next().css("display", "flex");
    });
}

if ($("#logo").css("width") < "22em") {
    alert("Im working!");
    $("#mobile").hide();
    $("#desktop").mobile();
}