function getHouses(req, res) {
    const db = req.app.get('db');
    db.get_houses().then(response=>{
        res.status(200).json(response);
    })
};

function addHouse(req,res){
    const {name, address, city, state, zip, img, mortgage, rent} = req.body;
    const db = req.app.get('db');
    db.add_house(name, address, city, state, zip, img, mortgage, rent).then(()=>{
        res.sendStatus(200);
    })
}

function deleteHouse(req,res){
    const { id } = req.params;
    const db = req.app.get('db');
    db.delete_house(id).then(()=>{
        res.sendStatus(200);
    })
}

module.exports = {
    getHouses,
    addHouse,
    deleteHouse
}