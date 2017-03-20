'use strict';
"use-strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INPUT = $('.messageInput');
var CHATBODY = $('.chatAppBody');
var CHATCONTAINER = $('.appContainer');

var Chat = function () {
	function Chat() {
		_classCallCheck(this, Chat);

		this.messages = [];
	}

	_createClass(Chat, [{
		key: 'getChatWindowHeight',
		value: function getChatWindowHeight() {
			var height = $(window).height();
			CHATCONTAINER.css('min-height', height + 'px');
			CHATBODY.css('min-height', height - 140 + 'px');
		}
	}, {
		key: 'checkSessionStorage',
		value: function checkSessionStorage() {
			// Lets check if its the first visit of user during his browser session or not
			if (sessionStorage.getItem('messages') !== null) {
				// If not hest chat messages form session storage
				this.messages = sessionStorage.getItem('messages').split(',');
			} else {
				// If yes create a random mesage and add it to session
				var randomMessage = this.getRandomMessage();
				this.addMessageToSessionStorage(randomMessage);
			}
		}
	}, {
		key: 'getRandomMessage',
		value: function getRandomMessage() {
			// Create random message for chat
			var randomMessagesArray = ['Random message 1', 'Random message 2', 'Random message 3', 'Random message 4'];
			return randomMessagesArray[Math.floor(Math.random() * randomMessagesArray.length)];
		}
	}, {
		key: 'addMessageToSessionStorage',
		value: function addMessageToSessionStorage(currentMessage) {
			// Add message to session storage
			this.messages.push(currentMessage);
			sessionStorage.setItem('messages', this.messages);
			this.writeChatMessages();
		}
	}, {
		key: 'writeChatMessages',
		value: function writeChatMessages() {
			// Write messages in chat window
			CHATBODY.html('');
			for (var i = 0, y = this.messages.length; i < y; i++) {
				if (i === 0) {
					CHATBODY.append('<div class="messageContainer messageContainerRight"><div class="messageText">' + this.messages[i] + '<span class="triangle-topleft"></span></div><div class="messageImage"><a href="index.php"><img src="images/girl.jpg"/></a><span class="statusDot"></span></div></div>');
				} else {
					CHATBODY.append('<div class="messageContainer messageContainerLeft"><div class="messageText">' + this.messages[i] + '<span class="triangle-topright"></span></div><div class="messageImage"><img src="images/mancl.jpg"/></div></div>');
				}
			}
			// Clear the message input
			INPUT.val('');
			// And scroll chat body to bottom
			this.animateChatToBottom();
		}
	}, {
		key: 'animateChatToBottom',
		value: function animateChatToBottom() {
			// Scroll chat body to bottom.
			CHATBODY.animate({
				scrollTop: CHATBODY.prop("scrollHeight")
			}, 100);
		}

		// Write chat messages after html loads

	}, {
		key: 'writeChatMessagesAtStart',
		value: function writeChatMessagesAtStart() {
			this.checkSessionStorage();
			this.writeChatMessages();
		}
		// Add new chat message and write all messages

	}, {
		key: 'addChatMessages',
		value: function addChatMessages() {
			this.checkSessionStorage();
			if (INPUT.val() !== '') {
				var currentMessage = INPUT.val();
				this.addMessageToSessionStorage(currentMessage);
			}
			this.writeChatMessages();
		}
	}]);

	return Chat;
}();