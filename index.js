const express = require('express');
const req = require('express/lib/request');

const server = express();

server.use(express.json());

const crud = {
    "users": [
        {
            "id": 1,
            "name": "Tate",
            "last_name": "Kegley",
            "company_id": 1,
            "active": false,
            "type": "finance",
            "email": "tkegley0@webeden.co.uk"
        },
        {
            "id": 2,
            "name": "Kattie",
            "last_name": "Filkin",
            "company_id": 1,
            "active": true,
            "type": "finance",
            "email": "kfilkin1@chron.com"
        },
        {
            "id": 3,
            "name": "Odille",
            "last_name": "Jerdein",
            "company_id": 2,
            "active": false,
            "type": "doctor",
            "email": "ojerdein2@trellian.com"
        },
        {
            "id": 4,
            "name": "Josey",
            "last_name": "Clyma",
            "company_id": 2,
            "active": true,
            "type": "finance",
            "email": "jclyma3@weibo.com"
        },
        {
            "id": 5,
            "name": "Lionel",
            "last_name": "Normanell",
            "company_id": 3,
            "active": true,
            "type": "doctor",
            "email": "lnormanell4@prweb.com"
        },
        {
            "id": 6,
            "name": "Lark",
            "last_name": "Saffen",
            "company_id": 3,
            "active": true,
            "type": "finance",
            "email": "lsaffen5@jugem.jp"
        },
        {
            "id": 7,
            "name": "Derril",
            "last_name": "Glowach",
            "company_id": 1,
            "active": false,
            "type": "doctor",
            "email": "dglowach6@t.co"
        },
        {
            "id": 8,
            "name": "Hinze",
            "last_name": "Cleator",
            "company_id": 4,
            "active": true,
            "type": "finance",
            "email": "hcleator7@stumbleupon.com"
        },
        {
            "id": 9,
            "name": "Adelind",
            "last_name": "Harme",
            "company_id": 4,
            "active": false,
            "type": "finance",
            "email": "aharme8@people.com.cn"
        },
        {
            "id": 10,
            "name": "Eryson",
            "last_name": "DoJS",
            "company_id": 4,
            "active": true,
            "type": "finance",
            "email": "eryson@dojs.de"
        },         {
            "id": 11,
            "name": "Bruno",
            "last_name": "DoFront",
            "company_id": 1,
            "active": false,
            "type": "finance",
            "email": "bruno@dofront.co.uk"
        },
        {
            "id": 12,
            "name": "Charlison",
            "last_name": "DoSorriso",
            "company_id": 1,
            "active": true,
            "type": "finance",
            "email": "charlison@smile.com"
        },
        {
            "id": 13,
            "name": "Caio",
            "last_name": "Cabe??a <3",
            "company_id": 2,
            "active": true,
            "type": "doctor",
            "email": "caio@bigbig.com"
        },
        {
            "id": 14,
            "name": "Pedro Arthur",
            "last_name": "Aprendiz",
            "company_id": 2,
            "active": true,
            "type": "finance",
            "email": "pedru@leigo.com"
        },
        {
            "id": 15,
            "name": "Test",
            "last_name": "Test Name",
            "company_id": 3,
            "active": false,
            "type": "doctor",
            "email": "test@test.com"
        }
    ]
}

// node index.js startar o serv.

server.get('/CRUD-AMIGO/:index',(req, res) =>{
const {index} = req.params

return res.json(crud[name]);
})

server.get('/CRUD-AMIGO', (req, res) =>{
return res.json(crud);

})

server.post ('/CRUD-AMIGO', (req, res) =>{
const {name} = req.body;
crud.push(name, company_id, active, email)

return res.json(crud)
})

server.put('/CRUD-AMIGO/:index', (req, res) =>{
const {index} = req.params;
const {name} = req.body

cursos[index] = name;

return res.json(crud);
})

server.delete('CRUD-AMIGO/:index', (req, res) => {
const {index} = req.params;

crud.splice(index, 1);
return res.json({message: 'O usuario foi deletado!!!'})

})






server.listen(3000)
