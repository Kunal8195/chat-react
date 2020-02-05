const mongoose = require('mongoose');

const Message = mongoose.model('Message')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('OK');
    })

    app.post('/addMessage', async (req, res) => {
        console.log("requestedURL", req.url, req.body)

        let data = req.body
        let result = await Message.updateOne(
        	{},
        	{$push:{messageList: data}},
        	{upsert:true}
        
        )

        console.log("message", result)
        res.send("ok message added");
    })


    app.get('/getMessages', async (req, res) => {

    	console.log("requested URL", req.url);
    	let result = await Message.find(
    		{},
    		{messageList:1}
    		)

    	console.log("message list", result);
    	res.send(result);
    })
}