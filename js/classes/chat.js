"use-strict";

const INPUT = $('.messageInput');
const CHATBODY = $('.chatAppBody');
const CHATCONTAINER = $('.appContainer');
class Chat{
	constructor(){
		this.messages = [];
	}

	getChatWindowHeight() {
			let height = $(window).height();
			CHATCONTAINER.css('min-height', height + 'px');
			CHATBODY.css('min-height', height - 140 + 'px');
	}

	checkSessionStorage(){
		// Lets check if its the first visit of user during his browser session or not
		if(sessionStorage.getItem('messages') !== null){
			// If not hest chat messages form session storage
			this.messages = sessionStorage.getItem('messages').split(',');
		}else{
			// If yes create a random mesage and add it to session
			let	randomMessage = this.getRandomMessage();
			this.addMessageToSessionStorage(randomMessage);
		}
	}

	getRandomMessage(){
		// Create random message for chat
		let randomMessagesArray = ['Random message 1', 'Random message 2', 'Random message 3', 'Random message 4'];
		return randomMessagesArray[Math.floor(Math.random() * randomMessagesArray.length)];
	}

	addMessageToSessionStorage(currentMessage){
		// Add message to session storage
		this.messages.push(currentMessage);
		sessionStorage.setItem('messages', this.messages);
		this.writeChatMessages();
	}

	writeChatMessages(){
		// Write messages in chat window
		CHATBODY.html('');
		for(let i = 0, y = this.messages.length; i<y; i++){
		  	if(i === 0){
				CHATBODY.append(`<div class="messageContainer messageContainerRight"><div class="messageText">${this.messages[i]}<span class="triangle-topleft"></span></div><div class="messageImage"><a href="index.php"><img src="images/girl.jpg"/></a><span class="statusDot"></span></div></div>`);
			}else{
				CHATBODY.append(`<div class="messageContainer messageContainerLeft"><div class="messageText">${this.messages[i]}<span class="triangle-topright"></span></div><div class="messageImage"><img src="images/mancl.jpg"/></div></div>`);
			}
		}
		// Clear the message input
		INPUT.val('');
		// And scroll chat body to bottom
		this.animateChatToBottom()
	}

	animateChatToBottom(){
		// Scroll chat body to bottom.
		CHATBODY.animate({
			scrollTop: CHATBODY.prop("scrollHeight")
		}, 100);
	}

	// Write chat messages after html loads
	writeChatMessagesAtStart(){
		this.checkSessionStorage();
		this.writeChatMessages();
	}
	// Add new chat message and write all messages
	addChatMessages(){
		this.checkSessionStorage();
		if(INPUT.val() !==''){
			let currentMessage = INPUT.val();
			this.addMessageToSessionStorage(currentMessage);
		}
		this.writeChatMessages();
	}

}
