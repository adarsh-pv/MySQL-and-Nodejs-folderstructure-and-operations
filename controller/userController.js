import db from '../db/connection.js'

export const getallUsers = async (req,res)=>{
    db.query(`INSERT INTO blocks (id, name) VALUES (65, 'anushs')`,(error,result,fields)=>{
          console.log(error,"error")
          console.log(result)
})
}