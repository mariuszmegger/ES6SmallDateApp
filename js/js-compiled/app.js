'use strict';
"use-strict";

$(document).ready(function () {
	// get person details form database and and create template.
	var friendId = 1;
	var friend = new Friend(friendId);
	var chat = new Chat();

	$('.addFriend').on('click', function () {
		friend.checkFriend();
	});
	chat.getChatWindowHeight();
	chat.writeChatMessagesAtStart();

	$('.messageInput').keypress(function (e) {
		if (e.which == 13) {
			chat.addChatMessages();
		}
	});
});