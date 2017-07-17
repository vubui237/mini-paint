$(document).ready(function() {
    // $('.box').on('click', function() {
    //     $(this).addClass('white');
    // })
    // $('.box').on('dblclick', function() {
    //     $(this).removeClass('white');
    // })
    // $('reset').on('click', function(){
    //     $('box').removeClass('white');
    // })
    var color = 'white';
    $('#red').on('click', function() {
        color = 'red';
        console.log("Changed to " + color)
    })
    $('#blue').on('click', function(){
        color = 'blue';
        console.log("Changed to " + color)
    })
    $('#green').on('click', function(){
        color = 'green';
        console.log("Changed to " + color)
    })
    $('#yellow').on('click', function(){
        color = 'yellow';
        console.log("Changed to " + color)
    })
    $('#white').on('click', function(){
        color = 'white';
        console.log("Changed to " + color)
    })
    $('.box').on('click', function() {
        $(this).addClass(color);
    })
     $('.box').on('dblclick', function() {
         $(this).removeClass(color);
    })
     $('#reset').on('click', function() {
        $('.box').removeClass(color)
    })
    
    // var colors = 'white green red blue yellow'
    //  $('.box').on('dblclick', function() {
    //      $(this).removeClass(colors);
    //  })

    // $('#reset').on('click', function() {
    //     $('.box').removeClass(colors)
    // })



});