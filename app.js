//wczytywanie biblioteki http
const { generatePrime } = require('crypto')
const express = require('express')
const port = process.env.PORT || 3000

//funkcja która później jest odczytywana przy renderowaniu strony w tytule
const generateTitle = () => {
    return 'Node js genereting dynamic'
}

//zainicjowanie biblioteki express
const app = express()
//zainicjowanie by aplikacja korzystała z silnika szablonów 'hbs'
app.set('view engine', 'hbs')


app.get('/', function(req, res) {
    //wskazanie na szablon index.hbs oraz utworzenie zmienny o nazwie pageTitle oraz PageBody które można zastosować później w dokumencie index.hbs

    const title = generateTitle()

    res.render('index', {
        pageTitle: title,
        pageBody: 'hello noide' 
    })
})
app.get('/kontakt', (req,res) => {
    res.send('to są dane kontaktowe')
})
//test
//nasluchwianie portu
app.listen(port)

//test2

//test3