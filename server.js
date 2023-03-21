
const express = require ('express');
// hold something for us to actively use the methods
const app = express()
const PORT = 3000
// save 
const cors = require('cors')

// an obj
const players = {
    'kobe bryant': {
        'ratings': 93,
        'strength':'natural feels,IQ,speed,explosiveness,will,want it more',
        'birthLocation': 'Italy, England',
        'Killer instinct': "yes"

    },
    'michael jordan':{
        'ratings': 99,
        'strength': 'natural feels,IQ,speed,explosiveness,will',
        'weakness': 'things from outside of basketball, cigars ect',
        'birthLocation': "Brooklyn, New York"
    },
    'lebron james':{
        'ratings': 89,
        'strength': 'size,IQ,durability,explosiveness',
        'birthLocation': 'Akron, Ohio',
        'killer instinct': 'No'
    },
    
    'Kareem Abdul-Jabbar':{
        'ratings': 82,
        'strength': 'unguardable move',
        'weakness': 'a bit not strong',
        'birthLocation': 'Harlem, New York',
        'killer instinct': 'No'

    },
    'steph curry': {
        'ratings': 82,
        'strength': 'shoot',
        'weakness': 'a bit not strong',
        'birthLocation': 'Akron, Ohio',
        'killer instinct': 'No'

    },
    'kevin durant': {
        'ratings': 88,
        'strength': 'best scorer of all time',
        'weakness': 'not strong enough',
        'birthLocation': 'washington, usa',
        'killer instinct': 'No'

    },
    'shaq': {
        'ratings': 92,
        'strength': 'physicially stronger than everyone, speed for big guy',
        'weakness': 'free throws',
        'birthLocation': 'Newark, usa',
        'killer instinct': 'yes'

    },
    
    'invalid':{
        'Not valid': 'The name you have entered is not considered a great haha',
    }
}

// to hear a request
app.get('/', (req,res) => {
    // look for wherever the index file is
    res.sendFile(__dirname + '/index.html')
})
// creating a different path... a
app.get('/api/:playerName', (req,res) => {
    // we're looking for the query param
    const playersName = (req.params.playerName.toLowerCase())
// this is to use the key because the name has spaces
    if(players[playersName]){
        // resond with some json
        res.json(players[playersName])
    }else{
        res.json(players['invalid'])
    }
    // sending json file
    // res.json(rappers)
})
// now what do we need the sever to do
app.listen(process.env.PORT || PORT, ()=> {
    console.log(`See me Rolling on ${PORT}!`)
})