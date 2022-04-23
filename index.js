import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'

const app = express ();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let userInfo = [];
let userTweet = [];

app.post('/sign-up', (req, res) => {
    let userData = req.body.user;
    userInfo.push(userData);
    return res.send('OK');
});

app.post('/tweets', (req, res) => {
    let tweetData = req.body.tweet;
    userTweet.push(tweetData);
    return res.send('OK');
});

app.get('/tweets', (req, res) => {
    /* const data = userInfo.map((avatar) => ({
        ...userTweet.find((av) => av.username === avatar.username), 
        ...userInfo 
    })); */
    return res.send(data);
});


app.listen(5000, () => {
    console.log('Running!');
});

