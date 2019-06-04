
$(function () {  
	$('div.userid').click(function() { 
　　　　$(this).next('ul').slideToggle(); 
　　});	
});


$(function () {
    $('#nav .btn').on('click', function () {
        $('#nav .menu-trigger').toggleClass('active');
        return false;
    });
});



$(function () {
    $('#nav .btn').on('click', function () {
        $("#nav").toggleClass('nav-close');
		$(".content-area").toggleClass('nav-close');
        return false;
    });
});


$(function(){
  $("ul.s-nav").hide();
  $("ul.nav").on("click", "li.nav-db", function() {
    $(this).next().slideToggle()
      .end().toggleClass("open");
  });
});

$(function(){
	var linkList = $('.nav li:not(.nav-db)');
	linkList.on('click', function () {
		linkList.removeClass('active');
		$(this).addClass('active');
	});
});


$(function(){
$("#modal-open-contentview").click(function(){
	$("body").append('<div id="modal-overlay-dark"></div>');
	$("#modal-overlay-dark").fadeIn("slow");
	centeringModalSyncer();
	$("#modal-content-view").fadeIn("slow");
	$("#modal-overlay-dark,.btn_close_dialog,.dialog-footer button").unbind().click(function(){
		$("#modal-content-view,#modal-overlay-dark").fadeOut("slow",function(){
			$('#modal-overlay-dark').remove();
		});
	});
});
$(window).resize(centeringModalSyncer);
	function centeringModalSyncer(){
		var w = $(window).width();
		var h = $(window).height();
		var cw = $("#modal-content-view").outerWidth({margin:true});
		var ch = $("#modal-content-view").outerHeight({margin:true});
		$("#modal-content-view").css({"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"})
	}
});

$(function(){  
    var left = Math.floor(($(window).width() - $("#modal-content-view").width()) / 2);  
    var top  = Math.floor(($(window).height() - $("#modal-content-view").height()) / 2);  
    $("#modal-content-view")  
        .css({  
            "top": top,  
            "left": left,  
         })  
}); 

$(function () {  
	$('#change-id').click(function() { 
　　　　document.getElementById('change-id-form').style.display = "block";
			$(this).attr('disabled', true);
　　});	
});

$(function () {  
	$('#change-id-cancel').click(function() { 
　　　　document.getElementById('change-id-form').style.display = "none";
			$('#change-id').attr('disabled', false);
　　});	
});


$(function () {  
	$('#change-password').click(function() { 
　　　　document.getElementById('change-password-form').style.display = "block";
			document.getElementById('change-password').style.display = "none";
　　});	
});

$(function () {  
	$('#change-password-cancel').click(function() { 
　　　　document.getElementById('change-password-form').style.display = "none";
			document.getElementById('change-password').style.display = "block";
　　});	
});


$(function () {  
	if($(".manage-list li").hasClass("list-myaccount")){
　　　　$(".list-myaccount input").attr('disabled', true);
	}
});


$(function() {
  $('.switch-action').on('change', function(){
    if ($(this).is(':checked')) {
    		$(this).parent().parent().parent().addClass('active');
    } else {
		$(this).parent().parent().parent().removeClass('active');
    }
  });
});