const simpleCRUD=require("./queries/simple-crud");


var runQueries= async ()=>{
    //create
    /*
    await simpleCRUD.create("sample title","sample body");
    */


    //find by Id
    /*
    let article= await simpleCRUD.findById(1);
    if(article){
        console.log(article.dataValues);
    }else{
        console.log("article is not found!!!");
    }
    */

    //find all
    /*
    let articles= await simpleCRUD.findAll();
    console.log(articles.length);
    */


    
}


runQueries().then(()=>{

    console.log("success");

}).catch(err=>{
    console.log("error",err);
});



