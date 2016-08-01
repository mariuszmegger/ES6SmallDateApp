$(document).ready(function(){
    var app = {
        data : {
            messages : []
        },
        init : function(){
            this.writeChatMessages()
        },
        addFriend : function(){
            $('.addFriend').click(function(){
                var button = $(this);
                var appContainer = $('.appContainer');

                if(button.hasClass('notAdded')){
                    console.log(button);
                    button.removeClass('notAdded').addClass('added').text('REMOVE FRIEND');
                    appContainer.css("background-color","#D0EDCF")
                }
                else if(button.hasClass('added')){
                    console.log(button);
                    button.removeClass('added').addClass('notAdded').text('ADD AS FRIEND');
                    appContainer.css("background-color","#EDEBEC")
                }
            })
        },
        getRandomMessage : function(){

            var storageMessages = sessionStorage.getItem('messages');
            var randomMessagesArray = ['random message 1', 'random message 2', 'random message 3', 'random message 4'];
            if(storageMessages == null){
                var randomMessage = randomMessagesArray[Math.floor(Math.random() * randomMessagesArray.length)];
                app.data.messages.push(randomMessage);
                sessionStorage.setItem('messages', app.data.messages);
                this.writeChatMessages()
            }

        },

        appendToMessagesArray : function(){
            $('.messageInput').keypress(function(e) {
                var input = $(this);
                if(e.which == 13) {
                    var message = input.val();
                    if(message.length != 0){
                        app.data.messages.push(message);
                        sessionStorage.setItem('messages', app.data.messages);
                        $('.chatAppBody').append('<div class="messageContainer messageContainerLeft"><div class="messageText">'+message+'<span class="triangle-topright"></span></div><div class="messageImage"><img src="images/obrazek.jpg"/></div></div>')
                    }
                    input.val('');
                }
            });
        },

        writeChatMessages : function(){
            var storageMessages = sessionStorage.getItem('messages');
            if(storageMessages != null){
                app.data.messages = storageMessages.split(',');
                $.each( app.data.messages, function( index, value ){
                    if(index == 0){
                        $('.chatAppBody').append('<div class="messageContainer messageContainerRight"><div class="messageText">'+value+'<span class="triangle-topleft"></span></div><div class="messageImage"><a href="index.php"><img src="images/obrazek.jpg"/></a><span class="statusDot"></span></div></div>');
                    }else{
                        $('.chatAppBody').append('<div class="messageContainer messageContainerLeft"><div class="messageText">'+value+'<span class="triangle-topright"></span></div><div class="messageImage"><img src="images/obrazek.jpg"/></div></div>');
                    }
                });


            }

            console.log(app.data.messages);
        }
    }



    app.init();
    app.addFriend();
    app.getRandomMessage();
    app.appendToMessagesArray();

})

