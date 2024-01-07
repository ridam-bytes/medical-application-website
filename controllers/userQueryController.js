import userQueryMdoel from "../models/userQueryModel.js";

export const addUserQuery = async(req, res) => {
    try{
        const { name, mail, message } = req.body;
        if(!isMailValid(mail)){
            return res.send({ error: "Invalid Mail" });
        }
        if(!isNameValid(name)){
            return res.send({ error: "Invalid Name" });
        }
        if(!isMessageValid(message)){
            return res.send({ error: "Invalid Message" });
        }
       
        const userQuery = await new userQueryMdoel({
            name,
            mail,
            message,
            status: 'Pending'
        }).save();

        res.status(201).send({
            success: true,
            message: "User query successfully submitted",
            userQuery
        });

    }
    catch(e){
        res.status(500).send({
            success: false,
            message: 'Error in Registeration',
            error
        })
    }
}


const isMailValid = (mail) => {
    if (mail.length === 0) {
      return false
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(mail)) {
      return false;
    }
    return true;
  }

  const isMessageValid = (message) => {
    if(message.length === 0){
      return false;
    }
    return true;
  }

  const isNameValid = (name) => {
    if(name.length === 0){
      return false;
    }
    return true;
  }
