const { v4:uuidv4 } = require('uuid')

const AWS = require("aws-sdk");
AWS.config.update ({region: "us-east-1"});
const dynamodb = new AWS.DynamoDB.DocumentClient();

const getItems = (req, reply) => {
    // reply.send(items)

    const happyIncOrgId = "c89608cf-39a7-4589-9eea-173ae87192da";
    var params = {
        TableName: 'Employees',
        KeyConditionExpression: '#PK = :PK and begins_with(#SK, :SK)',
        ExpressionAttributeNames: {'#PK': 'PK', '#SK' : 'SK'},
        ExpressionAttributeValues: {
        ':PK': `ORG#${happyIncOrgId}`,
        ':SK': `#METADATA#`
        }
    };
        
    dynamodb.query(params, function(err, data) {
        if (err) console.log(err);
        else {
            console.log(data);
            reply.send(data);
        }
    });
}

const getItem = (req, reply) => {
    const {id} = req.params
    // const item = items.find(item => item.id === id)
    

    const happyIncOrgId = "c89608cf-39a7-4589-9eea-173ae87192da";
    var params = {
        TableName : 'Employees',
        Key: {
            PK : `ORG#${happyIncOrgId}`, 
            SK: `#METADATA#${id}`
        }
    };
        
    dynamodb.get(params, function(err, data) {
        if (err) console.log(err);
        else {
            console.log(data);
            reply.send(data)
        }
    });
    
}

const addItem = (req, reply) => {
    const {name} = req.body
    const {email} = req.body
    const {phone_number} = req.body
    const {hire_date} = req.body
    const {job_id} = req.body
    const {salary} = req.body
    const {commission_pct} = req.body
    const {manager_id} = req.body


    const happyIncOrgId = "c89608cf-39a7-4589-9eea-173ae87192da";
    const projectId = uuidv4();

    var params = {
        TableName : 'Employees',
        Item: {
        PK: `ORG#${happyIncOrgId}`,
        SK: `#METADATA#${projectId}`,
        name: name,
        email: email,
        phone_number: phone_number,
        hire_date: hire_date,
        job_id: job_id,
        salary: salary,
        commission_pct: commission_pct,
        manager_id: manager_id
        }
    };
    
    dynamodb.put(params, function(err, data) {
        if (err) console.log(err);
        else {
            console.log(data);
            reply.code(201).send({message: `Item #METADATA#${projectId} has been added`});
        }
    });



}

const deleteItem = (req, reply) => {
    const {id} = req.params

    const PK_Id = "c89608cf-39a7-4589-9eea-173ae87192da";
    const SK_Id = id;
    var params = {
        TableName : 'Employees',
        Key: {
            PK : `ORG#${PK_Id}`, 
            SK: `#METADATA#${SK_Id}`
        }
    };
    
    dynamodb.delete(params, function(err, data) {
        if (err) console.log(err);
        else reply.send({message: `Item ${id} has been removed`});
    });
}

const updateItem = (req, reply) => {
    const {id} = req.params
    const {name} = req.body
    const {email} = req.body
    const {phone_number} = req.body
    const {hire_date} = req.body
    const {job_id} = req.body
    const {salary} = req.body
    const {commission_pct} = req.body
    const {manager_id} = req.body

    const happyIncOrgId = "c89608cf-39a7-4589-9eea-173ae87192da";
    // name
    if(name !== undefined) {
        var params = {
            TableName: 'Employees',
            Key: { 
                PK : `ORG#${happyIncOrgId}`, 
                SK: `#METADATA#${id}`
            },
            UpdateExpression: 'set #name = :name',
            ExpressionAttributeNames: {'#name' : 'name'},
            ExpressionAttributeValues: {
            ':name' : name
            },
        };
        
        dynamodb.update(params, function(err, data) {
            if (err) console.log(err);
            else reply.send({message: `Item ${id} has been updated`});
        });
    }
    
    // email
    if(email !== undefined) {
        var params = {
            TableName: 'Employees',
            Key: { 
                PK : `ORG#${happyIncOrgId}`, 
                SK: `#METADATA#${id}`
            },
            UpdateExpression: 'set #email = :email',
            ExpressionAttributeNames: {'#email' : 'email'},
            ExpressionAttributeValues: {
                ':email' : email
            },
        };
        
        dynamodb.update(params, function(err, data) {
            if (err) console.log(err);
            else reply.send({message: `Item ${id} has been updated`});
        });
    }

    // phone_number
    if(phone_number !== undefined) {
        var params = {
            TableName: 'Employees',
            Key: { 
                PK : `ORG#${happyIncOrgId}`, 
                SK: `#METADATA#${id}`
            },
            UpdateExpression: 'set #phone_number = :phone_number',
            ExpressionAttributeNames: {'#phone_number' : 'phone_number'},
            ExpressionAttributeValues: {
                ':phone_number' : phone_number
            },
        };
        
        dynamodb.update(params, function(err, data) {
            if (err) console.log(err);
            else reply.send({message: `Item ${id} has been updated`});
        });
    }

    // hire_date
    if(hire_date !== undefined) {
        var params = {
            TableName: 'Employees',
            Key: { 
                PK : `ORG#${happyIncOrgId}`, 
                SK: `#METADATA#${id}`
            },
            UpdateExpression: 'set #hire_date = :hire_date',
            ExpressionAttributeNames: {'#hire_date' : 'hire_date'},
            ExpressionAttributeValues: {
                ':hire_date' : hire_date
            },
        };
        
        dynamodb.update(params, function(err, data) {
            if (err) console.log(err);
            else reply.send({message: `Item ${id} has been updated`});
        });
    }

    // job_id
    if(job_id !== undefined) {
        var params = {
            TableName: 'Employees',
            Key: { 
                PK : `ORG#${happyIncOrgId}`, 
                SK: `#METADATA#${id}`
            },
            UpdateExpression: 'set #job_id = :job_id',
            ExpressionAttributeNames: {'#job_id' : 'job_id'},
            ExpressionAttributeValues: {
                ':job_id' : job_id
            },
        };
        
        dynamodb.update(params, function(err, data) {
            if (err) console.log(err);
            else reply.send({message: `Item ${id} has been updated`});
        });
    }

    // salary
    if(salary !== undefined) {
        var params = {
            TableName: 'Employees',
            Key: { 
                PK : `ORG#${happyIncOrgId}`, 
                SK: `#METADATA#${id}`
            },
            UpdateExpression: 'set #salary = :salary',
            ExpressionAttributeNames: {'#salary' : 'salary'},
            ExpressionAttributeValues: {
                ':salary' : salary
            },
        };
        
        dynamodb.update(params, function(err, data) {
            if (err) console.log(err);
            else reply.send({message: `Item ${id} has been updated`});
        });
    }

    // commission_pct
    if(commission_pct !== undefined) {
        var params = {
            TableName: 'Employees',
            Key: { 
                PK : `ORG#${happyIncOrgId}`, 
                SK: `#METADATA#${id}`
            },
            UpdateExpression: 'set #commission_pct = :commission_pct',
            ExpressionAttributeNames: {'#commission_pct' : 'commission_pct'},
            ExpressionAttributeValues: {
                ':commission_pct' : commission_pct
            },
        };
        
        dynamodb.update(params, function(err, data) {
            if (err) console.log(err);
            else reply.send({message: `Item ${id} has been updated`});
        });
    }
    
    // manager_id
    if(manager_id !== undefined) {
        // manager_id
        var params = {
            TableName: 'Employees',
            Key: { 
                PK : `ORG#${happyIncOrgId}`, 
                SK: `#METADATA#${id}`
            },
            UpdateExpression: 'set #manager_id = :manager_id',
            ExpressionAttributeNames: {'#manager_id' : 'manager_id'},
            ExpressionAttributeValues: {
                ':manager_id' : manager_id
            },
        };

        dynamodb.update(params, function(err, data) {
            if (err) console.log(err);
            else reply.send({message: `Item ${id} has been updated`});
        });
    }

}

module.exports = {
    getItems, 
    getItem,
    addItem,
    deleteItem,
    updateItem
}