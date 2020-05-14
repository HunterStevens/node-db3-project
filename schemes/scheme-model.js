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
    return db.select('steps.id', "schemes.scheme_name", 'steps.step_number', 'steps.instructions').from('steps')
    .join('schemes', 'steps.scheme_id', "=", "schemes.id")
    .where({scheme_id:id})
}

function add(scheme){
    return db('schemes').insert(scheme)
    .then(([newId]) =>{
        return findById(newId);
    })
}

function update(changes, id){
    return db('schemes').where({id}).update(changes)
    .then(count =>{
        return findById(id);
    });
}

function remove(id){
    return db('schemes').where({id}).del();
}