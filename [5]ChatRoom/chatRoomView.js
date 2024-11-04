function updateChatRoomView() {
    let currentUser = model.data.users[model.app.selectedUsers.loggedInUser];
    let friendUser = model.data.users[model.app.selectedUsers.friendUser];

    chatRoom = /*HTML*/ `
    <h1 class="chat-title">Chat Room</h1>
    <div class="chat-container">
        <div class="chat-user-info">
            <img src="${currentUser.userImages[0]}" class="user-avatar">
            <div class="user-name">${currentUser.name}</div>
        </div>
        <div class="chat-friend-info">
            <img src="${friendUser.userImages[0]}" class="friend-avatar">
            <div class="friend-name">Chatting with: ${friendUser.name}</div>
        </div>
        <div class="chat-messages">
              ${showMessages()}
        </div>
        <div class="chat-input-container">
            <input type="text" class="chat-input" oninput="model.input.tempMessages.chatTemp=this.value" placeholder="Type a message...">
            <button class="send-button" onclick="sendMessage()">Send</button>
        </div>
    </div>
    <button onclick="goToProfile()">Back</button>`;
    appDiv.innerHTML = chatRoom;
}

function sendMessage() {
    time = new Date().toLocaleString();
    let message = {
        sender: model.data.users[model.app.selectedUsers.loggedInUser].username,
        recipient: model.data.users[model.app.selectedUsers.friendUser].username,
        msg: model.input.tempMessages.chatTemp,
        timestamp: time,
    }
    model.data.chatroom.push(message);
    console.log("message:", message);
    model.input.tempMessages.chatTemp = '';
    updateChatRoomView();
}

function showMessages() {
    let currentUser = model.data.users[model.app.selectedUsers.loggedInUser].username;
    let friendUser = model.data.users[model.app.selectedUsers.friendUser].username;
    let allMessages = model.data.chatroom.filter
    
    (msg => (msg.sender === currentUser && friendUser === msg.recipient) ||
    (msg.sender === friendUser && currentUser === msg.recipient));
    let chatHtml = '';
    for (let msgIndex = 0; msgIndex < allMessages.length; msgIndex++) {
        let message = allMessages[msgIndex];
        console.log("message:", message);
        chatHtml += /*HTML*/`
    <div class="chat-message">
        <div>${message.sender} Says:</div>
        <div>${message.msg}</div>
        <div>${message.timestamp}</div>
    </div>
    `;
    }
    return chatHtml;
}