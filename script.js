//$(function(){
    //$("#panel1").toggle(1000).hide(3000).show(2000);
//});

//$(function(){
    //$("#panel2").toggle(1000).fadeTo(1000, 0).fadeTo(2000, 8);
//})

//$(function(){
    //$("#panel3").toggle(1000).collapsing(1000).collapse(1000).collapsein(1500);
//})

//$(function(){
    //$("#panel4").toggle(1000).fadeTo(1000, .3).collapsing(2000).extend().fadeIn(2000, 100);
//})


$("#panel1").css({
    "background-color": "blue",
    "color": "white"
})

$("#panel1-heading").css({
    "background-color": "lightblue"
})

$("#panel2").css({
    "background-color": "green",
    "color": "white",
    "font-weight": "bold"
})

$("#panel2-heading").css({
    "background-color": "lightblue"
})

$("#panel3").css({
    "background-color": "darkgrey",
    "color": "black",
    "font-family": "monospace"
})

$("#panel3-heading").css({
    "background-color": "lightblue"
})

$("#panel4").css({
    "background-color": "red",
    "color": "white",
    "font-family": "sans serif",
    "font-weight": "bold"
})

$("#panel4-heading").css({
    "background-color": "blue",
    "text-decoration": "underline"
})

$("#panel1").prepend("<div>#panel1</div>");
$("#panel1-content").html("<div>The background is blu7e andf the text is white</div>");

$("#panel2").prepend("<div>#panel2</div>");
$("#panel2-content").append("<div>The background is green and the text is white and the font is bold</div>");

$("#panel3").prepend("<div>#panel3</div>");
$("#panel3-content").append("<div>The background is darkgrey and the text is black and the font family is monospace including panel content</div>");

$("#panel4").prepend("<div>#panel4</div>");
$("#panel4-content").append("<div>The panel is whitre with black text the heading is blue with white text and underline with bold text, the content is red with white text and sans font</div>");

//$("#button1").on("click", function() {
    //$("#panel1").fadeToggle(1000);
//})
//
//$("#button2").on("click", function() {
    //let rng = Math.floor(Math.random()* (6000 - 1000) + 1000);
    //$("#panel2").hide(500).delay(rng).show(500);
    //$("#panel2-heading").html(`${rng} miliseconds`);
//})

//$("#button3").on("mouseover", function() {
    //$("#panel3").fadeOut(1000);
    //$("#panel4").fadeOut(1000);
//})

//$("#button4").on("mouseover", function() {
    //$("#panel3").fadeIn(1000);
    //$("#panel4").fadeIn(1000);
//})

//$("#button1").on("click", function() {
    //$("#panel1").toggle(1000);
    //$("#panel4").toggle(1000);
//})

//$("#button2").on("click", function() {
    //$("#panel2").toggle(1000);
    //$("#panel3").toggle(1000);
    //$("#panel4").toggle(1000);
//})

//$("#button3").on("click", function() {
    //$("#panel1").toggle(1000);
    //$("#panel3").toggle(1000);
//})

//$("#button4").on("click", function() {
    //$("#panel1").toggle(1000);
    //$("#panel2").toggle(1000);
//})

//$('button').on('click', function(){
    //let panelId = $(this).attr('panelid');
    //$("#panel" + panelId).toggle(1000);
    //$(`#panel${panelId} .panel-heading`).html(`This changed`);
//})


//$("#button").on("click", function() {
    //let panelId = $(this).attr('panelid');
    //$("#panel" + panelId).css({
        //"background-color": "orange"
    //});
//})




$('li').on("click", function(){
    $(this).closest('.list').find('li').filter('highlight').removeClass('highlight');
    $(this).addClass('highlight');
})
