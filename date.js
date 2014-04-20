
//creates date object containing n number of days
var getDate = function(numberOfDays){
  	var dateObject = {};
	for(var i = 0; i < numberOfDays; i++){
		var date = new Date();
		var dayOfMonth = date.getDate();
		dayOfMonth = dayOfMonth + i;
		date.setDate(dayOfMonth);
		dateObject[i] = date;  		
	}
	return dateObject;
}

//populates each .date selector with current date 
var insertDate = function (numberOfDays) {
	dateObject = getDate(numberOfDays);
	$('.date').each(function(index){
		var dateText = dateObject[index];
		$(this).text(dateText);
		});

};