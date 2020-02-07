let date = new Date();


// One is added to the date.getDay() because JS is a 0 index language, meaning when date.getDay() is done it 
// starts at 0 for sunday, this way there is less confusion when programming
// let day = date.getDay() + 1;

let day = date.getDay() + 1;

switch (day) {
    case 1:
        $(".marionSpecial").replaceWith("<p class='marionSpecial articleContent'> 16 inch (XL) Pizza with two items for $11.49 </p>");
        $("#changeToBR").replaceWith("<br>");
        $(".marionSeconadrySpecial").replaceWith("<p class='marionSeconadrySpecial articleContent'> Buy one 12 inch (medium) get the second half off. </p>")
        break;
    case 2:
    case 3:
        $(".marionSpecial").replaceWith("<p class='marionSpecial articleContent'> 14 inch one item Pizza for $9.99 </p>");
        break;
    case 4:
        $(".marionSpecial").replaceWith("<p class='marionSpecial articleContent'> 14 inch one item & two Dinner Salads for $13.25 </p>");
        $("#changeToBR").replaceWith("<br>");
        $(".marionSeconadrySpecial").replaceWith("<p class='marionSeconadrySpecial articleContent'> Buy one slice of pizza, get the second for $1.25. </p>")
        break;
    case 5:
        $(".marionSpecial").replaceWith("<p class='marionSpecial articleContent'> 14 inch one item Pizza for 9.99 </p>");
        $("#changeToBR").replaceWith("<br>");
        $(".marionSeconadrySpecial").replaceWith("<p class='marionSeconadrySpecial articleContent'> Nacho Supreme for $3.49 </p>")

        break;
    case 6:
        $(".marionSpecial").replaceWith("<p class='marionSpecial articleContent'> 16 inch (XL) Pizza for $9.99. </p>");
        break;
    case 7:
        $(".marionSpecial").replaceWith("<p class='marionSpecial articleContent'> Two 14 inch Pizzas and 4 breadsticks for 18.00 </p>");
        break;
}

const delawareConstantSpecial = "14 inch Pizza with one topping and 4 breadsticks for $10.49";

switch (day) {
    case 1:
        $(".delawareSpecial").replaceWith("<p class='delawareSpecial articleContent'> 14 inch Pizza with 2 items for $9.99 </p>");
        break;
    case 2:
    case 3:
        $(".delawareSpecial").replaceWith("<p class='delawareSpecial articleContent'> 14 inch Pizza with 1 topping and 4 breadsticks for $10.49 </p>");
        break;
    case 4:
        $(".delawareSpecial").replaceWith("<p class='delawareSpecial articleContent'> 16 inch Pizza with item for $9.99 </p>");
        break;
    case 5:
        $(".delawareSpecial").replaceWith("<p class='delawareSpecial articleContent'> 14 inch Pizza with 2 item for $9.99 </p>");
        break;
    case 6:
        $(".delawareSpecial").replaceWith("<p class='delawareSpecial articleContent'> 16 inch 1 item Pizza for $9.99 </p>");
        break;
    case 7:
        $(".delawareSpecial").replaceWith("<p class='delawareSpecial articleContent'> Two 14 inch Pizza with one topping and 4 breadsticks for $18.00 </p>");
}