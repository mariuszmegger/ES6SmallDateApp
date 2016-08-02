$(document).ready(function(){
    var app = {
        data : {
            messages : []
        },
        init : function(){
            this.getChatWindowHeight();
            this.writeChatMessages();
        },
        // Getting height of window and chat container required for positioning footer and height of chat window.
        getChatWindowHeight : function(){
          var height = $(window).height()  ;
          $('.appContainer').css('min-height',height+'px');
          $('.appChatBody').css('min-height',(height - 140)+'px');
        },

        // Changing styles when add friend clicked

        addFriend : function(){
            $('.addFriend').click(function(){
                var button = $(this);
                var appContainer = $('.appContainer');

                if(button.hasClass('notAdded')){
                    button.removeClass('notAdded').addClass('added').text('REMOVE FRIEND');
                    appContainer.css("background-color","#D0EDCF")
                }
                else if(button.hasClass('added')){
                    button.removeClass('added').addClass('notAdded').text('ADD AS FRIEND');
                    appContainer.css("background-color","#EDEBEC")
                }
            })
        },

        // Writing and saving to sessions storage random message when session storage is empty

        getRandomMessage : function(){
            var storageMessages = sessionStorage.getItem('messages');
            var randomMessagesArray = ['Random message 1', 'Random message 2', 'Random message 3', 'Random message 4'];
            if(storageMessages == null){
                var randomMessage = randomMessagesArray[Math.floor(Math.random() * randomMessagesArray.length)];
                app.data.messages.push(randomMessage);
                sessionStorage.setItem('messages', app.data.messages);
                this.writeChatMessages()
            }

        },
        // Adding new messages to chat window and session storage
        appendToMessagesArray : function(){
            $('.messageInput').keypress(function(e) {
                var input = $(this);
                var chatContainer = $('.chatAppBody');
                if(e.which == 13) {
                    var message = input.val();
                    if(message.length != 0){
                        app.data.messages.push(message);
                        sessionStorage.setItem('messages', app.data.messages);
                        $('.chatAppBody').append('<div class="messageContainer messageContainerLeft"><div class="messageText">'+message+'<span class="triangle-topright"></span></div><div class="messageImage"><img src="images/mancl.jpg"/></div></div>')
                    }
                    input.val('');
                    chatContainer.animate({
                        scrollTop: $(".messageInput").offset().top
                    }, 100);
                }
            });
        },
        // Writing messages if sessions storage is not empty
        writeChatMessages : function(){
            var storageMessages = sessionStorage.getItem('messages');
            if(storageMessages != null){
                app.data.messages = storageMessages.split(',');
                $.each( app.data.messages, function( index, value ){
                    if(index == 0){
                        $('.chatAppBody').append('<div class="messageContainer messageContainerRight"><div class="messageText">'+value+'<span class="triangle-topleft"></span></div><div class="messageImage"><a href="index.php"><img src="images/girl.jpg"/></a><span class="statusDot"></span></div></div>');
                    }else{
                        $('.chatAppBody').append('<div class="messageContainer messageContainerLeft"><div class="messageText">'+value+'<span class="triangle-topright"></span></div><div class="messageImage"><img src="images/mancl.jpg"/></div></div>');
                    }
                });
            }
        }
    }

    app.init();
    app.addFriend();
    app.getRandomMessage();
    app.appendToMessagesArray();

})
