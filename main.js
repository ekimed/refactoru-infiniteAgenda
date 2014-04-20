
$(document).on('ready', function() {
   //loads 7 days
   loadDays(7);

   //add event form pops up (lightbox)
   $('.container').on('click', 'button', function(event){
   		event.preventDefault();
   		$(event.target).parent().addClass('selected');
   		$('.pop').css('display', 'block');
   		$('.event-title').focus();
   		
   });

   //submit form populates div where button was clicked
   $('.pop').on('submit', function(e){
   		e.preventDefault();

   		//add event information to day
   		var title1 = title();
   		var description1 = description();
   		$('.selected').append('<div class="title">'+title1+'</div',
   								'<div class="event-descript">'+description1+'</div>');

		//remove class selected from element that triggered form display
   		$('div').removeClass('selected');

   		//hide and rest form
   		$('.pop').css('display', 'none');
   		$('#new-event').get(0).reset();
   });

   //infinite scroll--adds 3 more days when scroll reaches end of page
   $(window).scroll(function(){
   	   if ($(window).scrollTop() + $(window).height() == $(document).height()){
   		loadDays(3);
   }

   })

});