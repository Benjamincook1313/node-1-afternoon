let id = 0;
let messages = [];

module.exports = {
    createMessages: (req, res) => {
        console.log("hit")
        const  {text, time} = req.body;
        messages.push({id, text, time})
        id++
        res.status(200).send(messages)
        
    },
    readMessages: (req ,res ) => {
        res.status(200).send( messages );
    },
    updateMessages: (req, res) => {
        const { text } = req.body;
        const { id } = req.params;
        const messageIndex = messages.findIndex( message => message.id == id );
        let message = messages[ messageIndex ];

        message = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).send( messages )
    },
    deleteMessages: (req, res) => {
        const deleteId =  req.params.id;
        messageIndex = messages.findIndex( message => message.id == deleteID );
        messages.splice(messageIndex, 1);
        res.status(200).send( messages );
    }
};