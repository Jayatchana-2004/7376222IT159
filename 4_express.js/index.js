const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => res.send('Hello World-jayatchana-7376222IT159'))
app.get('/madhumitha', (req, res) => res.send('Hello World-madhumitha-7376222IT189'))


app.listen(PORT, () => console.log(
`Example app listening at http://localhost:${PORT}`))
