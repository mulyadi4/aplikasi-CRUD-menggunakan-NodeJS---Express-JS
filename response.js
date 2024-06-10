const response =(data, message, res) => {
res.status(200).json({

        message:message,
        datas: data
        
  
   


 })

}

    module.exports = response

