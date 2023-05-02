const express = require('express');
const app = express(); 
const port = process.env.PORT || 5000;
const data=require('./recipe.json');

app.get('/', (req, res) => {
    res.send('Deshi Food')
});

app.get('/chef',(req,res)=>{
    res.send(data)

})

app.listen(port, () => {
    console.log(`Deshi Food API is running on port: ${port}`)
})