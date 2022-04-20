const express = require('express');
const app = express();
const ytdl = require('ytdl-core');
const fs = require('fs')
var router = express.Router();
router.get('/', function (req, res, next) {
    console.log('router called')
    let url = "https://youtu.be/nD_NDngrEl8";
    ytdl(url).pipe(fs.createWriteStream('video.mp4'));
    res.end();
})
app.use(router);
app.listen(2222, () => {
    console.log('app listening on 2222')
})