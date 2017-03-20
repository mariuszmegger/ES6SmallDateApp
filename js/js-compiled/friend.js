'use strict';
"use-strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var button = $('.addFriend');
var appContainer = $('.appContainer');

var Friend = function () {
	function Friend(id) {
		_classCallCheck(this, Friend);

		this._friendId = id;
	}

	_createClass(Friend, [{
		key: 'checkFriend',
		value: function checkFriend() {
			// Connect to backend and check if its friend
			this.checkIfIsFriendInDatabase();

			if (button.hasClass('notAdded')) {
				// if not
				this.addFriend();
			} else if (button.hasClass('added')) {
				// if yes
				this.removeFriend();
			}
		}
	}, {
		key: 'checkIfIsFriendInDatabase',
		value: function checkIfIsFriendInDatabase() {
			// Connect to backend and check if its friend if yes return true if not return false
		}
	}, {
		key: 'addFriendToDatabase',
		value: function addFriendToDatabase() {
			// Add friend to database if ok return true if not false
		}
	}, {
		key: 'removeFriendFromDatabase',
		value: function removeFriendFromDatabase() {
			// Remove friend from database if ok return true if not false
		}
	}, {
		key: 'addFriend',
		value: function addFriend() {
			var add = true;
			//Add him to database
			this.addFriendToDatabase();
			//If ok change colors
			this.changeColors(add);
			//And display message
			var message = 'message';
			this.displayMessage(message);
			// If any of this return error display error
			var error = '';
			var errorMessage = '';
			this.displayError(error, errorMessage);
		}
	}, {
		key: 'removeFriend',
		value: function removeFriend() {
			var add = false;
			//Remove him from database
			this.removeFriendFromDatabase();
			//If ok change colors
			this.changeColors(add);
			//And display message
			var message = 'message1';
			this.displayMessage(message);
			// If any of this return error display error
			var error = '';
			var errorMessage = '';
			this.displayError(error, errorMessage);
		}
	}, {
		key: 'changeColors',
		value: function changeColors(add) {
			if (add) {
				button.removeClass('notAdded').addClass('added').text('REMOVE FRIEND');
				appContainer.css("background-color", "#D0EDCF");
			} else {
				button.removeClass('added').addClass('notAdded').text('ADD AS FRIEND');
				appContainer.css("background-color", "#EDEBEC");
			}
		}
	}, {
		key: 'displayError',
		value: function displayError(error, errorMessage) {
			// It should be one function for all project in main helpers class
		}
	}, {
		key: 'displayMessage',
		value: function displayMessage(message) {
			// It should be one function for all project in main helpers class
		}
	}]);

	return Friend;
}();