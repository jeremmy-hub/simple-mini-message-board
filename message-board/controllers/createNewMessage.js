function createNewMessage(user, userText) {
    return {    user: user,
                text: userText,
                added: new Date().toLocaleDateString()
    }
}


module.exports = createNewMessage;
