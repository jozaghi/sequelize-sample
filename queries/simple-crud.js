
const Connection=require("../connection");




module.exports.create=async(title,body)=>{
   const { article }= await Connection.connect();
   article.create({
       title,
       body
   });
};


module.exports.findById=async (id)=>{
    const { article }= await Connection.connect();
    return await article.findById(id);
};

module.exports.findAll=async () =>{
    const { article }= await Connection.connect();
    return await article.findAll();    
}
