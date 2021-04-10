$(function(){
  // INSTANTIATE MIXITUP
	$('#Grid').mixitup();
  $('.fancybox').fancybox({
    width: 965
  });
  
  //sets default category on page load
  $('.default-cat').trigger('click');
  // $('#Grid').mixitup('filter','category_1');
  
  //Gallery control dropdown: updates button with the active text and closes the dropdown after click 
  $('.f-dropdown li').on('click', function(){ 
    var selection = $('.controls .active').html();
    $('.dropdown').html(selection).trigger('click');
  });

  //update body class based on drop down
  function getBodyId() {
    var getSettingId = $('.filter.active').attr('id');
    return getSettingId;
  }
  
  function setBodyId(bodyId) {
    $('body').addClass(bodyId);
  }
  
  setBodyId(getBodyId());
  
  $('.f-dropdown li').click(function() {
    $('body').removeClass();
    setBodyId(getBodyId());
  });

}); //end of document onload

$(window).load(function(){
  setTimeout(function () {
    $('.fade-in').css({'opacity': "1"});
    }, 500);
});

