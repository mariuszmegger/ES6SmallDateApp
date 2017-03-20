"use-strict";

$(document).ready(function(){
	// get person details form database and and create template.
	let friendId = 1;
	let friend = new Friend(friendId);
	let chat = new Chat();

	$('.addFriend').on('click',function(){
		friend.checkFriend();
	});
	chat.getChatWindowHeight();
	chat.writeChatMessagesAtStart();

	$('.messageInput').keypress(function(e) {
		if(e.which == 13) {
			chat.addChatMessages();
		}
	})

})
