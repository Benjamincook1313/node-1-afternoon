let messages = []
let id = 0

module.exports = {

    read: (req, res) => {
        res.status(200).send(messages)
    },

    create: (req, res) => {
        const {text, time} = req.body
        const message = {
            id,
            text,
            time
        }
        messages.push(message)
        id++
        res.status(200).send(messages)
    },

    update: (req, res) => {
        const {text, time} = req.body
        const {id} = req.params
        let index = null
        messages.forEach((message, i) => {
            if(message.id === id * 1){
                index = i
            }
        })
        messages[index] = {
            id: id,
            text: text,
            time: time
        }
        res.status(200).send(messages)
    },

    delete: (req, res) => {
        let index = null
        const {id} = req.params
        messages.forEach((message, i) => {
            if(message.id === id * 1){
                index = i
            }
        })
        messages.splice(index, 1)
        res.status(200).send(messages)
    }
}