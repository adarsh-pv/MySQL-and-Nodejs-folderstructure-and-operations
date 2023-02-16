import db from '../db/connection.js'

export const inserUser = (req,res)=>{
    db.query(`INSERT INTO blocks (id, name) VALUES (20, 'raja')`,(error,result,failed)=>{
          console.log(error,"error")
          console.log(result)
})
}
export const findAllUsers =  (req,res)=>{
    db.query(`SELECT * FROM blocks WHERE 1`,(error,result,failed)=>{
     console.log(error)
     console.log(result,"response")//here get all users array
    })
} 
export const updateUser = (req,res)=>{
    db.query(`UPDATE blocks SET name='abhi' WHERE id=22`,(error,result,failed)=>{
        console.log(error)
        console.log(result,"result")
    })
}
export const deleteUser = (req,res)=>{
    db.query("DELETE FROM blocks WHERE name='raja'",(error,result,failed)=>{
    error ? console.log(error) : console.log(result)
    })
}