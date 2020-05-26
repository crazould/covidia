const express = require('express')
const app = express()
const router = express.Router()
const port = process.env.PORT || 8080


app.use(express.static(__dirname))
app.use( '/' ,router);

router.get('/',(req,res) => res.sendFile(`${__dirname}/views/home.html`))
router.get('/statistics',(req,res) => res.sendFile(`${__dirname}/views/statistics.html`))
router.get('/news',(req,res) => res.sendFile(`${__dirname}/views/news.html`))
router.get('/about',(req,res) => res.sendFile(`${__dirname}/views/about.html`))
router.get('/support',(req,res) => res.sendFile(`${__dirname}/views/support.html`))

app.listen(port, () => console.log(`app running on port: ${port}`))
