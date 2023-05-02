const express = require('express');
const app = express(); 
const port = process.env.PORT || 5000;
const data=require('./recipe.json');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Deshi Food')
});

app.get('/chef',(req,res)=>{
    res.send(data)
});

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedData = data.find(pd => pd.id === id);
    res.send(selectedData)
})

app.listen(port, () => {
    console.log(`Deshi Food API is running on port: ${port}`)
})