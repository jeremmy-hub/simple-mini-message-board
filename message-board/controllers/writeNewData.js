const fs = require('fs');


function appendMessage(file, newMessage) {
    // Step 1: Require the current module to get the existing messages
    const messagesModule = require(file);

    // Step 2: Append the new message to the array
    if(messagesModule.messages)
    messagesModule.messages.push(newMessage);

    // Step 3: Create the new module content as a string
    const newContent = `module.exports = {
  messages: ${JSON.stringify(messagesModule.messages, null, 2)}
};`;

    // Step 4: Write the updated content back to the file
    fs.writeFile(require.resolve(file), newContent, (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
        } else {
            console.log('File successfully updated.');
        }
    });
}

module.exports = appendMessage;
