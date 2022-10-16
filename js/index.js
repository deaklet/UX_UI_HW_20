$(document).ready(function(){  
    $(".home").hover(function(){  
      $(this).attr('src','images/grey-home.png');  
      }, function(){  
      $(this).attr('src','images/tattoo.png');  
    });  
  });  

$(document).ready(function(){  
    $('.home').mousedown(function(){
    $(this).attr('src', 'images/pink-home.png');
});
});  

$(document).ready(function(){  
    $('.home').mouseup(function(){
    $(this).attr('src', 'images/grey-home.png');
});
});  