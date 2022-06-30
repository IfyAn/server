import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    //console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    res.send(`User added successfully.`);
};

export const getUser = (req, res) => {
    const singleUser= users.filter((user) =>user.id ===req.params.id )
    res.send(singleUser)
    //res.send(req.params.id)
};

export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
    res.send('User successful deleted')
};

export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.name = req.body.name;
    user.email = req.body.email;
    user.contact = req.body.contact;

    console.log(`username has been updated to ${req.body.name}.age has been updated to ${req.body.email}`)
    res.send('User successfully updated')
};