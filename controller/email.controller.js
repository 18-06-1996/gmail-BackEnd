
const Email = require ('../model/email.js')


const saveSentEmails = async(request,response) =>{
try {
 const email = await  new Email(request.body)
 email.save()
 response.status(200).json('email saved successfully...')
} catch (error) {
  response.status(500).json({error:error.message})
}
}

const getEmails = async (request,response) =>{
    try {
        let = emails;
        if(request.params.type === 'bin'){
         emails = await Email.find({bin: true})
        }else if(request.params.type === 'allmail'){
                    emails = await Email.find({})
        }else if(request.params.type === 'starred'){
         emails = await Email.find({starred:true,bin:false})
        }else if (request.params.type === 'inbox') {
          emails = [];
      }
        else{
        emails = await  Email.find({type : request.params.type})
    }
    response.status(200).json(emails)

    } catch (error) {
        console.log(error);
        response.status(500).json({error:error.message})
    }
}

const moveEmailsToBin = async(request,response) => {
  try {
    await Email.updateMany({_id: {$in: request.body}},{$set:{bin:true,starred:false,type:''}})
    response.status(200).json('Emails Deleted Successfully...')
  } catch (error) {
    console.log(error);
    response.status(500).json({error:error.message})
  }
}

const toggleStarredEmails = async(request,response)=>{
  try {
    await  Email.updateOne({_id:request.body.id}, {$set:{starred:request.body.value}})
    response.status(200).json('Emails Starred Successfully...')

  } catch (error) {
    console.log(error);
    response.status(500).json({error:error.message})
  }
}

const deleteEmails = async(request,response) =>{
  try {
    await Email.deleteMany({_id : {$in:request.body}})
    response.status(200).json('Emails Deleted Successfully...')
  } catch (error) {
    console.log(error);
    response.status(500).json({error:error.message})
  }
}

module.exports = saveSentEmails,getEmails,moveEmailsToBin,toggleStarredEmails,deleteEmails
