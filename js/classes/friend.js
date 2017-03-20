"use-strict";
const button = $('.addFriend');
const appContainer = $('.appContainer');

class Friend{
	constructor(id){
		this._friendId = id;
	}

	checkFriend(){
		// Connect to backend and check if its friend
		this.checkIfIsFriendInDatabase();

		if(button.hasClass('notAdded')){
			// if not
			this.addFriend();
		}else if(button.hasClass('added')){
			// if yes
			this.removeFriend()
		}

	}
	checkIfIsFriendInDatabase(){
		// Connect to backend and check if its friend if yes return true if not return false
	}
	addFriendToDatabase(){
		// Add friend to database if ok return true if not false
	}
	removeFriendFromDatabase(){
		// Remove friend from database if ok return true if not false
	}

	addFriend(){
		let add = true;
		//Add him to database
		this.addFriendToDatabase();
		//If ok change colors
		this.changeColors(add);
		//And display message
		let message = 'message';
		this.displayMessage(message);
		// If any of this return error display error
		let error = '';
		let errorMessage = '';
		this.displayError(error, errorMessage);
	}

	removeFriend(){
		let add = false;
		//Remove him from database
		this.removeFriendFromDatabase();
		//If ok change colors
		this.changeColors(add);
		//And display message
		let message = 'message1';
		this.displayMessage(message);
		// If any of this return error display error
		let error = '';
		let errorMessage = '';
		this.displayError(error, errorMessage);
	}

	changeColors(add){
		if(add){
			button.removeClass('notAdded').addClass('added').text('REMOVE FRIEND');
			appContainer.css("background-color","#D0EDCF")
		}else{
			button.removeClass('added').addClass('notAdded').text('ADD AS FRIEND');
			appContainer.css("background-color","#EDEBEC")
		}

	}

	displayError(error, errorMessage){
		// It should be one function for all project in main helpers class
	}

	displayMessage(message){
		// It should be one function for all project in main helpers class
	}
}
