
const findAll = async (db) => {
    return await db.select('*').from('clients')
}    

const findById = async(db, id) => {
    const pessoa = await db('clients').where('id', id)
            if(pessoa.length > 0){                
                return pessoa[0]
            }else{
                return {}
                }
}

const delOne = async (db, id) => {
    await db('clients').where('id', id).del().limit(1)   
}

const update = async(db, data, id) => {
    return await db('clients').where({id}).update(data)
}

const create = async(db, data) => {
    await db('clients').insert({name:`${data.name}`, cpf: `${data.cpf}`, email: `${data.email}`})
}

    module.exports = {
        findAll,
        delOne,
        create,
        findById,
        update
    }