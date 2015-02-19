$(document).ready(function() {
	
	/*============================================
	Page Preloader
	==============================================*/
	
	$(window).load(function(){
		$('#page-loader').fadeOut(500,function(){
			loadGmap();
		});
		
	})	
	
});