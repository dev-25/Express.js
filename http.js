
const express = require('express');
const app = express()
app.use(express.json())

const cources = [
    {id:1, name:'Devesh'},
    {id:2, name:'Aniket'},    
    {id:3, name:'Suraj'}  
]

app.get(('/api/cources/:id'), (req,res)=>{
    const name = cources.find(c => c.id ===parseInt(req.params.id))
    if(!name) res.status(404).send('Not there');
    res.send(name)
});

app.get('/api/cources',(req,res) =>{
 res.send(cources);
})
app.post('/api/cources', (req,res) =>{
    const cource = {
        id: cources.length + 1,
        name: req.body.name
    };
    cources.push(cource);
    req.send(cource);
});
app.listen(3000);

