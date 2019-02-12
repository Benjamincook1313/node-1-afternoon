const bodyParser = require('body-parser')
const ctrl = require('./controllers/messages_controller')
const express = require('express')

const app = express();

app.use( bodyParser.json() );

app.post ('/api/messages', ctrl.createMessages)
app.get ('/api/messages', ctrl.readMessages)
app.put('/api/messages', ctrl.updateMessages)
app.delete ('/api/message', ctrl.deleteMessages)





app.listen(3001, () => console.log('I WIN 2'))
