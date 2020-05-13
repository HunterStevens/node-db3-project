const db = require('../data/dbConfig');

module.exports ={
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find(){
    return db('schemes');
}

function findById(id){
    return db('schemes').where({id}).first();
}

function findSteps(id){
    return db('steps').where({scheme_id:id})
}

function add(scheme){
    return db('schemes').insert(scheme)
    .then(([newId]) =>{
        return findById(newId);
    })
}

function update(changes, id){
    
}

function remove(id){
    
}