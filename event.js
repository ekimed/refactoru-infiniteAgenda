//stores form input values
var eventInfo = function (){
	var eventTitle = $('.event-title').val();
	var eventHour = $('.choose-hour').val();
	var eventMin = $('.choose-min').val();
	var eventAmPm = $('.choose-amPm').val();
	var eventTime = eventHour + ':'+ eventMin + ' '+ eventAmPm;
	var description = $('.description').val();

	var eventObject = {};

	eventObject['title'] = eventTitle;
	eventObject['time'] = eventTime;
	eventObject['description'] = description;

	return eventObject;
};

//construct event text for input into agenda
var title = function(){
	var eventObject = eventInfo();
	return eventObject['title'] + ' (@' + eventObject['time'] + ') ';
};

var description = function(){
	var eventObject = eventInfo();
	return eventObject['description'];
};