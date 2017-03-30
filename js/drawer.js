$(function () {
    //when they click the hamburger button, the left drawer will open and background will darken
    $(".header-menu").click(function() {
        $(".nav-background-cover").css("display", "block");
        $(".nav-menu").animate({
            left: 0,
          }, 200);
        $(".nav-background-cover").animate({
            opacity: 0.6,
        }, 200);
    });

    //when they click anywhere in the gray area, the menu drawer will minimize and the gray area will dissapear
    $(".nav-background-cover").click(function() {

        $(".nav-menu").animate({
            left: -250,
          }, 250);
        $(".nav-background-cover").animate({
            opacity: 0,
        }, 250, function(){
            $(".nav-background-cover").css("display", "none");
        });
    });

    //Check to see what is currently the active link, and make the icon blue
    $( ".menu-link" ).each(function() {
        if(window.location.pathname == "/index.html" && $(this).text() == "Home"){
            $(".fa-home").css("color", "#2574A9");
        }
    });

    $('#rating').on("change mousemove", function() {
        if($(this).val() == 1){
            $('.poll-stars').html('&#9733;');
        }else if($(this).val() == 2){
            $('.poll-stars').html('&#9733; &#9733;');
        }else if($(this).val() == 3){
            $('.poll-stars').html('&#9733; &#9733; &#9733;');
        }else if($(this).val() == 4){
            $('.poll-stars').html('&#9733; &#9733; &#9733; &#9733;');
        }else if($(this).val() == 5){
            $('.poll-stars').html('&#9733; &#9733; &#9733; &#9733; &#9733;');
        }
    });
})
