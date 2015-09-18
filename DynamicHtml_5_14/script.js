$(document).ready(function(){
    $('#one').after('<p>Any text you like</p>');
    $('#two').after($('p'));
    $('p').remove();
});