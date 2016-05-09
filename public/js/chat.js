var chatForm = $("#chatform"),
	chats = $(".chats"),
	textarea = $('#message'),
	title=$('.titlebar'),
	titlebutton=$("#titleContainer"),
	detailed_activity = $('.detailedActivity'),
	footer=$('.footer');

var user = "Jack",
	img="public/img/unnamed.jpg";

var chatScreenHeight=0;

function loadTitle(msg){
	if(msg.length>20){
		msg=msg.substring(0,20)+"...";
	}
	titlebutton.append(msg);
}

function createChatMessage(msg,speakerName,imgg){

		var who = '';
		if(speakerName!==user) {
			who = 'me';
		}
		else {
			who = 'you';
		}

		var li = $(
			'<li class=' + who + '>'+
				'<div class="image">' +
					'<img src=' + imgg + ' />' +
					'<b></b>' +
				'</div>' +
				'<p></p>' +
			'</li>');

		// use the 'text' method to escape malicious user input
		li.find('p').text(msg);
		li.find('b').text(speakerName);

		console.log(chatScreenHeight);
		

		chats.append(li);
		chatScreenHeight+=li.height();
		scrollToBottom();
}

function scrollToBottom(){
	//console.log($(document).height());
	//console.log($(window).height());
	//$("html, body").animate({ scrollTop: $(document).height() },1000);
	
	$("html,body").animate({scrollTop:chatScreenHeight},1000);
}

//the send button on the bottom
$("#submit").click(function(){
	createChatMessage(textarea.val(),user,img);
	
	textarea.val("");
});
titlebutton.click(function(){
	detailed_activity.toggleClass('detailedActivity-show');
});
//loadTitle("Five Guys12345677990093485093845034850");