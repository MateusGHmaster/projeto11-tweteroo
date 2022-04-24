import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express ();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let userInfo = [];
let userTweet = [];

app.post('/sign-up', (req, res) => {

    let {username, avatar} = req.body;

    if(!username || !avatar){
        res.status(400).json({
            error: {
                type: 'BAD REQUEST',
                message: 'Todos os campos são obrigatórios!'
            }
        })
    } else {
        userInfo.push({username, avatar});
        return res.status(201).send('OK');
    }

});

app.post('/tweets', (req, res) => {

    let {username, tweet} = req.body;

    if(!username || !tweet){
        res.status(400).json({
            error: {
                type: 'BAD REQUEST',
                message: 'Todos os campos são obrigatórios!'
            }
        })
    } else {
        userTweet.push({username, tweet});
        return res.status(201).send('OK');
    }

});

app.get('/tweets', (req, res) => {

    const data = userTweet.map(function(item){
        const avatar = userInfo.map((item) => {
            return item.avatar
        })
        return {
            username: item.username,
            tweet: item.tweet,
            avatar: avatar[0]
        }
     });
    return res.status(201).send(data);
    
});

app.listen(5000, () => {
    console.log('Running!');
});