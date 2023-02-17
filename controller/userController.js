import db from '../db/connection.js'

    export const createTable = ()=>{
        db.query(`CREATE TABLE users`,(error,result,failed)=>{
            error ? console.log(error) : console.log(result)
        })
    }

    export const inserUser = (req,res) => {
        try {
            console.log(req.body,"first")
          const  {name, emailID, phone, age, DOB} = req.body;
            if (!name || !emailID || !phone) {
            console.log("Name, Email ID and Phone are required");
            return;
            }

            if (!emailID.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            console.log("Invalid Email ID format");
            return;
            }
        
 
            if (!phone.match(/^\d{10}$/)) {
            console.log("Invalid Phone Number format");
            return;
            }
            db.query(
                `INSERT INTO users (name, emailID, phone, age, DOB) VALUES ('anaja', 'adarsh112@gmail.com', 5245784145, 24, 23-10-2000)`,
                (error, result, failed) => {
                error ? console.log(error) : console.log(result)
                }
            )
            
        } catch (error) {
            console.log(error,"uuuu")
            
        }
    }
export const findAllUsers =  ()=>{
    db.query(`SELECT * FROM blocks WHERE 1`,(error,result,failed)=>{
        error ? console.log(error) : console.log(result)//here get all users array
    })
} 
export const updateUser = ()=>{
    db.query(`UPDATE blocks SET name='abhi' WHERE id=22`,(error,result,failed)=>{
        error ? console.log(error) : console.log(result)
    })
}
export const deleteUser = ()=>{
    db.query("DELETE FROM blocks WHERE name='raja'",(error,result,failed)=>{
    error ? console.log(error) : console.log(result)
    })
}