const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.json())
    .get('/calc', cors(), async (req, res) => {
        const operation = req.query.operation;
        const number_one = parseInt(req.query.numberone);
        const number_two = parseInt(req.query.numbertwo);
    
        console.log(operation + number_one + number_two);
        console.log(executeMathematicalRequest(operation, number_one, number_two));
        res.json(executeMathematicalRequest(operation, number_one, number_two));
    })
    .listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

function executeMathematicalRequest(operation, number_one, number_two) {
    switch (operation) {
        case 'add':
            return (number_one + number_two);
        case 'sub':
            return (number_one - number_two);
        case 'div':
            return (number_one / number_two);
        case 'mul':
            return (number_one * number_two);
        default:
            break;
    }
}
