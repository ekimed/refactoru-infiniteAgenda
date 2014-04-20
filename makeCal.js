
//construct a calender day

var loadDays = function(numberOfDays){
	for(var i = 0; i <numberOfDays; i++){
		$('.container').append('<div class="day"></div>');
		$('.container').find('div:last-child').append('<p class="date"></p>')
							.append('<button>Add Event</button>');
	}

	var start = 0;
	datesToInsert = start + numberOfDays;
	insertDate(numberOfDays);
};
