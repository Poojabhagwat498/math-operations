const express = require('express')
const app = express()
const port = 5000
const path = require('path')


app.use(express.json());
app.use(express.static('public'));


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
}) 

app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;

  let result;

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        return res.json({ error: 'Cannot divide by zero' });
      }
      result = num1 / num2;
      break;
    default:
      return res.json({ error: 'Invalid operation' });
  }

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
