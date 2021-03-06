const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket){
    console.log('a user is connected')
    socket.on('disconnect', function(){
        console.log('a user is disconnected')
    })

    socket.on('chat message', function(msg){
        console.log('message reçu : ' + msg)
        io.emit('chat message', msg)
    })
})

http.listen(3000, () => {
    console.log('Server runing on 3000')
})